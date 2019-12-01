import * as env from './env'
import { samples } from './samples'

export const sampler = async inst => {
  const context = env.context()
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
    if (Array.isArray(note)) {
      return note.map(parseNote)
    } else if (typeof note === 'number') {
      return [noteName(note)]
    } else {
      return [note]
    }
  }

  return (note, options, callback = () => {}) => {
    const now = context.currentTime

    const defaults = { volume: 1, start: now, duration: Infinity }
    const { volume, start, duration } = Object.assign(defaults, options)

    notes.map(n => {
      if (note) {
        const buffer = buffers[n].buffer
        let sourceNode = context.createBufferSource()
        let gainNode = context.createGain()
        sourceNode.buffer = buffer
        sourceNode.playbackRate.value = buffers[n].playbackRate

        const zero = 0.00001 // value must be positive for exponentialRamp
        gainNode.gain.setValueAtTime(volume, now + start)
        gainNode.gain.exponentialRampToValueAtTime(
          zero,
          now + start + Math.min(duration, buffer.duration)
        )

        sourceNode.connect(gainNode)
        gainNode.connect(context.destination)

        sourceNode.start(now + start)
        sourceNode.stop(now + start + Math.min(duration, buffer.duration))

        sourceNode.onended = () => {
          callback()
        }

        sourceNode = null
        gainNode = null
        // Rest
      } else {
        let osc = context.createOscillator()
        osc.onended = () => {
          callback()
        }
        osc.start(now + start)
        osc.stop(now + start + duration)
      }
    })
  }
}
