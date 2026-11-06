# Daydream

A local music player with audio-reactive visualizers. Drop in a folder of MP3s and it plays them, shows synced lyrics, and turns the music into full-window 3D scenes.

Everything runs from one file, `Daydream.html`. Open it in a browser, or install the Windows desktop app.

## Download

Get the latest Windows installer from the [Releases](../../releases) page.

The installer is not code-signed yet, so Windows SmartScreen may warn you. Choose **More info**, then **Run anyway**. PCs with Smart App Control turned on will block it until it is signed.

## Features

- **Playlist by folder.** Each subfolder becomes its own group. Shuffle, repeat, crossfade, search.
- **Scenes.** Full-window WebGL visualizers driven by bass, kicks, snares, vocals, drops and tempo:
  Entity, Core, Meadow, Halo, Gravity, Reef, Neural and Nebula.
- **Classic visualizers.** Wave, Orb, Bars, Peaks, and Outline (bars or peaks around the subject of your background image).
- **Lyrics.** Floating lyrics and karaoke, from local `.lrc` files or [LRCLIB](https://lrclib.net).
- **Slowed + reverb**, a 10-band equalizer, custom colors and backgrounds.
- **Album covers** from the files' tags, a `cover.jpg` in the folder, or an online lookup.

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| Space | Play / pause |
| ← / → | Seek 5 seconds |
| N / P | Next / previous track |
| S | Stop |
| V | Next visualizer |
| C | Next scene |
| R | Slowed + reverb |
| E | Equalizer |
| I | Track info |
| [ / ] | Nudge lyrics timing |

## Run from source

No build step is needed for the player itself:

1. Clone the repo.
2. Open `Daydream.html` in Chrome, Edge or Firefox.

Scenes need WebGL2.

## Build the desktop app

The Windows app is a [Tauri v2](https://tauri.app) wrapper in [`app/`](app/). It needs Node.js and Rust.

```bash
cd app
npm install
npm run build
```

The installer lands in `app/src-tauri/target/release/bundle/nsis/`. See [`app/README.md`](app/README.md) for details.

## Privacy

Your music stays on your computer. The player only goes online for these, and each has a switch in Settings:

- **Lyrics**: song title and artist are sent to LRCLIB.
- **Missing album covers**: title and artist are sent to Apple's iTunes Search API.
- **Fonts** in the browser version load from Google Fonts. The desktop app bundles its fonts.

Settings are stored in your browser's local storage, or in WebView2 storage for the desktop app.

## Contributing

Issues and pull requests are welcome.

1. Fork the repo and create a branch.
2. Make your change in `Daydream.html`. The desktop build copies it automatically.
3. Test it in a browser, ideally with a few real songs.
4. Open a pull request that describes what changed and why.

## License

[GNU General Public License v3.0 or later](LICENSE). You may use, study, change and share Daydream. If you distribute a modified version, you must release its source under the same license.
