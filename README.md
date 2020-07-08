# DeepSpeech Electron example

This is an example of DeepSpeech running in an Electron app with a ReactJS front-end and processing .wav files.

## Install

Install NPM modules:

```
npm install
npm run rebuild
```

If you get an error such as

```
App threw an error during load
[1] Error: Cannot find module '/Users/av/Code/DeepSpeech-examples/deepspeech-electron/node_modules/deepspeech/lib/binding/v0.7.4/darwin-x64/electron-v9.1/deepspeech.node'
[1] Require stack:
[1] - /Users/av/Code/DeepSpeech-examples/deepspeech-electron/node_modules/deepspeech/index.js
[1] - /Users/av/Code/DeepSpeech-examples/deepspeech-electron/public/recognize-wav.js
[1] - /Users/av/Code/DeepSpeech-examples/deepspeech-electron/public/create-window.js
[1] - /Users/av/Code/DeepSpeech-examples/deepspeech-electron/public/electron.js
[1] - /Users/av/Code/DeepSpeech-examples/deepspeech-electron/node_modules/electron/dist/Electron.app/Contents/Resources/default_app.asar/main.js

```
then check the target in `"rebuild": "npm rebuild --runtime=electron --target=9.0.5 --disturl=https://atom.io/download/atom-shell --abi=75",` matches the electron version

test audio files are already in `/public` directory

deep speech model files are already in root of project

## Run

Run development version (Mac/Linux):

```
npm run dev
```

Run development version (Windows):

```
export BROWSER=none
npm run dev-win
```

I haven't tested much of the below, may not be working

## Package

Build distributable package (Mac/Linux):

```
npm run dist
```

Build distributable package (Windows installer):

```
export BROWSER=none
npm run dist-win
```

Test the (dmg/appimage/exe) package file that has been generated in `/dist`.
