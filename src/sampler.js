import { Sample } from './sample'
import { samples } from './samples'

export class Sampler {
  constructor(context, output, keyOrMap) {
    this.context = context
    this.output = output
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

  play(_note, time, callback) {
    const notes = Array.isArray(_note) ? _note : [_note]

    for (let note of notes) {
      const buffer = this.buffers[note.name]
      const sample = new Sample(this.context, this.output, note, buffer)
      sample.play(time, callback)
    }
  }
}
