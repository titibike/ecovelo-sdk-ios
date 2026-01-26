import UIKit
import Capacitor

public enum Ecovelo {

    /// Retourne un UIViewController prêt à être présenté en plein écran,
    /// sans aucune UI native (pas de nav bar, pas de title, pas de bouton).
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

        // Le host (SwiftUI / UIKit) choisit comment il le présente.
        // Nous on force juste le fullscreen.
        root.modalPresentationStyle = .fullScreen
        return root
    }
}

final class EcoveloBridgeViewController: CAPBridgeViewController {

    private let initialPath: String?
    private let payload: [String: Any]?
    private let onClose: (() -> Void)?

    private static let enableLogs = true

    init(initialPath: String?, payload: [String: Any]?, onClose: (() -> Void)?) {
        self.initialPath = initialPath
        self.payload = payload
        self.onClose = onClose
        super.init(nibName: nil, bundle: nil)

        // Même si l’hôte présente en sheet sur iPad, on force full screen
        modalPresentationStyle = .fullScreen
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemBackground // ou .systemBackground si tu préfères
        // ✅ Rien d'autre : pas de title, pas de bouton, pas de nav bar.
    }

    // (Optionnel) cacher la status bar pour un “vrai fullscreen”
    override var prefersStatusBarHidden: Bool { true }

    override func instanceDescriptor() -> InstanceDescriptor {
        let descriptor = super.instanceDescriptor()

        if let webRoot = Self.resolveWebRootURL() {
            descriptor.appLocation = webRoot
            if Self.enableLogs {
                print("✅ EcoveloSDK: webRoot =", webRoot.lastPathComponent, "(", webRoot.path, ")")
            }
        } else {
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

        return descriptor
    }

    /// Retourne l’URL du dossier qui contient index.html (ex: .../public)
    private static func resolveWebRootURL() -> URL? {
        let frameworkBundle = Bundle(for: EcoveloBridgeViewController.self)

        let resourceBundle: Bundle? = {
            guard let url = frameworkBundle.url(forResource: "EcoveloSDKResources", withExtension: "bundle") else {
                return nil
            }
            return Bundle(url: url)
        }()

        let bundlesToTry: [Bundle] = [resourceBundle, frameworkBundle, .main].compactMap { $0 }

        for bundle in bundlesToTry {
            if let indexURL = bundle.url(forResource: "index", withExtension: "html", subdirectory: "public") {
                return indexURL.deletingLastPathComponent()
            }
        }
        return nil
    }

    // Bonus: si tu veux quand même pouvoir fermer depuis la webapp,
    // tu peux exposer un plugin Capacitor qui appelle onClose/dismiss.
    func closeFromHostOrWeb() {
        if let onClose { onClose(); return }
        dismiss(animated: true)
    }
}