import { Gain } from '../src/gain'
import { Source } from '../src/source'
import { samples } from './samples'
import { pitches } from '../src/constants'

const { REST } = pitches

export class Sampler {
  constructor(context, keyOrMap, compressor) {
    this.context = context
    this.samples = samples[keyOrMap] || keyOrMap
    this.compressor = compressor
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

        const gain = new Gain(this.context, {
          volume: note.volume,
          output: this.compressor.node
        })
        gain.ramp(0, now + duration)

        const source = new Source(this.context, {
          buffer: buffer,
          onended: callback,
          output: gain.node
        })
        source.start(now).stop(now + duration)
      } else {
        const osc = this.context.createOscillator()
        osc.onended = callback
        osc.start(now)
        osc.stop(now + note.duration)
      }
    }
  }
}
