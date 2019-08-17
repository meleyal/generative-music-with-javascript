export class Gain {
  constructor(context, options = {}) {
    const { volume, output } = Object.assign(this.defaults, options)
    this.context = context
    this.volume = volume
    this.output = output
    this.node = this.createNode()
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

  ramp(value, time) {
    this.node.gain.linearRampToValueAtTime(value, time)
    return this
  }
}
