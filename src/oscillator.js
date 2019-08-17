export class Oscillator {
  constructor(context, options = {}) {
    const { start, stop, onended } = options
    this.context = context
    this.onended = onended
    this.node = this.createNode()
    this.start(start)
    this.stop(stop)
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
