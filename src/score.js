/**
 * A Score is the container for all the parts of a piece.
 *
 * It plays back its parts at a given bpm.
 *
 * a.k.a. "arrangement" or "session" in a DAW.
 */
export class Score {
  constructor(bpm) {
    this.bpm = bpm // tempo in beats per minute
    this.parts = [] // all parts of the score
    this.instrumentsLoaded = false // are all instruments loaded?
  }

  /**
   * Add a part to the score.
   */
  add(part) {
    this.parts.push(part)
    return this
  }

  /**
   * Load the instrument for each part.
   */
  async loadInstruments() {
    for (let part of this.parts) {
      await part.loadInstrument()
    }
    this.instrumentsLoaded = true
    return this
  }

  /**
   * Play all parts.
   */
  async play() {
    if (!this.instrumentsLoaded) {
      await this.loadInstruments()
    }
    for (let part of this.parts) {
      part.play()
    }
    return this
  }
}
