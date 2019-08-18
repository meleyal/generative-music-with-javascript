import { Compressor } from './compressor'
import { Reverb } from './reverb'

export class Score {
  constructor(bpm) {
    this.context = new window.AudioContext()
    this.effects = {}
    this.bpm = bpm
    this.parts = []
    this.loaded = false
    this.currentTime = null
    this.createReverb()
    this.createCompressor()
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

  async loadEffects() {
    this.effects['reverb'].load()
  }

  async play() {
    if (!this.loaded) {
      await this.loadInstruments()
      await this.loadEffects()
      this.loaded = true
    }
    for (let part of this.parts) {
      part.play()
    }
    return this
  }

  createReverb(output, options = {}) {
    const reverb = new Reverb(this.context, this.context.destination, options)
    this.effects['reverb'] = reverb
  }

  createCompressor(output, options = {}) {
    const compressor = new Compressor(
      this.context,
      this.effects['reverb'].node,
      options
    )
    this.effects['compressor'] = compressor
  }
}
