export class Compressor {
  constructor(context, options = {}) {
    const { output, threshold, knee, ratio, attack, release } = Object.assign(
      this.defaults,
      options
    )
    this.context = context
    this.output = output
    this.threshold = threshold
    this.knee = knee
    this.ratio = ratio
    this.attack = attack
    this.release = release
    this.node = this.createNode()
  }

  get defaults() {
    return {
      threshold: -50,
      knee: 40,
      ratio: 12,
      attack: 0,
      release: 0.25,
      output: null
    }
  }

  createNode() {
    const node = this.context.createDynamicsCompressor()
    node.threshold.value = this.threshold
    node.knee.value = this.knee
    node.ratio.value = this.ratio
    node.attack.value = this.attack
    node.release.value = this.release
    node.connect(this.output)
    return node
  }
}
