export default () => {
  let middleware = []

  const use = (name, ...fns) => {
    if (middleware[name]) {
      middleware[name].push(...fns)
    } else {
      middleware[name] = fns
    }
  }

  const handle = (state, stack, callback) => {
    let idx = 0

    const next = err => {
      // Error
      if (err != null) {
        return setImmediate(() => callback(err))
      }

      // Complete
      if (idx >= stack.length) {
        return setImmediate(() => handle(state, stack, callback))
      }

      // Next
      let layer = stack[idx++]
      setImmediate(() => {
        try {
          layer(state, next)
        } catch (error) {
          next(error)
        }
      })
    }

    next()
  }

  const play = (bpm = 60.0) => {
    let state = {}

    for (let [name, stack] of Object.entries(middleware)) {
      state[name] = { tick: 0 }

      handle(state[name], stack, err => {
        if (err) {
          console.log('error!', err)
        } else {
          console.log('done', state)
        }
      })
    }
  }

  return {
    use,
    play,
  }
}
