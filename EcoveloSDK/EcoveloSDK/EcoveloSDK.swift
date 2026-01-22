import UIKit
import Capacitor

public enum Ecovelo {

    /// Retourne un UIViewController prêt à être présenté (SwiftUI fullScreenCover)
    /// ou pushé (UIKit) pour un rendu plus "intégré".
    public static func makeViewController(
        initialPath: String? = nil,
        payload: [String: Any]? = nil,
        onClose: (() -> Void)? = nil
    ) -> UIViewController {

        let root = EcoveloBridgeViewController(
            initialPath: initialPath,
            payload: payload,
            onClose: onClose
        )

        let nav = UINavigationController(rootViewController: root)
        nav.modalPresentationStyle = .fullScreen
        nav.navigationBar.prefersLargeTitles = false
        return nav
    }
}

final class EcoveloBridgeViewController: CAPBridgeViewController {

    private let initialPath: String?
    private let payload: [String: Any]?
    private let onClose: (() -> Void)?

    // Toggle simple (si tu veux zéro log en prod, mets false)
    private static let enableLogs = true

    init(initialPath: String?, payload: [String: Any]?, onClose: (() -> Void)?) {
        self.initialPath = initialPath
        self.payload = payload
        self.onClose = onClose
        super.init(nibName: nil, bundle: nil)

        // Sécurité : même si l'hôte présente en sheet sur iPad, on force full screen
        modalPresentationStyle = .fullScreen
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        view.backgroundColor = .systemBackground
        title = "Ecovelo"

        // Bouton Fermer natif (plus "intégré" qu'un UIButton overlay)
        navigationItem.rightBarButtonItem = UIBarButtonItem(
            title: "Fermer",
            style: .done,
            target: self,
            action: #selector(closeTapped)
        )
    }

    @objc private func closeTapped() {
        if let onClose {
            onClose()
            return
        }

        // Si pushé dans une nav existante
        if let nav = navigationController, nav.viewControllers.first != self {
            nav.popViewController(animated: true)
            return
        }

        // Si présenté (ex: SwiftUI fullScreenCover)
        dismiss(animated: true)
    }

    override func instanceDescriptor() -> InstanceDescriptor {
        let descriptor = super.instanceDescriptor()

        if let webRoot = Self.resolveWebRootURL() {
            descriptor.appLocation = webRoot
            if Self.enableLogs {
                print("✅ EcoveloSDK: webRoot =", webRoot.lastPathComponent, "(", webRoot.path, ")")
            }
        } else {
            // 1 seul log clair
            if Self.enableLogs {
                let frameworkBundle = Bundle(for: EcoveloBridgeViewController.self)
                let fw = frameworkBundle.bundlePath
                let hasResourceBundle = frameworkBundle.url(forResource: "EcoveloSDKResources", withExtension: "bundle") != nil
                print("❌ EcoveloSDK: webRoot introuvable (attendu: public/index.html). frameworkBundle=\(fw) resourcesBundlePresent=\(hasResourceBundle)")
            }
        }

        if let trimmed = initialPath?
            .trimmingCharacters(in: CharacterSet(charactersIn: "/")),
           !trimmed.isEmpty {
            descriptor.appStartPath = trimmed
        }

        // NOTE: payload — à brancher via un plugin / bridge si besoin.
        // Ici on garde la signature, mais Capacitor n’a pas un champ "payload" natif dans InstanceDescriptor.

        return descriptor
    }

    /// Retourne l’URL du dossier qui contient index.html (ex: .../public)
    private static func resolveWebRootURL() -> URL? {
        let frameworkBundle = Bundle(for: EcoveloBridgeViewController.self)

        // Si tu packs tes assets dans un .bundle séparé (recommandé)
        let resourceBundle: Bundle? = {
            guard let url = frameworkBundle.url(forResource: "EcoveloSDKResources", withExtension: "bundle") else {
                return nil
            }
            return Bundle(url: url)
        }()

        // Ordre minimal, pas de logs de "not found" pour chaque essai
        let bundlesToTry: [Bundle] = [resourceBundle, frameworkBundle, .main].compactMap { $0 }

        for bundle in bundlesToTry {
            if let indexURL = bundle.url(forResource: "index", withExtension: "html", subdirectory: "public") {
                return indexURL.deletingLastPathComponent()
            }
        }

        return nil
    }
}
