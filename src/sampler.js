import { Sample } from './sample'
import samples from './samples'

export class Sampler {
  constructor(context, output, keyOrMap) {
    this.context = context
    this.output = output
    this.samples = samples[keyOrMap] || keyOrMap
    this.buffers = {}
  }

  async load() {
    const samples = this.samples
    await Promise.all(
      Object.keys(samples).map(pitch =>
        window
          .fetch(samples[pitch].path)
          .then(response => response.arrayBuffer())
          .then(arrayBuffer => this.context.decodeAudioData(arrayBuffer))
          .then(buffer => {
            this.buffers[pitch] = {
              buffer,
              ...samples[pitch]
            }
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
