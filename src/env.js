import _ from 'lodash'

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
    const input = _.first(nodes)
    const output = nodes.pop()
    nodes.forEach((node, index) => {
      if (node === _.last(nodes)) {
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
    bus,
  }
}
