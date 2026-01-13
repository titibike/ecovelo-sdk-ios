# Intégration de l’app Ionic dans le SDK iOS

Ce guide explique comment builder l’app Ionic/Capacitor (appli usager) et l’intégrer dans le SDK iOS en tant qu’assets embarqués (`sdk-ios/Resources/www/`).

## Contrainte iOS (important)

Sur iOS, Capacitor attend que le répertoire de l’app contienne (à côté de `index.html`) :

- `capacitor.config.json`
- `config.xml` (utile si `CapacitorCordova` / plugins Cordova sont utilisés)

Le script fourni `scripts/copy-www.sh` gère ce point (copie ou génération minimale).

## Étape 1 – Contrat “token IAM” côté webapp

Le SDK iOS injecte le token IAM dans `UserDefaults` sous la clé :

- `ecovelo_iam_token`

### Option A (recommandée) : lire via `@capacitor/preferences`

Dans la webapp :

```ts
import { Preferences } from '@capacitor/preferences';

export async function getIamToken(): Promise<string | null> {
  const { value } = await Preferences.get({ key: 'ecovelo_iam_token' });
  return value || null;
}
```

> ⚠️ Côté iOS natif, cela requiert que le plugin **Preferences** soit embarqué (voir Étape 3).

### Option B : support “injection JS”

Si vous souhaitez permettre au SDK iOS d’injecter aussi le token via une API JS, exposez par exemple :

```ts
// Dans la webapp (chargée au démarrage)
(window as any).EcoveloSDK = (window as any).EcoveloSDK || {};
(window as any).EcoveloSDK.setIAMToken = ({ token, programId }: { token: string; programId?: string }) => {
  // Stocker en mémoire / state management
  (window as any).__ecoveloIamToken = token;
  (window as any).__ecoveloProgramId = programId;
};
```

## Étape 2 – Build de la webapp

Dans le projet Ionic :

```bash
npm ci
npm run build
# Recommandé (génère des fichiers iOS utiles):
npx cap sync ios
```

## Étape 3 – Copier les assets dans le SDK iOS

Utiliser le script :

```bash
cd /path/to/sdk-ios
bash scripts/copy-www.sh /path/to/ionic-app
```

Le script copie :

- `www/` (ou `www/browser/` si SSR Angular)
- ou `dist/` (fallback)

Et place le résultat dans :

- `sdk-ios/Resources/www/`

## Étape 4 – Activer les plugins Capacitor côté iOS

Les plugins Capacitor doivent exister **côté natif** pour fonctionner dans l’app embarquée.

Dans ce dépôt, cela passe par CocoaPods (`Podfile`). Exemple :

- si la webapp utilise `@capacitor/preferences` → ajouter :
  - `pod 'CapacitorPreferences', '~> 6.0'`
- si la webapp utilise `@capacitor/geolocation` → ajouter :
  - `pod 'CapacitorGeolocation', '~> 6.0'`
- si la webapp utilise `@capacitor/camera` → ajouter :
  - `pod 'CapacitorCamera', '~> 6.0'`

Puis :

```bash
cd /path/to/sdk-ios
pod install
open sdk-ios.xcworkspace
```

> Si un plugin manque, la webapp échouera typiquement avec une erreur Capacitor `UNIMPLEMENTED` (visible dans les logs).

## Étape 5 – Tester avec le TestHost

Le dépôt contient une app hôte minimale SwiftUI :

- `TestHost/`

Vous pouvez l’utiliser pour valider :

- chargement de la webapp
- accès au token IAM injecté
- parcours principal
- callback de fin (`ecovelo-sdk://finish`)

## Checklist

- [ ] `index.html` présent dans `sdk-ios/Resources/www/`
- [ ] `capacitor.config.json` et `config.xml` présents à côté de `index.html`
- [ ] Plugins iOS nécessaires ajoutés au `Podfile` + `pod install`
- [ ] `Info.plist` de l’app hôte complété avec les permissions (Camera/Location/BLE…)
- [ ] TestHost OK

