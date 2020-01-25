export default () => {
  let listeners = {}

  const on = (event, callback) => {
    listeners[event] = callback
  }

  const tick = beat => {
    for (const [event, callback] of Object.entries(listeners)) {
      callback(beat)
    }
  }

  const start = beat => {
    tick(beat)
  }

  const stop = () => {
    // noop
  }

  return { on, tick, start, stop }
}
