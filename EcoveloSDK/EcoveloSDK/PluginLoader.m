// PluginLoader.m
// Forces Capacitor plugin classes to be linked and loaded at startup.

@import Foundation;
@import Capacitor;            // Core Capacitor
@import CapacitorApp;         // @capacitor/app
@import CapacitorBrowser;     // @capacitor/browser
@import CapacitorCamera;      // @capacitor/camera
@import CapacitorFilesystem;  // @capacitor/filesystem
@import CapacitorGeolocation; // @capacitor/geolocation
@import CapacitorHaptics;     // @capacitor/haptics
@import CapacitorKeyboard;    // @capacitor/keyboard
@import CapacitorPreferences; // @capacitor/preferences
@import CapacitorPushNotifications; // @capacitor/push-notifications
@import CapacitorScreenOrientation; // @capacitor/screen-orientation
@import CapacitorStatusBar;   // @capacitor/status-bar

__attribute__((constructor))
static void LoadCapacitorPlugins(void) {
    // Touch the classes so the linker keeps them and they register with Capacitor.
    [AppPlugin class];
    [CAPBrowserPlugin class];
    [CAPCameraPlugin class];
    [FilesystemPlugin class];
    [GeolocationPlugin class];
    [HapticsPlugin class];
    [KeyboardPlugin class];
    [PreferencesPlugin class];
    [PushNotificationsPlugin class];
    [ScreenOrientationPlugin class];
    [StatusBarPlugin class];
}
