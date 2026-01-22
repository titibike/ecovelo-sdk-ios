import UIKit
import Capacitor

public enum Ecovelo {

    /// Retourne un UIViewController prêt à être présenté par l’app hôte.
    /// - Parameters:
    ///   - initialPath: Route interne dans l'app web (ex: "/home"). Optionnel.
    ///   - payload: Données optionnelles à fournir à l'app web (ex: token, env).
    ///   - onClose: Callback si l’app hôte veut gérer elle-même la fermeture.
    public static func makeViewController(
        initialPath: String? = nil,
        payload: [String: Any]? = nil,
        onClose: (() -> Void)? = nil
    ) -> UIViewController {
        return EcoveloHostViewController(initialPath: initialPath, payload: payload, onClose: onClose)
    }
}

/// Host natif : gère la présentation full screen + bouton Close.
/// Il embarque un `CAPBridgeViewController` pour afficher l'app web.
final class EcoveloHostViewController: UIViewController {

    private let initialPath: String?
    private let payload: [String: Any]?
    private let onClose: (() -> Void)?

    init(initialPath: String?, payload: [String: Any]?, onClose: (() -> Void)?) {
        self.initialPath = initialPath
        self.payload = payload
        self.onClose = onClose
        super.init(nibName: nil, bundle: nil)
        self.modalPresentationStyle = .fullScreen
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemBackground

        // Initialisation du Bridge Capacitor
        let child = EcoveloBridgeViewController(initialPath: initialPath, payload: payload)
        addChild(child)
        view.addSubview(child.view)
        child.view.frame = view.bounds
        child.view.autoresizingMask = [UIView.AutoresizingMask.flexibleWidth, UIView.AutoresizingMask.flexibleHeight]
        child.didMove(toParent: self)

        // Close button
        let closeButton = UIButton(type: .system)
        closeButton.setTitle("Close", for: .normal)
        closeButton.titleLabel?.font = .systemFont(ofSize: 17, weight: .semibold)
        closeButton.translatesAutoresizingMaskIntoConstraints = false
        closeButton.addTarget(self, action: #selector(closeTapped), for: .touchUpInside)

        view.addSubview(closeButton)
        NSLayoutConstraint.activate([
            closeButton.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 12),
            closeButton.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor, constant: -16)
        ])
    }

    @objc private func closeTapped() {
        if let onClose {
            onClose()
        } else if presentingViewController != nil {
            dismiss(animated: true)
        }
    }
}

final class EcoveloBridgeViewController: CAPBridgeViewController {

    private let initialPath: String?
    private let payload: [String: Any]?

    init(initialPath: String?, payload: [String: Any]?) {
        self.initialPath = initialPath
        self.payload = payload
        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func instanceDescriptor() -> InstanceDescriptor {
        let descriptor = super.instanceDescriptor()

        if let webRoot = Self.resolveWebRootURL() {
            descriptor.appLocation = webRoot
        } else {
            // On laisse Capacitor faire, mais on loggue clairement l’échec
            print("❌ EcoveloSDK: impossible de résoudre public/index.html dans aucun bundle")
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
        let fm = FileManager.default

        // 1) Bundle du framework (code)
        let frameworkBundle = Bundle(for: EcoveloBridgeViewController.self)

        // 2) Si tu as un resources bundle (recommandé en distribution), ajuste le nom ici
        let resourceBundle: Bundle? = {
            if let url = frameworkBundle.url(forResource: "EcoveloSDKResources", withExtension: "bundle"),
               let b = Bundle(url: url) {
                return b
            }
            return nil
        }()

        // Ordre de recherche :
        // - resources bundle (si présent)
        // - bundle du framework
        // - main bundle (app hôte)
        let bundlesToTry: [Bundle] = [resourceBundle, frameworkBundle, .main].compactMap { $0 }

        for b in bundlesToTry {
            // Cherche un fichier sûr: public/index.html
            if let indexURL = b.url(forResource: "index", withExtension: "html", subdirectory: "public") {
                let webRoot = indexURL.deletingLastPathComponent()

                // Logs + vérif existence
                print("✅ EcoveloSDK web root trouvé dans bundle:", b.bundlePath)
                print("   ↳ index:", indexURL.path)
                print("   ↳ webRoot:", webRoot.path, "exists:", fm.fileExists(atPath: webRoot.path))

                // Vérifie aussi config dans le même dossier
                let capCfg = webRoot.appendingPathComponent("capacitor.config.json").path
                let cfgXml = webRoot.appendingPathComponent("config.xml").path
                print("   ↳ capacitor.config.json exists:", fm.fileExists(atPath: capCfg), capCfg)
                print("   ↳ config.xml exists:", fm.fileExists(atPath: cfgXml), cfgXml)

                return webRoot
            } else {
                // Log utile pour comprendre *où* on cherche
                print("ℹ️ EcoveloSDK: pas de public/index.html dans:", b.bundlePath)
            }
        }

        // Bonus debug: ce que le framework expose comme resourceURL
        if let ru = frameworkBundle.resourceURL {
            let expected = ru.appendingPathComponent("public", isDirectory: true)
            print("ℹ️ EcoveloSDK: framework resourceURL =", ru.path)
            print("ℹ️ EcoveloSDK: expected public path =", expected.path,
                  "exists:", fm.fileExists(atPath: expected.path))
        }

        return nil
    }
}

