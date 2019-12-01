import { noop } from 'lodash'

export default class Metronome {
  constructor(context, bpm = 60.0) {
    this.context = context
    this.bpm = bpm
    this.beatNumber = 0
    this.nextBeatTime = 0.0
    this.lookahead = 0.1
    this.callbacks = {}
  }

  start() {
    this.nextBeatTime = this.context.currentTime
    this.scheduler()
    return this
  }

  scheduler() {
    const secondsPerBeat = 60.0 / this.bpm / 128
    // console.log('secondsPerBeat', secondsPerBeat)

    while (this.nextBeatTime < this.context.currentTime + this.lookahead) {
      // this.beep(this.beatNumber, this.nextBeatTime)
      this.dispatch(this.beatNumber, this.nextBeatTime)
      this.nextBeatTime += secondsPerBeat
      this.beatNumber += 1
    }

    setTimeout(this.scheduler.bind(this), 0.25)
  }

  on(event, fn) {
    this.callbacks[event] = fn
    return this
  }

  dispatch(beatNumber, time) {
    ;(this.callbacks['tick'] || noop)(beatNumber, time)
  }

  beep(beat, time) {
    const beepLength = 0.05 // sec

    const osc = this.context.createOscillator()
    osc.connect(this.context.destination)

    if (beat % 16 === 0) {
      osc.frequency.value = 880.0 // beat 0 == low pitch
      // console.log('beep:start')
    } else if (beat % 4 === 0) {
      osc.frequency.value = 440.0 // quarter notes = medium pitch
      // console.log('beep:bar')
    } else {
      osc.frequency.value = 220.0 // other 16th notes = high pitch
      // console.log('beep:beat')
    }

    osc.start(time)
    osc.stop(time + beepLength)
  }
}

export const metronome = (context, bpm) => {
  return new Metronome(context, bpm)
}
