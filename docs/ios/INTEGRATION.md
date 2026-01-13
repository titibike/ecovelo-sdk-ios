# Guide d’intégration SDK Ecovelo iOS (conforme DOC01010)

Ce document fournit un guide d’intégration iOS répondant aux exigences **DOC01010** :

- SDK iOS livré comme **conteneur autonome**
- **Point d’entrée unique** exposé par le SDK (UIKit + option SwiftUI)
- **Token IAM Cityway** fourni par l’app hôte au moment de l’initialisation
- **Callback de fin de parcours** (succès / annulation / erreur)
- **Listing des dépendances** et **listing des permissions** nécessaires

## Prérequis

- Xcode 15+ (recommandé)
- Swift 5.x
- **iOS 16 minimum**

## SDK & Distribution

Le SDK iOS doit être distribuable via l’un des formats suivants :

- **XCFramework**
- **Swift Package Manager (SPM)**
- **CocoaPods**

> Recommandation intégrateur (Cityway) : préférer une distribution “plug-and-play” (XCFramework/SPM) avec une procédure d’intégration claire et un listing des dépendances.

## Intégration (Xcode)

### Via XCFramework (approche préférée)

1. Ajouter le `*.xcframework` au projet (ex: dossier `ThirdParty/Ecovelo/`).
2. Dans la target iOS de l’app hôte :
   - **Frameworks, Libraries, and Embedded Content**
   - Ajouter le framework du SDK
   - Configurer l’embed (généralement **Embed & Sign**).
3. Vérifier la compatibilité iOS : **>= 16.0**.


## Point d’entrée unique (UIKit / SwiftUI)

Le SDK doit exposer un **point d’entrée unique** :

- **UIKit** : une API retournant un `UIViewController` prêt à être présenté.
- **SwiftUI** : soit une `View` fournie, soit un wrapper `UIViewControllerRepresentable` documenté.

Exemple indicatif (UIKit) :

```swift
import UIKit
import EcoveloSDK

final class HomeViewController: UIViewController {
  func openEcovelo(iamToken: String) {
    let config = EcoveloSDKConfig(
      iamToken: iamToken,
      locale: Locale.current // compatible multilingue
    )

    let vc = EcoveloSDK.makeViewController(config: config) { result in
      // success / cancelled / error
      print("Ecovelo finished:", result)
    }

    present(vc, animated: true)
  }
}
```

> Les noms (`EcoveloSDKConfig`, `makeViewController`) sont **indicatifs** : l’essentiel est de respecter le contrat (VC/SwiftUI + config + callback).

## Token IAM Cityway (contexte d’initialisation)

Conformément au DOC01010, l’application hôte fournit au SDK, au lancement :

- le **token IAM Cityway standardisé** (valide, déjà authentifié)
- les paramètres de contexte nécessaires (ex: territoire/programme, locale)

La gestion SSO/OIDC et le refresh token restent côté app hôte (voir `docs/ios/AUTH_SSO.md`).

## Callback de fin de parcours

Le SDK doit permettre à l’hôte de recevoir un résultat de fin de parcours :

- **succès**
- **annulation**
- **erreur** (avec message/cause)

Le callback doit permettre à l’hôte d’actualiser son UI et ses parcours hors-SDK.

## Listing des dépendances tierces

EN COURS

## Listing des permissions requises (iOS)

Sur iOS, les permissions sont à renseigner dans le `Info.plist` **de l’app hôte**.  
Voici le listing des clés pertinentes et un exemple de valeur pour chaque permission :

| Fonction        | Clé `Info.plist`                        | Exemple d’usage                                           |
|-----------------|-----------------------------------------|-----------------------------------------------------------|
| Caméra          | `NSCameraUsageDescription`              | Scan de documents, photo véhicule                         |
| Localisation    | `NSLocationWhenInUseUsageDescription`   | Carte, recherche de trajets                               |
| Localisation (bg)| `NSLocationAlwaysAndWhenInUseUsageDescription` | Suivi de trajet même en arrière-plan                |
| Galerie         | `NSPhotoLibraryUsageDescription`        | Import de photos depuis la galerie                        |
| Sauvegarde photo| `NSPhotoLibraryAddUsageDescription`     | Enregistrement de photos dans la galerie                  |
| Notifications   | `NSUserNotificationsUsageDescription`   | Alerter l’utilisateur en fin de trajet                    |
| Bluetooth       | `NSBluetoothAlwaysUsageDescription`     | Communication vélo/accessoires BLE                        |
| Tracking        | `NSUserTrackingUsageDescription`        | Debug & amélioration de l’app                             |

## Checklist intégration (DOC01010)

- [ ] Format de distribution iOS : **XCFramework / SPM / CocoaPods**
- [ ] Compatibilité iOS : **>= 16.0**
- [ ] Point d’entrée unique : **UIViewController** (et SwiftUI si applicable)
- [ ] Initialisation : **token IAM Cityway** + contexte + multilingue
- [ ] Callback : **success / cancelled / error**
- [ ] Listing dépendances fourni
- [ ] Listing permissions fourni
