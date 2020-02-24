import { memoize, last } from 'lodash'

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
  const input = nodes[0]
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

// export default {
//   output: null,
//   currentTime: 0,

//   // TODO: Does this get re-evaluated each time it's imported?
//   context: (() => {
//     return new window.AudioContext()
//   })(),

//   // chain(node) {
//   //   this.connect(node)
//   //   this.output = node
//   // },

//   connect(node) {
//     if (!this.output) {
//       this.output = this.context.destination
//     }
//     node.connect(this.output)
//     if (node.chainable) {
//       this.output = node
//     }
//   },

//   now(time = this.context.currentTime) {
//     const latency = 0.02
//     if (!this.currentTime) {
//       this.currentTime = time
//     } else if (time - this.currentTime > latency) {
//       this.currentTime = time
//     }
//     return this.currentTime
//   }
// }
