/**
 * A Phrase is a logical grouping of notes (pitches and durations) that starts
 * at a given point in the score and may repeat a given number of times.
 *
 * a.k.a. "pattern" or "clip" in a DAW.
 */
export class Phrase {
  constructor() {
    this.instrument = null  // instrument for playback (assigned from part)
    this.pitches = []       // all pitches of the phrase
    this.durations = []     // all durations of the phrase
    this.length = 0         // length of phrase (total number of notes)
    this.start = 0.0        // start at beginning of score
    this.repeats = 1        // don't repeat (play once)
    this.currentTick = 0    // current metronome tick
    this.currentNote = 0    // index of currently playing note
    this.playCount = 0      // how many times phrase has played
  }

  // Add notes (parallel lists of pitches and durations) to the phrase.
  add(pitches, durations) {
    if (pitches.length !== durations.length) {
      throw 'pitch and duration lists must be same length'
    }
    this.pitches = this.pitches.concat(pitches)
    this.durations = this.durations.concat(durations)
    this.length = this.pitches.length
    return this
  }

  // Play phrase using part's instrument.
  play(instrument) {
    this.instrument = instrument
    this.tick()
  }

  // Tick through notes of phrase recursively.
  tick(tick = this.currentTick) {
    if (this.playCount === this.repeats) {
      return
    }

    const pitch = this.pitches[this.currentNote]
    const duration = this.durations[this.currentNote]

    // Should the phrase be playing yet?
    if (this.currentTick >= this.start) {

      // Play the current note.
      this.instrument(pitch, { duration }, () => {

        // Move to the next note and metronome beat.
        this.currentNote += 1
        this.currentTick += 1

        // Rewind and repeat if we're at the end of the phrase.
        if (this.currentNote === this.length) {
          this.playCount += 1
          this.currentNote = 0
        }

        // Continue ticking.
        this.tick(this.currentTick)
      })

    }
    // The phrase should not start yet.
    else {

      // Continue to play rests to advance the metronome beat.
      this.instrument(null, { duration }, () => {
        this.currentTick += 1
        this.tick(this.currentTick)
      })
    }
  }

  // Set the point at which the phrase should start in the score.
  startAt(time) {
    this.start = time
    return this
  }

  // Repeat the phrase a given a number of times.
  repeat(num) {
    this.repeats = num
    return this
  }

  // Raise or lower the pitches of the phrase by a given interval.
  transpose(num) {
    this.pitches = this.pitches.map(x => x + num)
    return this
  }
}
