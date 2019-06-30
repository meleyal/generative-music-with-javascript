import * as env from './env'

export const metronome = (bpm = 60) => {
  const context = env.context()
  const secondsPerBeat = 60.0 / bpm
  const beatsPerBar = 4
  const wholeNote = secondsPerBeat * beatsPerBar
  const sixtyFourthNote = wholeNote / 64 // maximum resolution

  const callbacks = {
    tick: () => null,
    'tick/4': () => null,
    'tick/8': () => null,
    'tick/16': () => null,
    'tick/32': () => null,
    'tick/64': () => null
  }

  let osc

  const tick = (currentTick = 0) => {
    const resolution = sixtyFourthNote
    const now = context.currentTime

    // osc can only be used once, so we create a new one for each tick.
    osc = context.createOscillator()
    osc.onended = () => tick((currentTick += 1))
    osc.start()
    osc.stop(now + resolution)

    if (currentTick % 1 === 0) {
      callbacks['tick/64'](currentTick / 64)
    }
    if (currentTick % 2 === 0) {
      callbacks['tick/32'](currentTick / 32)
    }
    if (currentTick % 4 === 0) {
      callbacks['tick/16'](currentTick / 16)
    }
    if (currentTick % 8 === 0) {
      callbacks['tick/8'](currentTick / 8)
    }
    if (currentTick % 16 === 0) {
      callbacks['tick/4'](currentTick / 4)
      callbacks['tick'](currentTick / 4)
    }
  }

  const stop = () => {
    osc.onended = null
  }

  const on = (event, fn) => {
    callbacks[event] = fn
    return { on, start: tick, stop } // support chaining
  }

  return { on, start: tick, stop }
}
