import { invert } from 'lodash'
import { pitches } from '../src/constants'
import { remap } from '../src/number'

export class Note {
  constructor(pitch, duration = Infinity, velocity = 80) {
    this.pitch = pitch
    this.duration = duration
    this.velocity = velocity
  }

  get name() {
    return invert(pitches)[this.pitch]
  }

  get volume() {
    return remap(this.velocity, 0, 127, 0, 1)
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
