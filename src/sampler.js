import { samples } from './samples'
import { pitches } from '../src/constants'

const { REST } = pitches

export class Sampler {
  constructor(context, keyOrMap) {
    this.context = context
    this.samples = samples[keyOrMap] || keyOrMap
    this.buffers = {}
  }

  async load() {
    await Promise.all(
      Object.keys(this.samples).map(note =>
        window
          .fetch(this.samples[note])
          .then(response => response.arrayBuffer())
          .then(arrayBuffer => this.context.decodeAudioData(arrayBuffer))
          .then(buffer => {
            this.buffers[note] = buffer
          })
      )
    )
  }

  play(_note, when, callback) {
    const notes = Array.isArray(_note) ? _note : [_note]
    const now = when

    for (let note of notes) {
      if (note.pitch !== REST) {
        const buffer = this.buffers[note.name]
        const duration = Math.min(note.duration, buffer.duration)

        const gainNode = this.context.createGain()
        gainNode.connect(this.context.destination)
        gainNode.gain.value = note.volume
        gainNode.gain.linearRampToValueAtTime(0, now + duration)

        const sourceNode = this.context.createBufferSource()
        sourceNode.connect(gainNode)
        sourceNode.buffer = buffer
        sourceNode.onended = callback
        sourceNode.start(now)
        sourceNode.stop(now + duration)
      } else {
        const osc = this.context.createOscillator()
        osc.onended = callback
        osc.start(now)
        osc.stop(now + note.duration)
      }
    }
  }
}
