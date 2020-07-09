const fs = require('fs')
const path = require('path')
const Ffmpeg = require('fluent-ffmpeg')

// find video in videos folder
function videoConvert(videoPath) {
  // const vidPath = './video/sethroganpuppiestrim.mp4'
  const fullPath = path.resolve(videoPath)

  let command = Ffmpeg()

  // convert to format required by deepspeech
  command
    .input(fullPath)
    .audioChannels(1) // mono channel
    .audioCodec('pcm_s16le') // 16bit raw wav codec
    .audioBitrate('256k') // bitrate @ 256kb/s
    .outputOptions([
      '-ar 16000' // sample rate @ 16000hz
    ])
    .on('start', function(commandLine) {
      console.log('Spawned Ffmpeg with command: ' + commandLine);
    })
    .on('error', function(err) {
      console.log('An error occurred: ' + err.message);
    })
    .on('end', function() {
      console.log('Processing finished !');
    })
    .output(path.resolve('./audio/sethrogan.wav')) // save wav
    .run()
}

videoConvert('./video/sethroganpuppiestrim.mp4')