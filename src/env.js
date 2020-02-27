import { memoize, first, last } from 'lodash'

export const createEnv = () => {
  const context = new window.AudioContext()
  let _input = context.destination

  const clock = () => {
    const latency = 0.02
    let now = context.currentTime
    return (time = context.currentTime) => {
      if (time - now > latency) {
        now = time
      }
      return now
    }
  }

  const connect = (...nodes) => {
    const input = first(nodes)
    const output = nodes.pop()
    nodes.forEach((node, index) => {
      if (node === last(nodes)) {
        node.connect(output)
      } else {
        node.connect(nodes[index + 1])
      }
    })
    _input = input
    return input
  }

  const bus = () => {
    return _input
  }

  return {
    context,
    connect,
    now: clock(),
    master: context.destination,
    bus
  }
}

// export const context = memoize(() => {
//   return new window.AudioContext()
// })

// export const clock = context => {
//   const latency = 0.02
//   let now = context.currentTime

//   return (time = context.currentTime) => {
//     if (time - now > latency) {
//       now = time
//     }
//     return now
//   }
// }

// export const master = context => {
//   return context.destination
// }
