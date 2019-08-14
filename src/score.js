/**
 * Score is the container for all the parts of a piece.
 *
 * It plays back its parts at a given bpm.
 *
 * a.k.a. "arrangement" or "session" in a DAW.
 */
export class Score {
  constructor(bpm) {
    this.context = new AudioContext()
    this.bpm = bpm // tempo in beats per minute
    this.parts = [] // all parts of the score
    this.instrumentsLoaded = false // are all instruments loaded?
    this.lastTime = null
  }

  /**
   * Add a part to the score.
   */
  add(part) {
    part.quantize(this.bpm) // quantize part to bpm
    part.score = this
    this.parts.push(part)
    return this
  }

  delta(time) {
    if (!this.lastTime) {
      this.lastTime = time
    } else if (time - this.lastTime > 0.02) {
      this.lastTime = time
    }
    return this.lastTime
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
   * Play all parts of the score.
   */
  async play() {
    if (!this.instrumentsLoaded) {
      await this.loadInstruments() // wait for all instruments to be loaded
    }
    for (let part of this.parts) {
      part.play() // play each part
    }
    return this
  }
}
