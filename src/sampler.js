import { sample } from 'lodash'
import { context, sampler } from 'gen'

export const sampler = async (context, samples) => {
  const buffers = await Promise.all(
    Object.keys(samples).map(note =>
      fetch(samples[note])
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
        .then(buffer => Object.create({ note, buffer }))
    )
  )

  return note => {
    const now = context.currentTime
    const buffer = buffers.find(b => b.note == note).buffer
    const sourceNode = context.createBufferSource()
    sourceNode.buffer = buffer
    sourceNode.start(now)
    sourceNode.stop(now + buffer.duration)
    sourceNode.connect(context.destination)
  }
}
;(async () => {
  const context = new AudioContext()

  const piano = await sampler(context, {
    C4: 'http://localhost:8081/piano/c4.mp3',
    D1: 'http://localhost:8081/piano/d4.mp3',
    E4: 'http://localhost:8081/piano/e4.mp3',
    F4: 'http://localhost:8081/piano/f4.mp3',
    G4: 'http://localhost:8081/piano/g4.mp3'
    // ...etc.
  })

  // C major chord
  piano('C4')
  piano('E4')
  piano('G4')
})()

context(async ac => {
  // const piano = await sampler(ac, 'piano')
  // piano('A#1')
  // piano('A#4')
  // piano('C7')
  // const notes = ['A4', 'C2', 'D3', 'E7', 'B5']
  //
  // setInterval(() => {
  //   piano(sample(notes))
  // }, 200)
})

// export const sampler = async (context, samples) => {
//   const buffers = await Promise.all(
//     Object.keys(samples).map(note =>
//       fetch(samples[note])
//         .then(response => response.arrayBuffer())
//         .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
//         .then(buffer => Object.create({ note, buffer }))
//     )
//   )
//
//   const compressor = context.createDynamicsCompressor()
//
//   return note => {
//     const notes = typeof note == 'string' ? [note] : note
//     const now = context.currentTime
//
//     // const gainNode = context.createGain()
//     // gainNode.gain.value = 0.5
//
//     compressor.threshold.setValueAtTime(-50, now)
//     compressor.knee.setValueAtTime(40, now)
//     compressor.ratio.setValueAtTime(12, now)
//     compressor.attack.setValueAtTime(0, now)
//     compressor.release.setValueAtTime(0.25, now)
//
//     notes.map(n => {
//       const buffer = buffers.find(b => b.note == n).buffer
//       const sourceNode = context.createBufferSource()
//       sourceNode.buffer = buffer
//       sourceNode.start(now)
//       sourceNode.stop(now + buffer.duration)
//       sourceNode.connect(compressor)
//       compressor.connect(context.destination)
//     })
//   }
// }
//
// export const sampleMap = baseUrl => {
//   const notes = 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B'.split(',')
//   const octaves = [1, 2, 3, 4, 5, 6, 7]
//   const extension = '.mp3'
//
//   const enharmonic = note => {
//     switch (note) {
//       case 'A#':
//         return 'bb'
//       case 'C#':
//         return 'db'
//       case 'D#':
//         return 'eb'
//       case 'F#':
//         return 'bb'
//       case 'G#':
//         return 'ab'
//       default:
//         return note.toLowerCase()
//     }
//   }
//
//   return notes
//     .flatMap(note =>
//       octaves.map(octave => {
//         const name = `${note}${octave}`
//         const path = `${baseUrl}${enharmonic(note)}${octave}${extension}`
//         return { [name]: path }
//       })
//     )
//     .reduce((a, b) => Object.assign(a, b), {})
// }

// import { map, find, isString, defaults } from 'lodash'
// import { instruments as instrumentSamples } from 'gen-samples'
// import { reverbs as reverbSamples } from 'gen-samples'
//
// export const sampler = async (context, samples, globalOptions = {}) => {
//   const { pan, volume, reverb } = defaults(globalOptions, {
//     volume: 0.8,
//     pan: 0,
//     reverb: 'room'
//   })
//
//   const buffers = await createSampleBuffers(context, samples)
//   const reverbNode = await createReverb(context, context.destination, reverb)
//   const panNode = createPan(context, reverbNode, pan)
//   const gainNode = createGain(context, panNode, volume)
//
//   return (note, localOptions) => {
//     const buffer = find(buffers, { note }).buffer
//     play(context, gainNode, buffer, localOptions)
//   }
// }
//
// const load = async (context, path) => {
//   return fetch(path)
//     .then(response => response.arrayBuffer())
//     .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
// }
//
// const loadSample = async (context, path, note) => {
//   return load(context, path).then(audioBuffer => {
//     return {
//       note,
//       buffer: audioBuffer
//     }
//   })
// }
//
// const loadImpulse = async (context, path) => {
//   return load(context, path).then(audioBuffer => {
//     return {
//       buffer: audioBuffer
//     }
//   })
// }
//
// const createSampleBuffers = async (context, samples) => {
//   const sampleMap = isString(samples) ? instrumentSamples[samples] : samples
//
//   return await Promise.all(
//     map(sampleMap, (path, note) => loadSample(context, path, note))
//   )
// }
//
// const createReverb = async (context, output, impulse) => {
//   const impulseBuffer = await loadImpulse(context, reverbSamples[impulse])
//   const convolverNode = context.createConvolver()
//   convolverNode.buffer = impulseBuffer.buffer
//   convolverNode.connect(output)
//   return convolverNode
// }
//
// const createGain = (context, output, volume) => {
//   const now = context.currentTime
//   const gainNode = context.createGain()
//   gainNode.gain.setValueAtTime(volume, now)
//   gainNode.connect(output)
//   return gainNode
// }
//
// const createPan = (context, output, pan) => {
//   const panNode = context.createStereoPanner()
//   panNode.pan.value = pan
//   panNode.connect(output)
//   return panNode
// }
//
// const createSource = (context, output, buffer) => {
//   const now = context.currentTime
//   const sourceNode = context.createBufferSource()
//   sourceNode.buffer = buffer
//   sourceNode.start(now)
//   sourceNode.stop(now + buffer.duration)
//   sourceNode.connect(output)
//   return sourceNode
// }
//
// const createEnvelope = (context, output, volume, attack, release) => {
//   const now = context.currentTime
//   const zero = 0.00001 // value must be positive for exponentialRamp
//   const gainNode = context.createGain()
//   gainNode.gain
//     .setValueAtTime(0, now)
//     .linearRampToValueAtTime(volume, now + attack)
//     .exponentialRampToValueAtTime(zero, now + attack + release)
//   gainNode.connect(output)
//   return gainNode
// }
//
// const play = (context, output, buffer, options = {}) => {
//   const { volume, attack, release } = defaults(options, {
//     volume: 0.8,
//     attack: 0,
//     release: 100
//   })
//
//   const envelopeNode = createEnvelope(context, output, volume, attack, release)
//   createSource(context, envelopeNode, buffer)
// }
