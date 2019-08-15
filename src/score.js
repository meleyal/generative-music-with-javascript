export class Score {
  constructor(bpm) {
    this.context = new window.AudioContext()
    this.bpm = bpm
    this.parts = []
    this.instrumentsLoaded = false
    this.currentTime = null
  }

  add(part) {
    part.quantize(this.bpm)
    part.score = this
    this.parts.push(part)
    return this
  }

  now(time = this.context.currentTime) {
    const latency = 0.02

    if (!this.currentTime) {
      this.currentTime = time
    } else if (time - this.currentTime > latency) {
      this.currentTime = time
    }
    return this.currentTime
  }

  async loadInstruments() {
    for (let part of this.parts) {
      await part.loadInstrument()
    }
    this.instrumentsLoaded = true
    return this
  }

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
