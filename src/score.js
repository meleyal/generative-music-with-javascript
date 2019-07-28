class Score {
  constructor(bpm) {
    this.bpm = bpm
    this.parts = []
  }

  add(part) {
    this.parts.push(part)
    return this
  }
}

export const score = bpm => {
  return new Score(bpm)
}
