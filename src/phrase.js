import { Note } from './note'
import { cloneDeep } from 'lodash'

export class Phrase {
  constructor() {
    this.part = null
    this.notes = []
    this.start = 0.0
    this.repeats = 0
    this.currentTick = 0
    this.currentNote = 0
    this.playCount = 0
  }

  add(pitches, durations) {
    if (pitches.length !== durations.length) {
      throw 'pitch and duration lists must be same length'
    }
    const newNotes = pitches.map((p, idx) => new Note(p, durations[idx]))
    this.notes = this.notes.concat(newNotes)
    return this
  }

  play() {
    this.tick()
    return this
  }

  tick(tick) {
    if (this.playCount > this.repeats) {
      return
    }

    const note = this.notes[this.currentNote]
    const now = this.part.score.now()

    if (this.currentTick >= this.start) {
      this.part.instrument.play(
        note.pitch,
        { offset: now, duration: note.duration },
        () => {
          this.currentNote += 1
          this.currentTick += 1

          if (this.currentNote === this.notes.length) {
            this.playCount += 1
            this.currentNote = 0
          }

          this.tick(this.currentTick)
        }
      )
    } else {
      this.part.instrument.play(
        null,
        { offset: now, duration: note.duration },
        () => {
          this.currentTick += 1
          this.tick(this.currentTick)
        }
      )
    }
  }

  copy() {
    const phrase = new Phrase()
    phrase.notes = cloneDeep(this.notes)
    return phrase
  }

  quantize(bpm) {
    for (let note of this.notes) {
      note.quantize(bpm)
    }
    return this
  }

  startAt(time) {
    this.start = time
    return this
  }

  repeat(num) {
    this.repeats = num
    return this
  }

  transpose(num) {
    this.notes = this.notes.map(n => n.transpose(num))
    return this
  }
}
