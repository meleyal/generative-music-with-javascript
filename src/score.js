/**
 * A Score is the container for all the parts of a piece and defines the tempo
 * given a bpm.
 *
 * a.k.a. "arrangement" or "session" in a DAW.
 */
class Score {
  constructor(bpm) {
    this.bpm = bpm    // tempo in beats per minute
    this.parts = []   // all parts of the score
  }

  // Add a part to the score.
  add(part) {
    this.parts.push(part)
    return this
  }
}

export const score = bpm => {
  return new Score(bpm)
}
