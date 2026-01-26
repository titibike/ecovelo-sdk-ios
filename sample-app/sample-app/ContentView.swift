//
//  ContentView.swift
//  
//
//  Created by Gireaud Enzo on 12/01/2026.
//

import SwiftUI
import UIKit
import EcoveloSDK

struct EcoveloSDKWrapper: UIViewControllerRepresentable {
    let initialPath: String?
    let payload: [String: Any]?
    let onClose: (() -> Void)?

    func makeUIViewController(context: Context) -> UIViewController {
        Ecovelo.makeViewController(
            initialPath: initialPath,
            payload: payload,
            onClose: onClose
        )
    }

    func updateUIViewController(_ uiViewController: UIViewController, context: Context) {
        // No-op for now
    }
}
/// Fallback SwiftUI view used when the SDK is not enabled or not available.

// MARK: - ContentView
struct ContentView: View {
@State private var showSDK = false


var body: some View {
NavigationStack {
VStack(spacing: 20) {
Text("sample-app")
.font(.title2.bold())


Button("Ouvrir Ecovelo SDK") {
showSDK = true
}
.buttonStyle(.borderedProminent)
}
.navigationDestination(isPresented: $showSDK) {
EcoveloSDKWrapper(
initialPath: nil,
payload: [
"source": "sample-app",
"token": "demo-token"
],
onClose: {
showSDK = false
}
)
.ignoresSafeArea() // 👈 vrai fullscreen
}
}
}
}

#Preview {
    ContentView()
}

