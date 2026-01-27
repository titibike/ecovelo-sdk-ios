Pod::Spec.new do |s|
  s.name             = 'EcoveloSDK'
  s.version          = '1.0.0'
  s.summary          = 'Ecovelo iOS SDK (Capacitor-based) distributed as a binary XCFramework.'
  s.description      = <<-DESC
EcoveloSDK provides a UIKit view controller wrapper around a Capacitor webapp.
Distributed as a prebuilt XCFramework plus an assets bundle.
  DESC

  s.homepage         = 'https://github.com/titibike/ecovelo-sdk-ios'
  s.license          = { :type => 'MIT', :file => 'EcoveloSDK/LICENSE' }
  s.author           = { 'Ecovelo' => 'dev@ecovelo.com' }

  # Required for `pod spec lint` / publishing.
  s.source           = { :git => 'https://github.com/titibike/ecovelo-sdk-ios.git', :tag => s.version.to_s }

  s.platform         = :ios, '16.0'
  s.swift_version    = '5.0'

  s.dependency 'Firebase/CoreOnly'
  s.dependency 'Firebase/Messaging'
  s.dependency 'Firebase/Installations'
  s.dependency 'GoogleDataTransport'
  s.dependency 'GoogleUtilities'
  s.dependency 'nanopb'

  # Binary distribution (path is relative to repo root fetched from `s.source`)
  s.vendored_frameworks = 'EcoveloSDK/build/EcoveloSDK.xcframework'

  # NOTE: current XCFramework contains ios-arm64 (device) + ios-x86_64-simulator slices.
  # If you want arm64-simulator support, regenerate the XCFramework with an
  # ios-arm64_x86_64-simulator slice and remove this exclusion.
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
    'EXCLUDED_ARCHS[sdk=iphonesimulator*]' => 'arm64',
  }
end

