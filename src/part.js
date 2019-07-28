class Part {
  constructor(instrument) {
    this.instrument = instrument
    this.phrases = []
  }

  add(phrase) {
    this.phrases.push(phrase)
    return this
  }
}

export const part = instrument => {
  return new Part(instrument)
}
