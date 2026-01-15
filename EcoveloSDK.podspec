Pod::Spec.new do |s|
    s.name             = 'EcoveloSDK'
    s.version          = '1.0.0'
    s.summary          = 'Ecovelo SDK for iOS host apps.'
    s.description      = 'Expose a view controller that hosts your web app via Capacitor.'
    s.homepage         = 'https://github.com/titibike/ecovelo-sdk-ios'
    s.license          = { :type => 'MIT' }
    s.author           = { 'titibike' => 'dev@ecovelo.com' }
    s.source           = { :git => 'https://github.com/titibike/ecovelo-sdk-ios.git', :tag => s.version.to_s }
  
    s.ios.deployment_target = '16.0'
    s.swift_version        = '5.0'
  
    # Files
    s.source_files = 'EcoveloSDK/Ecovelo.swift'
  end
  