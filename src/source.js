export class Source {
  constructor(context, options = {}) {
    const { buffer, start, stop, onended, output } = options
    this.context = context
    this.buffer = buffer
    this.onended = onended
    this.output = output
    this.node = this.createNode()
    this.start(start)
    this.stop(stop)
  }

  createNode() {
    const node = this.context.createBufferSource()
    node.buffer = this.buffer
    node.onended = this.onended
    node.connect(this.output)
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
