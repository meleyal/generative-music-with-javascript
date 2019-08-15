import { Sampler } from './sampler'

/**
 * Part is the grouping of all the phrases for a given instrument.
 * A traditional score might contain e.g. a Violin part, a Cello part, etc.
 *
 * a.k.a. "track" or "channel" in a DAW.
 */
export class Part {
  constructor(instrument) {
    this.instrument = instrument // name of instrument the part is for
    this.phrases = [] // all phrases of the part
    this.score = null // the score this part belongs to (assigned when added to score)
    this.currentPhrase = 0 // index of currently playing phrase
  }

  /**
   * Add a phrase to the part.
   */
  add(phrase) {
    phrase.part = this
    this.phrases.push(phrase)
    return this
  }

  /**
   * Load the instrument for the part.
   */
  async loadInstrument() {
    this.instrument = new Sampler(this.score.context, this.instrument)
    await this.instrument.load()
    return this
  }

  /**
   * Quantize the durations of each phrase in the part.
   */
  quantize(bpm) {
    for (let phrase of this.phrases) {
      phrase.quantize(bpm)
    }
    return this
  }

  /**
   * Play the current phrase.
   */
  play() {
    this.phrases[this.currentPhrase].play()
    return this
  }
}
