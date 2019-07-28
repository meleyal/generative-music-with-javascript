/**
 * A Phrase is a logical grouping of notes (pitches and durations) that starts
 * at a given point in the score and may repeat a given number of times.
 *
 * a.k.a. "pattern" or "clip" in a DAW.
 */
class Phrase {
  constructor() {
    this.pitches = []       // all pitches of the phrase
    this.durations = []     // all durations of the phrase
    this.start = 0.0        // start at beginning of score
    this.repetitions = 0    // don't repeat
  }

  // Add notes (parallel lists of pitches and durations) to the phrase.
  add(pitches, durations) {
    this.pitches = this.pitches.concat(pitches)
    this.durations = this.durations.concat(durations)
    return this
  }

  // Set the point at which the phrase should start in the score.
  startAt(time) {
    this.start = time
    return this
  }

  // Repeat the phrase a given a number of times.
  repeat(num) {
    this.repetitions = num
    return this
  }

  // Raise or lower the pitches of the phrase by a given interval.
  transpose(num) {
    this.pitches = this.pitches.map(x => x + num)
    return this
  }
}

export const phrase = () => {
  return new Phrase()
}
