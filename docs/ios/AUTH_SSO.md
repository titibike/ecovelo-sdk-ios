# Authentification (SSO / Token IAM Cityway) – iOS

## Objectif

Conformément au **DOC01010**, l’application hôte iOS (Cityway) est responsable de :

- gérer le SSO / OIDC (ex: `mon-compte.bzh`)
- stocker/rafraîchir les tokens de manière sécurisée (Keychain, etc.)
- fournir au SDK Ecovelo le **token IAM Cityway standardisé** au moment de l’initialisation

Le SDK Ecovelo iOS :

- **ne fait pas** le login SSO
- consomme un token fourni par l’hôte pour que l’app Ionic embarquée puisse appeler le backend Ecovelo

## Contrat iOS : `EcoveloConfig`

Le point d’entrée attend une config :

- `iamToken: String` (**obligatoire**)
- `programId: String?` (optionnel)
- `theme: EcoveloTheme?` (optionnel)

> ⚠️ Le type `SSOToken` existe encore mais est **legacy** (déprécié). Le flux attendu est **iamToken**.

## Où le token est-il injecté ?

Le SDK iOS rend le token disponible à l’app Capacitor via :

1) **UserDefaults**

- clé: `ecovelo_iam_token`
- (optionnel) clé: `ecovelo_program_id`

2) **Injection JS** (si supportée par la webapp)

Si la webapp expose `window.EcoveloSDK.setIAMToken(...)`, le SDK tentera d’appeler cette fonction dans le contexte de la WebView.

### Implication sécurité

Sur iOS, `UserDefaults` est **persistant**. En pratique :

- l’hôte doit **écraser** la valeur à chaque initialisation du SDK
- en cas de logout global, l’hôte doit **nettoyer** ces valeurs si nécessaire

Exemple (côté hôte) :

```swift
UserDefaults.standard.removeObject(forKey: "ecovelo_iam_token")
UserDefaults.standard.removeObject(forKey: "ecovelo_program_id")
```

## Scénarios

### 1) Utilisateur déjà connecté (token disponible)

```
┌────────────┐           ┌─────────────────┐             ┌────────────┐
│ App Hôte   │           │   SDK iOS       │             │ App Ionic  │
└─────┬──────┘           └──────┬──────────┘             └─────┬──────┘
      │ iamToken prêt           │                                │
      │ launch(config)          │                                │
      ├────────────────────────►│ inject token (UserDefaults/JS) │
      │                         ├───────────────────────────────►│
      │                         │                                │ API calls OK
```

### 2) Mode exploration (pas de token)

Le DOC01010 n’impose pas explicitement un mode “exploration”.  
Si le produit le souhaite, il faut **le gérer côté webapp** (Ionic) :

- si pas de token (clé absente/empty), restreindre certaines actions
- afficher un CTA “Se connecter” qui renvoie vers un mécanisme défini avec l’hôte

## Refresh token / expiration

Le SDK iOS **ne possède pas** d’interface “provider” (contrairement à Android) pour demander un refresh à chaud.  
La stratégie recommandée côté Cityway :

- rafraîchir le token IAM **avant** de présenter le SDK
- ou, en cas d’expiration pendant le parcours, relancer le SDK avec un nouveau `iamToken` (et/ou prévoir un mécanisme côté webapp pour déclencher un retour à l’hôte)

## Logout

Le SDK iOS n’exécute pas de logout SSO. C’est la responsabilité de l’hôte.

Si l’hôte réalise une déconnexion globale, il est recommandé de nettoyer les clés suivantes :

- `ecovelo_iam_token`
- `ecovelo_program_id`
- (legacy) `ecovelo_sso_*`

## Cas “numéro de téléphone requis”

Sur Android, un “phone request flow” natif est documenté.  
Sur iOS, aucun écran natif dédié n’est implémenté à ce stade : ce cas doit être géré **dans la webapp** (Ionic) ou via un mécanisme d’échange avec l’hôte à définir si nécessaire.

