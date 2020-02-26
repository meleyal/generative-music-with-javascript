import { midiToPitch } from './music'
import { pitches } from './constants'
import samples from './samples'

export default async (inst, context, time, output) => {
  const buffers = {}
  const sampleMap = samples[inst]

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

  return note => {
    return new Promise(resolve => {
      const now = time()
      const pitch = midiToPitch(note[0])
      const duration = note[1]
      // const volume = state.note[2] || 80
      const volume = 1

      if (note[0] === pitches.rest) {
        let osc = context.createOscillator()
        osc.onended = () => {
          resolve()
        }
        osc.start(now)
        osc.stop(now + duration)
        osc = null
      } else {
        const buffer = buffers[pitch].buffer

        let sourceNode = context.createBufferSource()
        let gainNode = context.createGain()

        sourceNode.buffer = buffer
        sourceNode.playbackRate.value = buffers[pitch].playbackRate

        const zero = 0.00001 // value must be positive for exponentialRamp
        gainNode.gain.setValueAtTime(volume, now)
        gainNode.gain.exponentialRampToValueAtTime(
          zero,
          now + duration
          // now + Math.min(duration, buffer.duration)
        )

        sourceNode.connect(gainNode)
        // gainNode.connect(context.destination)
        // output.connect(gainNode)
        gainNode.connect(output)
        // env.connect(gainNode)

        sourceNode.start(now)
        // sourceNode.stop(now + Math.min(duration, buffer.duration))
        sourceNode.stop(now + duration)

        sourceNode.onended = () => {
          resolve()
        }

        sourceNode = null
        gainNode = null
      }
    })
  }
}
