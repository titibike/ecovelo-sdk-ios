# Guide d’intégration SDK Ecovelo iOS (aligné avec le fonctionnement actuel)

Ce document décrit l’intégration du SDK iOS Ecovelo dans ce repository :

- SDK livré sous forme de **XCFramework**
- UI présentée via un **point d’entrée unique** côté hôte (`UIViewController`)
- Webapp embarquée dans le SDK (dossier `public/`) affichée via **Capacitor**
- Liste des **dépendances CocoaPods**, des **permissions iOS** et des éléments de config à prévoir

## Prérequis

- Xcode 15+ (recommandé)
- Swift 5.x
- iOS 16+ (min)

## 1) Ajouter `EcoveloSDK.xcframework` dans l’app hôte

1. Copier `EcoveloSDK.xcframework` dans votre repository (ex: `ThirdParty/Ecovelo/`).
2. Dans Xcode (target de l’app hôte) :
   - **Frameworks, Libraries, and Embedded Content**
   - Ajouter `EcoveloSDK.xcframework`
   - Régler sur **Embed & Sign**

## 2) Ajouter les pods requis (CocoaPods)

Le framework `EcoveloSDK.xcframework` s’appuie sur **Capacitor** et plusieurs plugins natifs : l’app hôte doit donc linker ces dépendances.

> À date (jan. 2026), les pods sont référencés en **local** (via `:path`) comme dans `sample-app/Podfile`.  
> Ils seront publiés ensuite (GitHub/Podspec) pour éviter les chemins locaux.

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
  - `Firebase/Core`
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

