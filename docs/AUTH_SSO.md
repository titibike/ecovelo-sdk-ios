# Authentification (SSO) / Contexte applicatif – iOS

## Objectif

Le SDK iOS Ecovelo embarque une webapp (Capacitor) et **ne réalise pas** le login SSO côté natif.  
L’application hôte reste responsable de :

- gérer l’authentification (SSO / OIDC / OAuth2)
- stocker/rafraîchir les tokens de manière sécurisée (Keychain, etc.)
- décider comment rendre disponible un “contexte” à la webapp (ex: token, environnement, source)

Le SDK Ecovelo iOS :

- **ne fait pas** le login SSO
- expose un point d’entrée (`Ecovelo.makeViewController`) qui accepte un `payload` optionnel

## Contrat iOS : `payload`

Le point d’entrée actuel est :

`Ecovelo.makeViewController(initialPath:payload:onClose:)`

Le `payload` est un dictionnaire libre `[String: Any]?` (ex: `{ "token": "...", "source": "..." }`).

## Où le contexte est-il injecté ?

Dans l’état actuel du code, le `payload` est transmis au contrôleur Capacitor (`EcoveloBridgeViewController`) mais son injection dans la webapp dépend d’un contrat côté web (JS / plugin Capacitor).

> Recommandation : standardiser côté produit la manière dont la webapp récupère ce contexte (ex: lecture via un plugin Capacitor dédié).

## Scénarios

### 1) Utilisateur déjà connecté (token disponible côté hôte)

```
┌────────────┐           ┌─────────────────┐             ┌────────────┐
│ App Hôte   │           │   SDK iOS       │             │ App Ionic  │
└─────┬──────┘           └──────┬──────────┘             └─────┬──────┘
      │ token prêt              │                                │
      │ makeViewController(...) │                                │
      ├────────────────────────►│ passe payload                 │
      │                         ├───────────────────────────────►│ (selon contrat web)
      │                         │                                │ API calls OK
```

### 2) Mode exploration (pas de token)

Le SDK n’impose pas explicitement un mode “exploration”.  
Si le produit le souhaite, il faut **le gérer côté webapp** (Ionic) :

- si pas de token (clé absente/empty), restreindre certaines actions
- afficher un CTA “Se connecter” qui renvoie vers un mécanisme défini avec l’hôte

## Refresh token / expiration

Le SDK iOS **ne possède pas** d’interface “provider” pour demander un refresh à chaud.  
Stratégie recommandée côté hôte :

- rafraîchir le token **avant** de présenter le SDK
- ou, en cas d’expiration pendant le parcours, fermer puis relancer le SDK avec un nouveau `payload`

## Logout

Le SDK iOS n’exécute pas de logout SSO. C’est la responsabilité de l’hôte.

## Cas “numéro de téléphone requis”

Sur Android, un “phone request flow” natif est documenté.  
Sur iOS, aucun écran natif dédié n’est implémenté à ce stade : ce cas doit être géré **dans la webapp** (Ionic) ou via un mécanisme d’échange avec l’hôte à définir si nécessaire.

