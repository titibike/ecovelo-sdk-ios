
## Ecovelo SDK iOS

SDK permettant l’intégration du parcours usager de location d’un VLS **Ecovelo** dans une application iOS tierce.

### 🎯 Contexte

Ce SDK a été conçu pour le projet **Breizhgo – Vélos en Gare Bretagne** (15 gares) en partenariat avec **Cityway**.  
Il encapsule l’application **Ionic / Capacitor** d’Ecovelo dans un **conteneur iOS autonome**, facilement intégrable dans une app hôte.

### Spécificités du projet Breizhgo

- **Authentification SSO** via `mon-compte.bzh` (OpenID Connect) gérée par l’app hôte
- **Fourniture d’un token IAM Cityway** au SDK au moment du lancement
- **Parcours de réservation** en amont d’un trajet
- **Flow téléphone** : le numéro de téléphone n’étant pas fourni par le SSO, ce cas est géré côté webapp (ou via un mécanisme à définir avec l’hôte)

### 🏗️ Architecture

Le SDK embarque un runtime **Capacitor iOS** et les **assets** de la webapp, ce qui permet :

- **Assets Ionic embarqués** (pas de téléchargement)
- **Plugins Capacitor natifs** utilisables (selon ce qui est livré / intégré côté iOS)
- **Point d’entrée unique** côté hôte (SwiftUI ou UIKit)

Pour le détail, voir `docs/ios/ARCHITECTURE.md`.

### 📦 Installation (XCFramework)

Le dépôt fournit un artefact prêt à intégrer :

- `build/EcoveloSDK.xcframework`

#### Intégration dans l’app hôte (Xcode)

1. Copier `EcoveloSDK.xcframework` dans votre repo (ex: `ThirdParty/Ecovelo/`).
2. Dans Xcode (target de l’app hôte) :
   - **Frameworks, Libraries, and Embedded Content**
   - Ajouter `EcoveloSDK.xcframework`
   - Régler l’embed sur **Embed & Sign**
3. Vérifier le deployment target : **iOS 16+**.

> Selon le mode de livraison, vous pouvez également recevoir un “bundle” incluant des dépendances (Capacitor/plugins). Dans ce cas, ajoutez aussi les `*.xcframework` associées.

Pour le guide intégrateur complet (distribution, checklist), voir `docs/ios/INTEGRATION.md`.

### 🔐 Authentification SSO (token IAM Cityway)

Conformément au contrat iOS, **le SDK ne fait pas le login SSO**.  
L’app hôte gère OIDC/SSO (ex: `mon-compte.bzh`), et peut fournir un contexte à la webapp via `payload` (voir `docs/ios/AUTH_SSO.md`).

### 🚀 Utilisation
Le SDK expose un **point d’entrée unique** qui retourne un `UIViewController` prêt à être présenté.  
Le SDK embarque l’app web (dossier `public/`) dans le framework et l’affiche via **Capacitor**.

#### UIKit

```swift
import UIKit
import EcoveloSDK

final class HomeViewController: UIViewController {
  func openEcovelo() {
    let vc = Ecovelo.makeViewController(
      initialPath: nil, // ex: "/home"
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

#### SwiftUI (wrapper)

```swift
import SwiftUI
import EcoveloSDK

struct EcoveloSDKWrapper: UIViewControllerRepresentable {
  let initialPath: String?
  let payload: [String: Any]?
  let onClose: (() -> Void)?

  func makeUIViewController(context: Context) -> UIViewController {
    Ecovelo.makeViewController(initialPath: initialPath, payload: payload, onClose: onClose)
  }

  func updateUIViewController(_ uiViewController: UIViewController, context: Context) {}
}
```

### 🎨 Personnalisation

La surface de personnalisation côté iOS est volontairement **réduite** (ex: `initialPath`, `payload`).  
Voir `docs/ios/CUSTOMIZATION.md`.

### 📋 Prérequis

- **iOS 16 minimum** (exigence Cityway / DOC01010)
- Xcode 15+ (recommandé)
- Swift 5.x
- L’app hôte doit gérer l’authentification IAM (SSO/OIDC) et fournir le token au SDK

### ⚠️ Notes importantes

#### Permissions (Info.plist de l’app hôte)

Sur iOS, les permissions sont déclarées dans l’app hôte (`Info.plist`). Selon les plugins réellement utilisés par la webapp :

- `NSCameraUsageDescription` (scan QR / caméra)
- `NSLocationWhenInUseUsageDescription` (carte / géolocalisation)
- `NSLocationAlwaysAndWhenInUseUsageDescription` (suivi trajet en arrière-plan si activé)
- `NSPhotoLibraryUsageDescription` / `NSPhotoLibraryAddUsageDescription` (upload/sauvegarde photos)
- `NSUserTrackingUsageDescription` (ATT si activé)

Voir le détail dans `docs/ios/INTEGRATION.md`.


### 📚 Documentation

- `docs/ios/INTEGRATION.md` : guide d’intégration iOS (XCFramework, checklist, permissions)
- `docs/ios/AUTH_SSO.md` : contrat SSO / token IAM (responsabilités hôte vs SDK)
- `docs/ios/ARCHITECTURE.md` : architecture du conteneur iOS
- `docs/ios/CUSTOMIZATION.md` : options de personnalisation

### 📄 Licence

Propriétaire — Ecovelo © 


COMMANDES POUR BUILD LE XCFRAMEWORK : 

rm -rf build && xcodebuild archive \
  -workspace EcoveloSDK.xcworkspace \
  -scheme EcoveloSDK \
  -configuration Release \
  -destination "generic/platform=iOS" \
  -archivePath "./build/EcoveloSDK-iOS" \
  SKIP_INSTALL=NO \
  BUILD_LIBRARY_FOR_DISTRIBUTION=YES && xcodebuild archive \
  -workspace EcoveloSDK.xcworkspace \
  -scheme EcoveloSDK \
  -configuration Release \
  -destination "generic/platform=iOS Simulator" \
  -archivePath "./build/EcoveloSDK-Sim" \
  SKIP_INSTALL=NO \
  BUILD_LIBRARY_FOR_DISTRIBUTION=YES && xcodebuild -create-xcframework \
  -framework "./build/EcoveloSDK-iOS.xcarchive/Products/Library/Frameworks/EcoveloSDK.framework" \
  -output "./build/EcoveloSDK.xcframework"





