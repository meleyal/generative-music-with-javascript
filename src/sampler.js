import * as env from './env'
import { midiToPitch } from './music'
import { samples } from './samples'

export const sampler = async (context, inst) => {
  // const context = env.context()
  const sampleMap = samples[inst]
  const buffers = {}

  await Promise.all(
    Object.keys(sampleMap).map(pitch =>
      window
        .fetch(sampleMap[pitch].path)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
        .then(buffer => {
          buffers[pitch] = {
            buffer,
            ...sampleMap[pitch]
          }
        })
    )
  )

  const parseNote = note => {
    // if (Array.isArray(note)) {
    //   return note.map(parseNote)
    // } else if (typeof note === 'number') {
    //   return [midiToPitch(note)]
    // } else {
    //   return [note]
    // }

    return [[midiToPitch(note[0]), note[1]]]
  }

  return (note, options, callback = () => {}) => {
    // const now = context.currentTime
    const notes = parseNote(note)
    // const defaults = { volume: 1, start: now, duration: 1 }
    // const { volume, start, duration } = Object.assign(defaults, options)
    const volume = 1
    const start = options.start
    const uuid = options.uuid

    notes.map(n => {
      if (note[0] !== null) {
        let duration = n[1]
        console.log('note', n, uuid)
        const buffer = buffers[n[0]].buffer
        let sourceNode = context.createBufferSource()
        let gainNode = context.createGain()
        sourceNode.buffer = buffer
        sourceNode.playbackRate.value = buffers[n[0]].playbackRate

        const zero = 0.00001 // value must be positive for exponentialRamp
        gainNode.gain.setValueAtTime(volume, start)
        gainNode.gain.exponentialRampToValueAtTime(
          zero,
          start + Math.min(duration, buffer.duration)
        )

        sourceNode.connect(gainNode)
        gainNode.connect(context.destination)

        sourceNode.start(start)
        sourceNode.stop(start + Math.min(duration, buffer.duration))

        sourceNode.onended = () => {
          callback()
        }

        sourceNode = null
        gainNode = null
        // Rest
      } else {
        let duration = n[1]
        let osc = context.createOscillator()
        osc.onended = () => {
          callback()
        }
        osc.start(start)
        osc.stop(start + duration)
      }
    })
  }
}
