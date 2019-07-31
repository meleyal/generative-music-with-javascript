import * as env from './env'
import { samples } from './samples'
import { noteName } from './music'

/**
 * A Sampler maps notes to audio samples and handles their loading and playback.
 */
export class Sampler {
  constructor(keyOrMap) {
    this.samples = samples[keyOrMap] || keyOrMap // preset or custom map
    this.context = env.context() // AudioContext
    this.buffers = [] // decoded samples
  }

  // Load all samples into buffers.
  async load() {
    this.buffers = await Promise.all(
      Object.keys(this.samples).map(note =>
        fetch(this.samples[note])
          .then(response => response.arrayBuffer())
          .then(arrayBuffer => this.context.decodeAudioData(arrayBuffer))
          .then(buffer => Object.create({ note, buffer }))
      )
    )
  }

  // Play the given note and callback when it's finished.
  play(note, options, callback) {
    const notes = this.parseNote(note)
    const now = this.context.currentTime
    const defaults = { volume: 1, start: now, duration: Infinity }
    const { volume, start, duration } = Object.assign(defaults, options)

    notes.map(n => {
      if (note) {
        const buffer = this.buffers.find(b => b.note == n).buffer
        let sourceNode = this.context.createBufferSource()
        let gainNode = this.context.createGain()
        sourceNode.buffer = buffer

        const zero = 0.00001 // value must be positive for exponentialRamp
        gainNode.gain.value = volume

        // console.log(now, start, duration)
        console.log(start + Math.min(duration, buffer.duration))
        gainNode.gain.linearRampToValueAtTime(
          zero,
          start + Math.min(duration, buffer.duration)
        )

        sourceNode.connect(gainNode)
        gainNode.connect(this.context.destination)

        sourceNode.start(start)
        sourceNode.stop(start + Math.min(duration, buffer.duration))

        sourceNode.onended = () => {
          callback()
        }

        sourceNode = null
        gainNode = null

        // Rest
      } else {
        let osc = this.context.createOscillator()
        osc.onended = () => {
          callback()
        }
        osc.start(start)
        osc.stop(start + duration)
      }
    })
  }

  // Parse notes into a list of note numbers.
  parseNote(note) {
    if (Array.isArray(note)) {
      return note.map(parseNote)
    } else if (typeof note === 'number') {
      return [noteName(note)]
    } else {
      return [note]
    }
  }
}
