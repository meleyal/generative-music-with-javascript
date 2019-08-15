/**
 * Score is the container for all the parts of a piece.
 * It plays back its parts at a given bpm.
 *
 * a.k.a. "arrangement" or "session" in a DAW.
 */
export class Score {
  constructor(bpm) {
    this.context = new window.AudioContext() // shared AudioContext
    this.bpm = bpm // tempo in beats per minute
    this.parts = [] // all parts of the score
    this.instrumentsLoaded = false // are all instruments loaded?
    this.currentTime = null // last recorded note time
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

  /**
   * Return a normalized timestamp to account for slight time variations
   * between notes. Times that are off by `latency` will get the same timestamp.
   */
  now(time = this.context.currentTime) {
    const latency = 0.02

    if (!this.currentTime) {
      this.currentTime = time
    } else if (time - this.currentTime > latency) {
      this.currentTime = time
    }
    return this.currentTime
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
