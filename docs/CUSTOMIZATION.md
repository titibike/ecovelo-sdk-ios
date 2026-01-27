# Personnalisation du SDK Ecovelo iOS

Ce document décrit les options de personnalisation disponibles côté iOS.  
> **Note** : l’iOS SDK actuel expose volontairement une surface de personnalisation **réduite** (route de démarrage + payload optionnel). La majorité du look & feel et des parcours vit dans la webapp Ionic embarquée.

## 1) Route de démarrage (`initialPath`)

`initialPath` permet de démarrer la webapp sur une route interne (ex: `/home`, `/station/123`).

Exemple :

```swift
import EcoveloSDK

let vc = Ecovelo.makeViewController(initialPath: "/home")
```

## 2) Payload (contexte applicatif)

Le `payload` permet de passer un dictionnaire libre à destination de l’app web (ex: token, source, environnement).

> L’injection effective côté web dépend d’un contrat JS/plugin Capacitor (voir `docs/AUTH_SSO.md`).

Exemple :

```swift
import EcoveloSDK

let vc = Ecovelo.makeViewController(
  initialPath: nil,
  payload: [
    "source": "host-app",
    "token": "<token>"
  ]
)
```

### Limite actuelle

- Le SDK iOS **n’expose pas** de configuration native de typographie, de branding (logos), de textes, ni de feature flags.
- Ces personnalisations doivent être gérées **dans la webapp Ionic** (CSS variables, config runtime, etc.).

## 3) Multilingue

L’approche recommandée est :

- l’application hôte gère la locale système (iOS)
- la webapp embarquée lit la locale (ou ses propres préférences) et affiche les bons libellés

