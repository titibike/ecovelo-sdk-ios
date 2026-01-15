platform :ios, '16.0'
use_frameworks!

install! 'cocoapods', :disable_input_output_paths => true


# Chemin vers la racine de ton app Ionic/Capacitor
IONIC_ROOT = '/Users/enzo/Desktop/DEV/JAVASCRIPT/Nouvelle-app/FINAL/appli-usager-v3'

require_relative "#{IONIC_ROOT}/node_modules/@capacitor/ios/scripts/pods_helpers"

# Fonction pour ajouter les plugins Capacitor nécessaires
def capacitor_pods
  pod 'Capacitor', :path => "#{IONIC_ROOT}/node_modules/@capacitor/ios"
  pod 'CapacitorCordova', :path => "#{IONIC_ROOT}/node_modules/@capacitor/ios"

  # Ajouter tous les plugins Capacitor dont ton SDK a besoin
  pod 'CapacitorCommunityNativeAudio', :path => "#{IONIC_ROOT}/node_modules/@capacitor-community/native-audio"
  pod 'CapacitorCommunityStripe', :path => "#{IONIC_ROOT}/node_modules/@capacitor-community/stripe"
  pod 'CapacitorMlkitBarcodeScanning', :path => "#{IONIC_ROOT}/node_modules/@capacitor-mlkit/barcode-scanning"
  pod 'CapacitorApp', :path => "#{IONIC_ROOT}/node_modules/@capacitor/app"
  pod 'CapacitorAppLauncher', :path => "#{IONIC_ROOT}/node_modules/@capacitor/app-launcher"
  pod 'CapacitorBrowser', :path => "#{IONIC_ROOT}/node_modules/@capacitor/browser"
  pod 'CapacitorCamera', :path => "#{IONIC_ROOT}/node_modules/@capacitor/camera"
  pod 'CapacitorFilesystem', :path => "#{IONIC_ROOT}/node_modules/@capacitor/filesystem"
  pod 'CapacitorGeolocation', :path => "#{IONIC_ROOT}/node_modules/@capacitor/geolocation"
  pod 'CapacitorHaptics', :path => "#{IONIC_ROOT}/node_modules/@capacitor/haptics"
  pod 'CapacitorKeyboard', :path => "#{IONIC_ROOT}/node_modules/@capacitor/keyboard"
  pod 'CapacitorPreferences', :path => "#{IONIC_ROOT}/node_modules/@capacitor/preferences"
  pod 'CapacitorPushNotifications', :path => "#{IONIC_ROOT}/node_modules/@capacitor/push-notifications"
  pod 'CapacitorScreenOrientation', :path => "#{IONIC_ROOT}/node_modules/@capacitor/screen-orientation"
  pod 'CapacitorStatusBar', :path => "#{IONIC_ROOT}/node_modules/@capacitor/status-bar"
  pod 'CapawesomeCapacitorLiveUpdate', :path => "#{IONIC_ROOT}/node_modules/@capawesome/capacitor-live-update"
  pod 'SentryCapacitor', :path => "#{IONIC_ROOT}/node_modules/@sentry/capacitor"
  pod 'CapacitorNativeSettings', :path => "#{IONIC_ROOT}/node_modules/capacitor-native-settings"
  pod 'CapacitorPluginAppTrackingTransparency', :path => "#{IONIC_ROOT}/node_modules/capacitor-plugin-app-tracking-transparency"
end
target 'EcoveloSDK' do
  capacitor_pods
end
