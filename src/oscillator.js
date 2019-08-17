export class Oscillator {
  constructor(context, options = {}) {
    const { onended } = options
    this.context = context
    this.onended = onended
    this.node = this.createNode()
  }

  createNode() {
    const node = this.context.createOscillator()
    node.onended = this.onended
    return node
  }

  start(time) {
    this.node.start(time)
    return this
  }

  stop(time) {
    this.node.stop(time)
    return this
  }
}
