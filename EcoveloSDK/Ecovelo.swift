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

/// ViewController Capacitor pour charger l'app depuis le bundle
final class EcoveloBridgeViewController: CAPBridgeViewController {

    private let initialPath: String?
    private let payload: [String: Any]?

    // Designated initializer that sets our parameters and calls super
    init(initialPath: String?, payload: [String: Any]?) {
        self.initialPath = initialPath
        self.payload = payload
        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    // Fournit un InstanceDescriptor personnalisé pour charger les assets depuis le bundle du framework
    override func instanceDescriptor() -> InstanceDescriptor {
        let descriptor = super.instanceDescriptor()

        // Localise le dossier 'public' dans le bundle du framework
        let bundle = Bundle(for: EcoveloBridgeViewController.self)
        if let publicURL = bundle.url(forResource: "public", withExtension: nil) {
            descriptor.appLocation = publicURL
        } else if let resourcesURL = bundle.resourceURL {
            descriptor.appLocation = resourcesURL
        }

        // Si une route initiale est fournie, la définir comme chemin de démarrage
        if let initialPath = initialPath?.trimmingCharacters(in: CharacterSet(charactersIn: "/")), !initialPath.isEmpty {
            descriptor.appStartPath = initialPath
        }

        return descriptor
    }
}

