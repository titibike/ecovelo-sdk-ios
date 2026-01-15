import UIKit

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
        EcoveloHostViewController(initialPath: initialPath, payload: payload, onClose: onClose)
    }
}

/// Host natif : gère la présentation full screen + bouton Close.
/// À l’étape suivante, il embarquera le CAPBridgeViewController (Capacitor).
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

        // Placeholder tant que Capacitor n'est pas branché
        let label = UILabel()
        label.text = """
        Ecovelo SDK Host ✅

        initialPath: \(initialPath ?? "nil")
        payload: \(payload != nil ? "✅" : "nil")

        (Capacitor web app not wired yet)
        """
        label.textAlignment = .center
        label.numberOfLines = 0
        label.font = .systemFont(ofSize: 17, weight: .semibold)
        label.translatesAutoresizingMaskIntoConstraints = false

        view.addSubview(label)
        NSLayoutConstraint.activate([
            label.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            label.centerYAnchor.constraint(equalTo: view.centerYAnchor),
            label.leadingAnchor.constraint(greaterThanOrEqualTo: view.leadingAnchor, constant: 24),
            label.trailingAnchor.constraint(lessThanOrEqualTo: view.trailingAnchor, constant: -24)
        ])

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
