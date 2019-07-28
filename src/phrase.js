class Phrase {
  constructor() {
    this.pitches = []
    this.durations = []
    this.start = 0.0
    this.repetitions = 1
  }

  add(pitches, durations) {
    this.pitches = this.pitches.concat(pitches)
    this.durations = this.durations.concat(durations)
    return this
  }

  startAt(time) {
    this.start = time
    return this
  }

  repeat(num) {
    this.repetitions = num
    return this
  }

  transpose(num) {
    this.pitches = this.pitches.map(x => {
      return x + num
    })
    return this
  }
}

export const phrase = () => {
  return new Phrase()
}
