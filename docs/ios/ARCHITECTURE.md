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
  - (optionnel) fournir un **contexte** à l’app web via `payload`
  - gérer la fermeture via le callback `onClose` (ou laisser le SDK dismiss si présenté en modal)

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
│  │  │  Ecovelo (public)                                                │  │   │
│  │  │  - makeViewController(initialPath:payload:onClose:) -> UIViewController │  │
│  │  └─────────────────────────────────────────────────────────────────┘  │   │
│  │                               │                                        │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │   │
│  │  │                       BRIDGE / CONTENEUR                        │  │   │
│  │  │                                                                 │  │   │
│  │  │  EcoveloHostViewController                                      │  │   │
│  │  │  - héberge EcoveloBridgeViewController (Capacitor)               │  │   │
│  │  │  - gère le bouton Close + callback `onClose`                     │  │   │
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
| `Ecovelo` | Point d’entrée UIKit : retourne un `UIViewController` prêt à être présenté (`makeViewController`) |
| (host) `UIViewControllerRepresentable` | Wrapper SwiftUI (voir `sample-app/sample-app/ContentView.swift`) |

### 2) Conteneur Capacitor

Le conteneur est assuré par :

- `EcoveloHostViewController` : conteneur full-screen + bouton Close
- `EcoveloBridgeViewController` : sous-classe de `CAPBridgeViewController` (Capacitor)


### 3) Configuration runtime (contexte applicatif)

L’API publique accepte un dictionnaire `payload: [String: Any]?`.  
Ce payload est actuellement prévu pour fournir du contexte à la webapp (ex: token), mais l’injection côté web dépend de l’implémentation Capacitor/web (à documenter/standardiser côté produit).

## Limites iOS spécifiques (à connaître)

- **Délégation des permissions** : sur iOS, les permissions sont pilotées par l’application hôte via `Info.plist` (voir `docs/ios/INTEGRATION.md`).
- **Dépendances plugins Capacitor** : la présence effective des plugins côté iOS dépend des frameworks intégrés (CocoaPods). Un plugin manquant produit typiquement un `UNIMPLEMENTED` côté JS.
- **Config spécifique hôte** : certaines valeurs (Stripe merchant id, LiveUpdate, etc.) vivent dans `capacitor.config.json` (voir `docs/ios/INTEGRATION.md`).

