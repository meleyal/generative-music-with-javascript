export const sampler = async (context, samples) => {
  const buffers = await Promise.all(
    Object.keys(samples).map(note =>
      fetch(samples[note])
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
        .then(buffer => Object.create({ note, buffer }))
    )
  )

  const compressorNode = context.createDynamicsCompressor()
  compressorNode.threshold.value = -50
  compressorNode.knee.value = 40
  compressorNode.ratio.value = 12
  compressorNode.attack.value = 0
  compressorNode.release.value = 0.25

  return (note, options) => {
    const now = context.currentTime
    const notes = typeof note == 'string' ? [note] : note
    const defaults = { volume: 1, duration: Infinity }
    const { volume, duration } = Object.assign(defaults, options)

    const gainNode = context.createGain()

    notes.map(n => {
      const buffer = buffers.find(b => b.note == n).buffer
      const sourceNode = context.createBufferSource()
      sourceNode.buffer = buffer

      const zero = 0.00001 // value must be positive for exponentialRamp
      gainNode.gain.value = volume
      gainNode.gain.exponentialRampToValueAtTime(
        zero,
        now + Math.min(duration, buffer.duration)
      )

      sourceNode.connect(gainNode)
      gainNode.connect(compressorNode)
      compressorNode.connect(context.destination)

      sourceNode.start()
    })
  }
}

export const sampleMap = baseUrl => {
  const notes = 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B'.split(',')
  const octaves = [1, 2, 3, 4, 5, 6, 7]
  const extension = '.mp3'

  const enharmonic = note => {
    switch (note) {
      case 'A#':
        return 'bb'
      case 'C#':
        return 'db'
      case 'D#':
        return 'eb'
      case 'F#':
        return 'bb'
      case 'G#':
        return 'ab'
      default:
        return note.toLowerCase()
    }
  }

  return notes
    .flatMap(note =>
      octaves.map(octave => {
        const name = `${note}${octave}`
        const path = `${baseUrl}${enharmonic(note)}${octave}${extension}`
        return { [name]: path }
      })
    )
    .reduce((a, b) => Object.assign(a, b), {})
}

// import { map, find, isString, defaults } from 'lodash'
// import { instruments as instrumentSamples } from 'gen-samples'
// import { reverbs as reverbSamples } from 'gen-samples'
//
// const sampler = async (context, samples, globalOptions = {}) => {
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
