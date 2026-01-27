# Guide d’intégration SDK Ecovelo iOS (aligné avec le fonctionnement actuel)

Ce document décrit l’intégration du SDK iOS Ecovelo dans ce repository :

- SDK distribué via **CocoaPods** 
- UI présentée via un **point d’entrée unique** côté hôte (`UIViewController`)
- Webapp embarquée dans le SDK (dossier `public/`) affichée via **Capacitor**
- Liste des **dépendances CocoaPods**, des **permissions iOS** et des éléments de config à prévoir

## Prérequis

- Xcode 15+ (recommandé)
- Swift 5.x
- iOS 16+ (min)

## 1) Installer `EcoveloSDK` via CocoaPods (recommandé)

Dans votre `Podfile` (cible de l’app hôte), référencer le SDK depuis Git (tag) :

```bash
pod 'EcoveloSDK', :git => 'https://github.com/titibike/ecovelo-sdk-ios.git', :tag => '1.0.1'
```

Puis exécuter :

```bash
pod install
```

Et ouvrir le workspace `*.xcworkspace`.

## 2) Ajouter les pods requis (CocoaPods)

Le SDK s’appuie sur **Capacitor** et plusieurs plugins natifs. Selon votre mode d’intégration, ces dépendances peuvent être :

- **tirées automatiquement** via le pod `EcoveloSDK`
- ou **déclarées explicitement** dans votre `Podfile` (voir `sample-app/Podfile`)

> Dans ce repo, `sample-app/Podfile` référence `EcoveloSDK` depuis Git (tag) et conserve les plugins Capacitor en **local** (via `:path`) sous `ios-deps/`.


### Pods minimum (référence: `sample-app/Podfile`)

- `Alamofire` (5.10.2)
- `Capacitor`, `CapacitorCordova`
- Plugins Capacitor / Communautaires :
  - `CapacitorCommunityNativeAudio`
  - `CapacitorCommunityStripe`
  - `CapacitorMlkitBarcodeScanning`
  - `CapacitorApp`
  - `CapacitorAppLauncher`
  - `CapacitorBrowser`
  - `CapacitorCamera`
  - `CapacitorFilesystem`
  - `CapacitorGeolocation`
  - `CapacitorHaptics`
  - `CapacitorKeyboard`
  - `CapacitorPreferences`
  - `CapacitorPushNotifications`
  - `CapacitorScreenOrientation`
  - `CapacitorStatusBar`
  - `CapawesomeCapacitorLiveUpdate`
  - `SentryCapacitor`
  - `CapacitorNativeSettings`
  - `CapacitorPluginAppTrackingTransparency`
- Firebase (Push Notifications / FCM) :
  - `Firebase/CoreOnly`
  - `Firebase/Messaging`
  - `Firebase/Installations`
  - (dépendances transitives visibles dans le sample) `GoogleDataTransport`, `GoogleUtilities`, `nanopb`


## 3) Ajouter les permissions iOS (Info.plist de l’app hôte)

Clés actuellement utilisées dans le sample (via `INFOPLIST_KEY_*` dans `sample-app.xcodeproj`) :

| Fonction | Clé `Info.plist` |
|---|---|
| Caméra | `NSCameraUsageDescription` |
| Localisation | `NSLocationWhenInUseUsageDescription` |
| Localisation (background) | `NSLocationAlwaysAndWhenInUseUsageDescription` |
| Galerie (lecture) | `NSPhotoLibraryUsageDescription` |
| Galerie (écriture) | `NSPhotoLibraryAddUsageDescription` |
| Tracking (ATT) | `NSUserTrackingUsageDescription` |

## 4) Capabilities / Entitlements (Xcode)

Certains éléments fournis dans des exemples “Info.plist” sont en réalité des **entitlements** (Capabilities Xcode) :

- `aps-environment` (Push Notifications)
- `com.apple.developer.associated-domains` (Universal Links)
- `com.apple.developer.in-app-payments` (Apple Pay merchant ids)

Exemple dans le repo : `EcoveloSDK/EcoveloSDK/App.entitlements`.

## 5) AppDelegate (Push / Universal Links / OpenURL)

Si vous utilisez les plugins Capacitor `PushNotifications` / `App` / deep links, vous devez forwarder certains évènements iOS (openURL, continue userActivity, callbacks APNS/FCM).

Référence à recopier/adapter dans votre app hôte : `EcoveloSDK/EcoveloSDK/AppDelegate.swift`.

## 6) `capacitor.config.json` (à adapter aux specs de l’app hôte)

Le SDK embarque un `public/capacitor.config.json` (dans les assets web).  
Les valeurs suivantes sont typiquement **spécifiques à l’application hôte** et doivent être renseignées dans le build livré :

- `appId`, `appName`
- `plugins.Stripe.publishableKey`
- `plugins.Stripe.merchantIdentifier`
- `plugins.LiveUpdate.appId` / `defaultChannel`
- `server.iosScheme` (ex: `ecovelo` ou `capacitor`)

Exemple de structure : `sample-app/sample-app/capacitor.config.json`.

## 7) Utilisation (point d’entrée unique)

### UIKit

```swift
import UIKit
import EcoveloSDK

final class HomeViewController: UIViewController {
  func openEcovelo() {
    let vc = Ecovelo.makeViewController(
      initialPath: nil,
      payload: [
        "source": "host-app",
        "token": "<token>"
      ],
      onClose: { [weak self] in
        self?.dismiss(animated: true)
      }
    )

    present(vc, animated: true)
  }
}
```

### SwiftUI (wrapper)

Voir `sample-app/sample-app/ContentView.swift`.

