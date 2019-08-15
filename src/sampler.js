import { samples } from './samples'
import { noteName } from './music'

export class Sampler {
  constructor(context, keyOrMap) {
    this.samples = samples[keyOrMap] || keyOrMap
    this.context = context
    this.buffers = []
  }

  async load() {
    this.buffers = await Promise.all(
      Object.keys(this.samples).map(note =>
        window
          .fetch(this.samples[note])
          .then(response => response.arrayBuffer())
          .then(arrayBuffer => this.context.decodeAudioData(arrayBuffer))
          .then(buffer => {
            return { note, buffer }
          })
      )
    )
  }

  play(note, options, callback) {
    const notes = this.parseNote(note)
    const defaults = { volume: 1, offset: 0, duration: Infinity }
    const { volume, offset, duration } = Object.assign(defaults, options)
    const now = offset

    notes.map(n => {
      if (note) {
        const buffer = this.buffers.find(b => b.note == n).buffer
        let sourceNode = this.context.createBufferSource()
        let gainNode = this.context.createGain()
        sourceNode.buffer = buffer

        const zero = 0.00001 // value must be positive for exponentialRamp
        gainNode.gain.value = volume

        gainNode.gain.linearRampToValueAtTime(
          zero,
          now + Math.min(duration, buffer.duration)
        )

        sourceNode.connect(gainNode)
        gainNode.connect(this.context.destination)

        sourceNode.onended = () => {
          callback()
        }
        sourceNode.start(now)
        sourceNode.stop(now + Math.min(duration, buffer.duration))

        sourceNode = null
        gainNode = null
      } else {
        let osc = this.context.createOscillator()
        osc.onended = () => {
          callback()
        }
        osc.start(now)
        osc.stop(now + duration)
        osc = null
      }
    })
  }

  parseNote(note) {
    if (Array.isArray(note)) {
      return note.map(this.parseNote)
    } else if (typeof note === 'number') {
      return [noteName(note)]
    } else {
      return [note]
    }
  }
}
