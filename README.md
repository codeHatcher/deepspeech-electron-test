### DeepSpeech Electron example


## Install

Install NPM modules:

```
npm install
npm run rebuild
```

Download and extract audio files to `/public/audio` directory

```
wget https://github.com/mozilla/DeepSpeech/releases/download/v0.7.0/audio-0.7.0.tar.gz
tar xfvz audio-0.7.0.tar.gz -C ./public/
```

(Optional) Download or softlink DeepSpeech 0.7.4 model files to `/public`:

```
mkdir public
cd public
wget https://github.com/mozilla/DeepSpeech/releases/download/v0.7.4/deepspeech-0.7.4-models.pbmm
wget https://github.com/mozilla/DeepSpeech/releases/download/v0.7.4/deepspeech-0.7.4-models.scorer
cd ..
```

If the files do not exist, they will be downloaded.

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

Test (dmg/appimage/exe) package which will have been generated in `/dist`.
