import { invert } from 'lodash'
import { remap } from './number'
import { pitches, velocities } from './constants'

const { f, fff, silent } = velocities

export class Note {
  constructor(pitch, duration = Infinity, velocity = f) {
    this.pitch = pitch
    this.duration = duration
    this.velocity = velocity
  }

  get name() {
    return invert(pitches)[this.pitch]
  }

  get volume() {
    return remap(this.velocity, silent, fff, 0, 1)
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
