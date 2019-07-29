/**
 * A Part is the grouping of all the phrases for a given instrument.
 *
 * A traditional score might contain e.g. a Violin part, a Cello part, etc.
 *
 * a.k.a. "track" or "channel" in a DAW.
 */
import { sampler } from './sampler'

export class Part {
  constructor(instrument) {
    this.instrument = instrument  // name of instrument the part is for
    this.phrases = []             // all phrases of the part
    this.currentPhrase = 0        // index of currently playing phrase
  }

  // Add a phrase to the part.
  add(phrase) {
    this.phrases.push(phrase)
    return this
  }

  // Load instrument for part.
  async loadInstrument() {
    this.instrument = await sampler(this.instrument)
    return this
  }

  // Play the current phrase.
  play() {
    this.phrases[this.currentPhrase].play(this.instrument)
    return this
  }
}
