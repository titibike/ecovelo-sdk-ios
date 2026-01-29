
## Ecovelo SDK iOS

SDK permettant l’intégration du parcours usager de location d’un VLS **Ecovelo** dans une application iOS tierce.

### 🎯 Contexte

Ce SDK encapsule l’application **Ionic / Capacitor** d’Ecovelo dans un **conteneur iOS autonome**, facilement intégrable dans une app hôte.

### Principes d’intégration (génériques)

- **Authentification** : l’app hôte gère l’authentification (ex: OpenID Connect / OAuth2) et fournit au SDK le contexte nécessaire au lancement (ex: access token) via `payload`
- **Parcours** : la webapp embarquée pilote le parcours (réservation, location, etc.) et s’appuie sur les plugins Capacitor natifs fournis
- **Données manquantes** (ex: téléphone) : si certaines informations ne sont pas disponibles via l’auth, ce cas doit être géré côté webapp ou via un mécanisme d’échange défini avec l’hôte

### 🏗️ Architecture

Le SDK embarque un runtime **Capacitor iOS** et les **assets** de la webapp, ce qui permet :

- **Assets Ionic embarqués** (pas de téléchargement)
- **Plugins Capacitor natifs** utilisables (selon ce qui est livré / intégré côté iOS)
- **Point d’entrée unique** côté hôte (SwiftUI ou UIKit)

Pour le détail, voir `docs/ARCHITECTURE.md`.

### 📦 Installation (CocoaPods)

Le SDK est distribué via CocoaPods (pod binaire embarquant une XCFramework).

Dans votre `Podfile` :

```ruby
pod 'EcoveloSDK', :git => 'https://github.com/titibike/ecovelo-sdk-ios.git', :tag => '1.0.1'
```

Puis :

```bash
pod install
```

Pour le guide intégrateur complet (checklist, permissions), voir `docs/INTEGRATION.md`.

### 🔐 Authentification (SSO / OIDC / OAuth2)

Conformément au contrat iOS, **le SDK ne réalise pas le login**.  
L’app hôte gère l’authentification (ex: OIDC/OAuth2) et peut fournir un contexte à la webapp via `payload` (voir `docs/AUTH_SSO.md`).

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
Voir `docs/CUSTOMIZATION.md`.

### 📋 Prérequis

- **iOS 16 minimum**
- Xcode 15+ (recommandé)
- Swift 5.x
- L’app hôte doit gérer l’authentification (SSO/OIDC/OAuth2) et fournir les informations nécessaires au SDK (ex: access token)

### ⚠️ Notes importantes

#### Permissions (Info.plist de l’app hôte)

Sur iOS, les permissions sont déclarées dans l’app hôte (`Info.plist`). Selon les plugins réellement utilisés par la webapp :

- `NSCameraUsageDescription` (scan QR / caméra)
- `NSLocationWhenInUseUsageDescription` (carte / géolocalisation)
- `NSLocationAlwaysAndWhenInUseUsageDescription` (suivi trajet en arrière-plan si activé)
- `NSPhotoLibraryUsageDescription` / `NSPhotoLibraryAddUsageDescription` (upload/sauvegarde photos)
- `NSUserTrackingUsageDescription` (ATT si activé)

Voir le détail dans `docs/INTEGRATION.md`.


### 📚 Documentation

- `docs/INTEGRATION.md` : guide d’intégration iOS (CocoaPods, checklist, permissions)
- `docs/AUTH_SSO.md` : contrat SSO / token IAM (responsabilités hôte vs SDK)
- `docs/ARCHITECTURE.md` : architecture du conteneur iOS
- `docs/CUSTOMIZATION.md` : options de personnalisation

### 📄 Licence

Propriétaire — Ecovelo © 
