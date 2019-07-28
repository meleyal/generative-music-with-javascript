import { sampler } from './sampler'

class ScorePlayer {
  constructor(score) {
    this.score = score
    this.parts = []
  }

  async loadInstruments() {
    for (let part of this.score.parts) {
      part.instrument = await sampler(part.instrument)
      this.parts.push(new PartPlayer(part))
    }
  }

  async play() {
    await this.loadInstruments()
    for (let part of this.parts) {
      part.play()
    }
  }
}

class PartPlayer {
  constructor(part) {
    this.part = part
    this.phrases = []
    this.currentPhrase = 0

    for (let phrase of part.phrases) {
      this.phrases.push(new PhrasePlayer(phrase, part.instrument))
    }
  }

  play() {
    this.phrases[this.currentPhrase].play()
  }
}

class PhrasePlayer {
  constructor(phrase, instrument) {
    this.phrase = phrase
    this.instrument = instrument
    this.currentTick = 0
    this.currentNote = 0
    this.repetitions = 0
  }

  play() {
    this.tick()
  }

  tick(tick) {
    const phrase = this.phrase
    const length = phrase.pitches.length
    const pitch = phrase.pitches[this.currentNote]
    const duration = phrase.durations[this.currentNote]
    const start = phrase.start

    if (this.repetitions == phrase.repetitions) {
      return
    }

    if (this.currentTick >= start) {
      this.instrument(pitch, { duration }, () => {
        this.currentNote += 1
        this.currentTick += 1

        if (this.currentNote == length) {
          this.repetitions += 1
          this.currentNote = 0
        }

        this.tick(this.currentTick)
      })
    } else {
      this.instrument(null, { duration }, () => {
        this.currentTick += 1
        this.tick(this.currentTick)
      })
    }
  }
}

export const play = score => {
  const player = new ScorePlayer(score)
  player.play()
}
