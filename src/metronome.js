import * as env from './env'

class Metronome {
  constructor(bpm = 60, end = Infinity) {
    this.context = env.context()
    this.bpm = bpm
    this.end = end
    this.osc = null

    this.callbacks = {
      tick: () => null,
      'tick/1': () => null,
      'tick/2': () => null,
      'tick/4': () => null,
      'tick/8': () => null,
      'tick/16': () => null,
      'tick/32': () => null,
      'tick/64': () => null
    }
  }

  tick(currentTick = 0) {
    const secondsPerBeat = 60.0 / this.bpm
    const beatsPerBar = 4
    const wholeNote = secondsPerBeat * beatsPerBar
    const resolution = wholeNote / 64 // 1/64 = max resolution
    const now = this.context.currentTime

    if (currentTick < this.end) {
      // osc can only be used once, so we create a new one for each tick.
      this.osc = this.context.createOscillator()
      this.osc.onended = () => {
        currentTick += 1
        this.dispatch(currentTick)
        this.tick(currentTick)
      }
      this.osc.start(now)
      this.osc.stop(now + resolution)
    }
  }

  start(at = 0) {
    this.tick(at)
    return this
  }

  stop() {
    this.osc = null
    return this
  }

  dispatch(tick) {
    // 64 ticks = 1 whole note
    if (tick % 64 === 0) {
      this.callbacks['tick/1'](tick / 64)
    }

    // 32 ticks = 1 half note
    if (tick % 32 === 0) {
      this.callbacks['tick/2'](tick / 32)
    }

    // 16 ticks = 1 quarter note
    if (tick % 16 === 0) {
      this.callbacks['tick'](tick / 16)
      this.callbacks['tick/4'](tick / 16)
    }

    // 8 ticks = 1 eighth note
    if (tick % 8 === 0) {
      this.callbacks['tick/8'](tick / 8)
    }

    // 4 ticks = 1 sixteenth note
    if (tick % 4 === 0) {
      this.callbacks['tick/16'](tick / 4)
    }

    // 2 ticks = 1 thirtysecond note
    if (tick % 2 === 0) {
      this.callbacks['tick/32'](tick / 2)
    }

    // 1 tick = 1 sixtyfourth note
    if (tick % 1 === 0) {
      this.callbacks['tick/64'](tick / 1)
    }
  }

  on(event, fn) {
    this.callbacks[event] = fn
    return this
  }
}

export const metronome = opts => {
  const { bpm, end } = opts
  return new Metronome(bpm, end)
}

export const click = tick => {
  const context = env.context()
  const now = context.currentTime
  const end = now + 1 / 16
  const osc = context.createOscillator()
  const gain = context.createGain()

  osc.connect(gain)
  gain.connect(context.destination)

  osc.frequency.value = 1200
  if (tick % 4 === 0) {
    osc.frequency.value = 1600
  }

  osc.start(now)
  gain.gain.exponentialRampToValueAtTime(0.01, end)
  osc.stop(end)
}
