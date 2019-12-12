import { Note } from './note'
import { pitches, durations, velocities } from './constants'
import { take, reverse, shuffle, sample, cloneDeep, unzip } from 'lodash'

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

  get score() {
    return this.part.score
  }

  get instrument() {
    return this.part.instrument
  }

  // TODO: Enable passing in unnested arrays
  add(notes) {
    const flattend = notes.flat(1)
    const [pitches, durations] = unzip(flattend)
    if (pitches.length !== durations.length) {
      throw new TypeError('pitch and duration lists must be same length')
    }
    const newNotes = pitches.map((p, idx) => new Note(p, durations[idx]))
    this.notes = this.notes.concat(newNotes)
    return this
  }

  play() {
    this.tick()
    return this
  }

  tick() {
    if (this.playCount > this.repeats) {
      return
    }

    const note = this.notes[this.currentNote]
    const now = this.score.now()

    if (this.currentTick >= this.start) {
      this.instrument.play(note, now, () => {
        this.currentNote += 1
        this.currentTick += 1

        if (this.currentNote === this.notes.length) {
          this.playCount += 1
          this.currentNote = 0
        }

        this.tick()
      })
    } else {
      const rest = new Note(pitches.rest, note.duration)

      this.instrument.play(rest, now, () => {
        this.currentTick += 1
        this.tick()
      })
    }
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

  repeat(n) {
    this.repeats = n
    return this
  }

  copy() {
    const phrase = new Phrase()
    phrase.notes = cloneDeep(this.notes)
    return phrase
  }

  take(n) {
    const phrase = this.copy()
    phrase.notes = take(phrase.notes, n)
    return phrase
  }

  reverse() {
    const phrase = this.copy()
    phrase.notes = reverse(phrase.notes)
    return phrase
  }

  shuffle() {
    const phrase = this.copy()
    phrase.notes = shuffle(phrase.notes)
    return phrase
  }

  randomize() {
    const phrase = this.copy()
    phrase.notes = phrase.notes.map(n => {
      return new Note(sample(pitches), sample(durations), sample(velocities))
    })
    return phrase
  }

  transpose(num) {
    const phrase = this.copy()
    phrase.notes = phrase.notes.map(n => n.transpose(num))
    return phrase
  }
}

export default () => {
  return new Phrase()
}
