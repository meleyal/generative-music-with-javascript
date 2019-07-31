import { Note } from './note'

/**
 * A Phrase is a logical grouping of notes (pitches and durations) that starts
 * at a given point in the score and may repeat a given number of times.
 *
 * a.k.a. "pattern" or "clip" in a DAW.
 */
export class Phrase {
  constructor() {
    this.instrument = null // instrument for playback (assigned from part)
    this.notes = [] // all notes of the phrase
    this.start = 0.0 // start at beginning of score
    this.repeats = 0 // don't repeat (play once)
    this.currentTick = 0 // current metronome tick
    this.currentNote = 0 // index of currently playing note
    this.playCount = 0 // how many times phrase has played
  }

  /**
   * Add notes (parallel lists of pitches and durations) to the phrase.
   */
  add(pitches, durations) {
    if (pitches.length !== durations.length) {
      throw 'pitch and duration lists must be same length'
    }
    const newNotes = pitches.map((p, idx) => new Note(p, durations[idx]))
    this.notes = this.notes.concat(newNotes)
    return this
  }

  /**
   * Play phrase using part's instrument.
   */
  play(instrument) {
    this.instrument = instrument
    this.tick()
    return this
  }

  /**
   * Tick through notes of phrase recursively.
   */
  tick(tick = this.currentTick) {
    if (this.playCount > this.repeats) {
      return
    }

    // const pitch = this.pitches[this.currentNote]
    // const duration = this.durations[this.currentNote]
    const note = this.notes[this.currentNote]

    // Should the phrase be playing yet?
    if (this.currentTick >= this.start) {
      // Play the current note.
      this.instrument.play(note.pitch, { duration: note.duration }, () => {
        // Advance to the next note and metronome tick.
        this.currentNote += 1
        this.currentTick += 1

        // Rewind if we're at the end of the phrase.
        if (this.currentNote === this.notes.length) {
          this.playCount += 1
          this.currentNote = 0
        }

        // Continue ticking.
        this.tick(this.currentTick)
      })
    }
    // The phrase should not start yet.
    else {
      // Continue to play rests to advance the metronome tick.
      this.instrument.play(null, { duration: note.duration }, () => {
        this.currentTick += 1
        this.tick(this.currentTick)
      })
    }
  }

  /**
   * Quantize the durations of each of the notes in the phrase.
   */
  quantize(bpm) {
    for (let note of this.notes) {
      note.quantize(bpm)
    }
    return this
  }

  /**
   * Set the point at which the phrase should start in the score.
   */
  startAt(time) {
    this.start = time
    return this
  }

  /**
   * Repeat the phrase a given a number of times.
   */
  repeat(num) {
    this.repeats = num
    return this
  }

  /**
   * Raise or lower the pitches of the phrase by a given interval.
   */
  transpose(num) {
    this.notes = this.notes.map(n => n.transpose(num))
    return this
  }
}
