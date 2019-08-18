import { Sampler } from './sampler'

export class Part {
  constructor(instrument) {
    this.instrument = instrument
    this.phrases = []
    this.score = null
    this.currentPhrase = 0
  }

  add(phrase) {
    phrase.part = this
    this.phrases.push(phrase)
    return this
  }

  async loadInstrument() {
    this.instrument = new Sampler(
      this.score.context,
      this.score.effects['compressor'].node,
      this.instrument
    )
    await this.instrument.load()
    return this
  }

  quantize(bpm) {
    for (let phrase of this.phrases) {
      phrase.quantize(bpm)
    }
    return this
  }

  play() {
    this.phrases[this.currentPhrase].play()
    return this
  }
}
