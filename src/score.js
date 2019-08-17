import { Compressor } from './compressor'

export class Score {
  constructor(bpm) {
    this.context = new window.AudioContext()
    this.compressor = new Compressor(this.context)
    this.bpm = bpm
    this.parts = []
    this.loaded = false
    this.currentTime = null
  }

  add(part) {
    part.quantize(this.bpm)
    part.score = this
    this.parts.push(part)
    return this
  }

  // Normalize now so events within latency return same timestamp
  now(time = this.context.currentTime) {
    const latency = 0.02

    if (!this.currentTime) {
      this.currentTime = time
    } else if (time - this.currentTime > latency) {
      this.currentTime = time
    }
    return this.currentTime
  }

  async loadInstruments() {
    for (let part of this.parts) {
      await part.loadInstrument()
    }
    return this
  }

  async play() {
    if (!this.loaded) {
      await this.loadInstruments()
      this.loaded = true
    }
    for (let part of this.parts) {
      part.play()
    }
    return this
  }
}
