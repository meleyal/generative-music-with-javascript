import { invert } from 'lodash'
import { pitches } from '../src/constants'

export class Note {
  constructor(pitch, duration = Infinity, velocity = 80) {
    this.pitch = pitch
    this.duration = duration
    this.velocity = velocity
  }

  get name() {
    return invert(pitches)[this.pitch]
  }

  quantize(bpm) {
    const bps = 60.0 / bpm
    this.duration = this.duration * bps
    return this
  }

  transpose(num) {
    this.pitch = this.pitch + num
    return this
  }
}
