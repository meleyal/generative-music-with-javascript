export class Gain {
  constructor(context, options = {}) {
    const { volume, stop, output } = Object.assign(this.defaults, options)
    this.context = context
    this.volume = volume
    this.output = output
    this.node = this.createNode()
    this.stop(stop)
  }

  get defaults() {
    return {
      volume: 1,
      output: null
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
