import { memoize, first, last } from 'lodash'

export const context = memoize(() => {
  return new window.AudioContext()
})

export const clock = context => {
  const latency = 0.02
  let now = context.currentTime

  return (time = context.currentTime) => {
    if (time - now > latency) {
      now = time
    }
    return now
  }
}

export const connect = (...nodes) => {
  const input = first(nodes)
  const output = nodes.pop()

  nodes.forEach((node, index) => {
    if (node === last(nodes)) {
      node.connect(output)
    } else {
      node.connect(nodes[index + 1])
    }
  })

  return input
}

export const master = context => {
  return context.destination
}
