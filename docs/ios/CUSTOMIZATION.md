# Personnalisation du SDK Ecovelo iOS

Ce document décrit les options de personnalisation disponibles côté iOS.  
> **Note** : l’iOS SDK actuel expose volontairement une surface de personnalisation **réduite** (thème simple + contexte programme). Les textes, les parcours et la majorité du look & feel vivent dans l’app Ionic embarquée.

## 1) Contexte “programme” (`programId`)

Le `programId` permet à l’app embarquée d’adapter son comportement (environnement, branding côté web, configuration backend…).

Exemple :

```swift
import sdk_ios

let config = EcoveloConfig(
    iamToken: "<token IAM Cityway>",
    programId: "preprod"
)
```

## 2) Thème (`EcoveloTheme`)

Le thème iOS expose actuellement :

- `primaryColor`
- `secondaryColor`
- `accentColor`

Exemple :

```swift
import UIKit
import sdk_ios

let theme = EcoveloTheme(
    primaryColor: .systemBlue,
    secondaryColor: .systemGray,
    accentColor: .systemOrange
)

let config = EcoveloConfig(
    iamToken: "<token IAM Cityway>",
    programId: "breizhgo",
    theme: theme
)
```

### Limite actuelle

- Le SDK iOS **n’expose pas** (encore) de configuration de typographie, de branding (logos), de textes, ni de feature flags côté natif.
- Ces personnalisations doivent être gérées **dans la webapp Ionic** (CSS variables, config runtime, etc.).

## 3) Multilingue

Conformément au DOC01010, la méthode d’initialisation doit être compatible multilingue.

Sur iOS, l’approche recommandée est :

- l’application hôte gère la locale système (iOS)
- la webapp embarquée lit la locale (ou ses propres préférences) et affiche les bons libellés

> Si une future version doit forcer une langue depuis l’hôte (paramètre explicite), cela se fait typiquement via une clé `UserDefaults` ou une injection JS (même mécanisme que le token).

