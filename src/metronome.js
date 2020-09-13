export default (env) => ({ bpm = 120 } = {}) => {
  const { context } = env

  const ppq = 192 // pulses per quarter note
  const bps = bpm / 60
  const freq = (1 / ppq) * bps
  const startTime = context.currentTime

  console.log('startTime', startTime)

  const callbacks = {}

  const tick = () => {
    const now = context.currentTime - startTime
    const osc = context.createOscillator()

    const end = now + freq
    osc.start(now)

    for (const [event, fn] of Object.entries(callbacks)) {
      fn(now)
    }
    osc.stop(end)

    osc.onended = () => {
      tick()
    }
  }

  const on = (event, fn) => {
    callbacks[event] = fn
  }

  return { start: tick, on }
}
