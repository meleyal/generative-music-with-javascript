export class Source {
  constructor(context, output, options = {}) {
    const { buffer, start, stop, onended } = options
    this.context = context
    this.output = output
    this.buffer = buffer
    this.onended = onended
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
