export class Gain {
  constructor(context, output, options = {}) {
    const { volume, stop } = Object.assign(this.defaults, options)
    this.context = context
    this.output = output
    this.volume = volume
    this.node = this.createNode()
    this.stop(stop)
  }

  get defaults() {
    return {
      volume: 1
    }
  }

  createNode() {
    const node = this.context.createGain()
    node.gain.value = this.volume
    node.connect(this.output)
    return node
  }

  stop(time) {
    this.node.gain.linearRampToValueAtTime(0, time)
    return this
  }
}
