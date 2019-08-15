export class Note {
  constructor(pitch, duration, velocity = 80) {
    this.pitch = pitch
    this.duration = duration
    this.velocity = velocity
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
