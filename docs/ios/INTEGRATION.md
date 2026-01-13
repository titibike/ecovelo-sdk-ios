# Guide d’intégration SDK Ecovelo iOS

Ce guide est destiné aux intégrateurs (Cityway) pour intégrer le SDK Ecovelo dans leur application iOS.

> **Référence**: ce guide répond aux exigences du document **DOC01010** (conteneur autonome, point d’entrée unique SwiftUI/VC, token IAM, callback fin de parcours, listing dépendances/permissions).

## Prérequis

- Xcode 15+ (recommandé)
- Swift 5.x
- **iOS 16 minimum** (exigence Cityway / DOC01010)
- Une authentification IAM Cityway fonctionnelle dans l’app hôte

## Distribution (XCFramework / SPM / CocoaPods)

Le DOC01010 attend une distribution iOS sous forme **XCFramework / SPM / CocoaPods** exposant un `UIViewController`.

Dans ce dépôt, la voie la plus simple pour un intégrateur est :

- **Option B (recommandée pour intégrateurs)** : livrer un **bundle d’XCFrameworks** incluant le SDK **et** toutes ses dépendances (Capacitor, Cordova, plugins…).
- **Option A (source + CocoaPods)** : construire le projet en workspace et laisser CocoaPods gérer Capacitor côté SDK.

### Option B – Bundle XCFramework (SDK + dépendances)

Le dépôt fournit un script de build :

- `scripts/build-xcframework-bundle.sh`

Il produit :

```
build/xcframework-bundle/
├── sdk_ios.xcframework
├── Dependencies/
│   ├── Capacitor.xcframework
│   ├── CapacitorCordova.xcframework
│   └── ... (plugins éventuels)
└── manifest.txt
```

#### Intégration dans l’app hôte (Xcode)

1. Copier `sdk_ios.xcframework` **et** le dossier `Dependencies/` dans votre repo (ex: `ThirdParty/Ecovelo/`).
2. Dans Xcode (target App hôte) :
   - **Frameworks, Libraries, and Embedded Content**
   - Ajouter `sdk_ios.xcframework` puis toutes les `*.xcframework` de `Dependencies/`
   - Régler l’embed sur **Embed & Sign** (au minimum pour le SDK; dépendances selon besoins)
3. Vérifier que le build target respecte **iOS 16+**.

> ✅ Le fichier `manifest.txt` est le **listing exact des dépendances** livrées, utile pour la conformité et le support.

### Option A – Build du SDK depuis ce dépôt (CocoaPods)

1. Installer les pods (si nécessaire) :

```bash
cd /path/to/sdk-ios
pod install
open sdk-ios.xcworkspace
```

2. Build la target/scheme `sdk-ios`.

> Cette option est adaptée à l’équipe SDK, mais **moins** aux intégrateurs (elle nécessite CocoaPods et la gestion des dépendances Capacitor côté SDK).

## Point d’entrée unique (SwiftUI / UIKit)

Le SDK expose un **point d’entrée unique** sous 2 formes (DOC01010) :

- **SwiftUI** : `EcoveloSDKView` (iOS 16+)
- **UIKit** : `EcoveloSDK.launch(...)` retournant un `UIViewController`

### Intégration SwiftUI (recommandée côté Cityway)

```swift
import SwiftUI
import sdk_ios

struct ContentView: View {
  @State private var showSDK = false

  private let config = EcoveloConfig(
    iamToken: "<token IAM Cityway>",
    programId: "breizhgo",
    theme: EcoveloTheme(primaryColor: .systemBlue)
  )

  var body: some View {
    Button("Ouvrir Ecovelo") { showSDK = true }
      .sheet(isPresented: $showSDK) {
        EcoveloSDKView(config: config) { result in
          // Fin de parcours: succès / annulation / erreur
          showSDK = false
          print("EcoveloSDK finished:", result)
        }
      }
  }
}
```

> Exemple complet disponible dans `TestHost/` (`EcoveloTestHostApp.swift`).

### Intégration UIKit

```swift
import UIKit
import sdk_ios

final class HomeViewController: UIViewController {
  func openEcovelo() {
    let config = EcoveloConfig(iamToken: "<token IAM Cityway>", programId: "breizhgo")

    let vc = EcoveloSDK.launch(config: config) { result in
      print("Ecovelo result:", result)
    }

    present(vc, animated: true)
  }
}
```

## Callback de fin de parcours (succès / annulation / erreur)

Le SDK remonte un résultat via `EcoveloSDK.Result` :

- `success`
- `cancelled`
- `error(message: String)`

Le déclenchement est fait depuis la webapp via une navigation vers :

`ecovelo-sdk://finish?status=success|cancelled|error&message=...`

> Ce mécanisme est volontairement simple et robuste. Il peut évoluer vers un bridge Capacitor dédié si besoin.

## Listing des dépendances tierces

Selon le mode de distribution :

- **Bundle XCFramework** : la source de vérité est `build/xcframework-bundle/manifest.txt` (SDK + dépendances).
- **Build via CocoaPods** : les dépendances sont déclarées dans `Podfile` (Capacitor, CapacitorCordova, plugins…).

## Listing des permissions requises (iOS)

Sur iOS, les permissions sont déclarées **dans l’app hôte** (fichier `Info.plist`).

Selon les plugins Capacitor réellement utilisés par l’app Ionic, ajouter les clés suivantes (exemples) :

| Permission | Clé Info.plist | Exemple d’usage |
|-----------|-----------------|-----------------|
| Caméra | `NSCameraUsageDescription` | Scan QR vélo |
| Localisation | `NSLocationWhenInUseUsageDescription` | Carte stations, géoloc |
| Bluetooth (BLE) | `NSBluetoothAlwaysUsageDescription` (+ iOS 13+: `NSBluetoothPeripheralUsageDescription` si requis) | Déverrouillage / communication vélo |
| Photos (si applicable) | `NSPhotoLibraryUsageDescription` / `NSPhotoLibraryAddUsageDescription` | Import/export image |

> ⚠️ La liste exacte dépend du set de plugins livré. En cas de doute, partez du `manifest.txt` du bundle et des plugins Capacitor activés.

## Debugging

- **Logs WebView** : le SDK installe un “console bridge” et relaye des logs côté natif (utile en cas d’écran blanc).
- **Inspection WKWebView** : sur iOS 16.4+, `isInspectable` est activé (en debug) si disponible.

## Checklist d’intégration (iOS)

- [ ] SDK intégré (XCFramework + dépendances) et “Embed & Sign” configuré
- [ ] iOS deployment target **>= 16.0**
- [ ] `EcoveloConfig(iamToken: ...)` fourni au lancement
- [ ] Callback `onFinish` branché (succès / annulation / erreur)
- [ ] `Info.plist` complété avec les permissions nécessaires (Camera/Location/BLE…)
- [ ] Parcours location + scan + restitution testés


