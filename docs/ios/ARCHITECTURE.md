# Architecture du SDK Ecovelo iOS

## Vue d’ensemble

Le SDK Ecovelo iOS est conçu comme un **conteneur autonome** qui embarque l’application **Ionic/Capacitor** (assets `www/`) et un **runtime Capacitor** côté natif.  
Cette approche répond aux exigences **DOC01010** :

- **Conteneur autonome** embarquant :
  - les écrans/vues du parcours (recherche, scan, location, restitution, confirmation…)
  - la logique métier et les appels API du service
  - la gestion des états et erreurs du parcours
- **Côté application hôte (Cityway)** :
  - lancer un **point d’entrée unique** (SwiftUI ou ViewController)
  - fournir le **token IAM Cityway standardisé** au moment de l’initialisation
  - recevoir un **callback de fin de parcours** (succès / annulation / erreur)

## Diagramme d’architecture

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                         APPLICATION HÔTE iOS (Cityway)                        │
│                                                                              │
│  ┌───────────────────────────────┐                                           │
│  │ Auth / IAM Cityway (host)     │                                           │
│  │ - OIDC / SSO (ex: mon-compte) │                                           │
│  │ - Stockage sécurisé tokens    │                                           │
│  └───────────────┬───────────────┘                                           │
│                  │ fournit token IAM                                         │
│                  ▼                                                          │
│  ┌───────────────────────────────────────────────────────────────────────┐   │
│  │                              ECOVELO SDK iOS                           │   │
│  │                                                                       │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │   │
│  │  │                       PUBLIC API LAYER                          │  │   │
│  │  │                                                                 │  │   │
│  │  │  EcoveloSDK                                                     │  │   │
│  │  │  - launch(config) -> UIViewController                            │  │   │
│  │  │  - launch(config, onFinish) -> UIViewController                  │  │   │
│  │  │                                                                 │  │   │
│  │  │  EcoveloSDKView (SwiftUI)                                        │  │   │
│  │  │  - UIViewControllerRepresentable                                 │  │   │
│  │  └─────────────────────────────────────────────────────────────────┘  │   │
│  │                               │                                        │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │   │
│  │  │                       BRIDGE / CONTENEUR                        │  │   │
│  │  │                                                                 │  │   │
│  │  │  EcoveloViewController                                          │  │   │
│  │  │  - héberge CAPBridgeViewController (Capacitor)                   │  │   │
│  │  │  - injecte iamToken (+ programId, thème) vers la webapp          │  │   │
│  │  │  - reçoit le finish via URL scheme ecovelo-sdk://finish          │  │   │
│  │  └─────────────────────────────────────────────────────────────────┘  │   │
│  │                               │                                        │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │   │
│  │  │                      CAPACITOR RUNTIME iOS                      │  │   │
│  │  │                                                                 │  │   │
│  │  │  - WKWebView + bridge Capacitor                                  │  │   │
│  │  │  - Plugins natifs (Camera, Geolocation, BLE, etc.)               │  │   │
│  │  │  - Assets embarqués: sdk-ios/Resources/www/                      │  │   │
│  │  └─────────────────────────────────────────────────────────────────┘  │   │
│  └───────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      │ API REST
                                      ▼
                          ┌─────────────────────────────┐
                          │       Backend Ecovelo       │
                          └─────────────────────────────┘
```

## Composants principaux (iOS)

> ⚠️ Comme sur Android, le SDK iOS est un **conteneur** : la logique métier est dans l’app Ionic embarquée.

### 1) Public API Layer

| Élément | Responsabilité |
|--------|-----------------|
| `EcoveloSDK` | Point d’entrée UIKit : retourne un `UIViewController` prêt à être présenté |
| `EcoveloSDKView` | Point d’entrée SwiftUI : wrapper `UIViewControllerRepresentable` |
| `EcoveloConfig` | Configuration (token IAM, programId, thème) |
| `EcoveloSDK.Result` | Résultat fin de parcours: `success` / `cancelled` / `error(message:)` |

### 2) Conteneur Capacitor

Le conteneur est assuré par `EcoveloViewController` :

- En mode **Capacitor** (recommandé): embed d’un `CAPBridgeViewController` via `EcoveloBridgeViewController`
- Fallback **WKWebView** si Capacitor n’est pas présent (diagnostic / compat)

### 3) Contrat de configuration (token / contexte)

Pour rendre le token accessible à la webapp :

- **Injection via `UserDefaults`** (clé `ecovelo_iam_token`)
- Optionnellement, **injection JS** si la webapp expose `window.EcoveloSDK.setIAMToken(...)`

> ⚠️ Sur iOS, `UserDefaults` est persistant. L’app hôte doit décider quand **écraser** / **nettoyer** ces valeurs (ex: logout).

### 4) Contrat de “fin de parcours”

Le SDK iOS expose un callback `onFinish` côté natif.  
Le conteneur intercepte une navigation de la webapp vers :

`ecovelo-sdk://finish?status=success|cancelled|error&message=...`

Puis appelle `onFinish` avec le bon `EcoveloSDK.Result` et ferme l’UI si elle a été présentée en modal.

## Limites iOS spécifiques (à connaître)

- **Délégation des permissions**: sur iOS, les permissions sont pilotées par l’application hôte via `Info.plist` (voir `docs/ios/INTEGRATION.md`).
- **Dépendances plugins Capacitor**: la présence effective des plugins côté iOS dépend des frameworks intégrés (CocoaPods/XCFramework bundle). Un plugin manquant produit typiquement un `UNIMPLEMENTED` côté JS.
- **Mises à jour de token**: le SDK est conçu pour recevoir le token à l’initialisation. Les stratégies de “refresh” doivent être côté hôte (voir `docs/ios/AUTH_SSO.md`).

