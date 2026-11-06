# Daydream desktop app

Tauri v2 wrapper around `../Daydream.html`. Keep editing `Daydream.html`; every build copies it to `dist/index.html`
(see `sync.mjs`) and swaps Google Fonts for the bundled copies in `dist/fonts/`.

## Build the installer

```bash
npm install
npm run build
```

Output: `src-tauri/target/release/bundle/nsis/Daydream_<version>_x64-setup.exe`

Bump the version in both `src-tauri/tauri.conf.json` and `src-tauri/Cargo.toml` before shipping an update.

## Other commands

- `npm run dev` runs the app without building an installer.
- `npm run icon` regenerates `src-tauri/icons/` from `icon.svg`. Delete the `android/`, `ios/` and extra PNG files it adds.

## Notes

- `dragDropEnabled: false` in `tauri.conf.json` is required, or Tauri swallows folder drops before the page sees them.
- Settings live in WebView2 storage under `%LOCALAPPDATA%\com.vitalrtech.daydream`. Uninstalling may remove them; use Export config first.
- The installer is unsigned. PCs with Smart App Control on will block it until it is code-signed.
