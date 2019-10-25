import { Sample } from './sample'
// import { samples } from './samples'
import { decode } from 'base64-arraybuffer'
import { range, min } from 'lodash'
import { noteName, noteNumber } from './music'

export class Sampler {
  constructor(context, output, keyOrMap) {
    this.context = context
    this.output = output
    // this.samples = samples[keyOrMap] || keyOrMap
    this.buffers = {}
  }

  findClosest(number) {
    return min(
      Object.keys(this.samples.notes).map(name => {
        return noteNumber(name) - number
      })
    )
  }

  async load() {
    this.samples = await import(
      /* webpackChunkName: "piano" */ './samples/piano/index.js'
    )
    console.log(this.samples.piano)

    return

    this.findClosest(21)

    const [start, stop] = this.samples.range.map(noteNumber)
    range(start, stop + 1).map(num => {
      const interval = this.findClosest(num)
      const name = noteName(num + interval)
      console.log(noteName, interval)
      const sample = this.samples.notes[name]

      if (this.samples.notes[name]) {
        this.buffers[name] = sample
      }
    })

    // console.log(this.buffers)

    // await Promise.all(
    //   Object.keys(this.samples).map(note =>
    //     window
    //       .fetch(this.samples[note])
    //       .then(response => response.arrayBuffer())
    //       .then(arrayBuffer => this.context.decodeAudioData(arrayBuffer))
    //       .then(buffer => {
    //         this.buffers[note] = buffer
    //       })
    //   )
    // )
  }

  /**
   * base64 version
   * TODO: Find closest note: https://github.com/Tonejs/Tone.js/blob/dev/Tone/instrument/Sampler.js#L133
   */
  // async load() {
  //   await Promise.all(
  //     Object.keys(this.samples).map(note => {
  //       const arrayBuffer = decode(this.samples[note])
  //       return this.context.decodeAudioData(arrayBuffer).then(buffer => {
  //         this.buffers[note] = buffer
  //       })
  //     })
  //   )
  // }

  play(_note, time, callback) {
    const notes = Array.isArray(_note) ? _note : [_note]

    for (let note of notes) {
      const buffer = this.buffers[note.name]
      const sample = new Sample(this.context, this.output, note, buffer)
      sample.play(time, callback)
    }
  }
}
