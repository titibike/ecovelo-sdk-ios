Pod::Spec.new do |s|
    s.name             = 'EcoveloSDK'
    s.version          = '1.0.0'
    s.summary          = 'Ecovelo SDK pour iOS.'
    s.description      = 'Un SDK permettant l’intégration du SDK Ecovelo et de ses dépendances pour iOS.'
    s.homepage         = 'https://github.com/titibike/ecovelo-sdk-ios'
    s.license          = { :type => 'MIT', :file => 'LICENSE' }
    s.author           = { 'Ecovelo' => 'dev@ecovelo.com' }
    s.source           = { :git => 'https://github.com/titibike/ecovelo-sdk-ios.git', :tag => s.version.to_s }
    s.ios.deployment_target = '16.0'
  
    # Dépendances Capacitor
    s.frameworks       = 'UIKit', 'Capacitor'
    
    # Ajouter toutes les dépendances Capacitor nécessaires pour ton SDK
    s.dependency 'Capacitor'
    s.dependency 'CapacitorCordova'
    s.dependency 'CapacitorCommunityNativeAudio'
    s.dependency 'CapacitorCommunityStripe'
    s.dependency 'CapacitorMlkitBarcodeScanning'
    s.dependency 'CapacitorApp'
    s.dependency 'CapacitorAppLauncher'
    s.dependency 'CapacitorBrowser'
    s.dependency 'CapacitorCamera'
    s.dependency 'CapacitorFilesystem'
    s.dependency 'CapacitorGeolocation'
    s.dependency 'CapacitorHaptics'
    s.dependency 'CapacitorKeyboard'
    s.dependency 'CapacitorPreferences'
    s.dependency 'CapacitorPushNotifications'
    s.dependency 'CapacitorScreenOrientation'
    s.dependency 'CapacitorStatusBar'
    s.dependency 'CapacitorNativeSettings'
    s.dependency 'CapacitorPluginAppTrackingTransparency'
    s.dependency 'CapawesomeCapacitorLiveUpdate'
    s.dependency 'SentryCapacitor'
    
    # Fichiers sources Swift de ton SDK
    s.source_files     = '/Users/enzo/Desktop/DEV/CITYWAY/EcoveloSDK/EcoveloSDK/Ecovelo.swift'
  
    # Si tu utilises des ressources supplémentaires, tu peux les ajouter ici
    # s.resource_bundles = {
    #   'EcoveloSDK' => ['EcoveloSDK/WebApp/public/*']
    # }
  end
  