/**
 * A Part is the grouping of all the phrases for a given instrument.
 *
 * A traditional score might contain e.g. a Violin part, a Cello part, etc.
 *
 * a.k.a. "track" or "channel" in a DAW.
 */
class Part {
  constructor(instrument) {
    this.instrument = instrument  // name of instrument the part is for
    this.phrases = []             // all phrases of the part
  }

  // Add a phrase to the part.
  add(phrase) {
    this.phrases.push(phrase)
    return this
  }
}

export const part = instrument => {
  return new Part(instrument)
}
