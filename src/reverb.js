import { samples } from './samples'

export class Reverb {
  constructor(context, output, options = {}) {
    const { impulse } = Object.assign(this.defaults, options)
    this.context = context
    this.output = output
    this.impulse = samples.reverbs[impulse]
    this.node = this.createNode()
  }

  get defaults() {
    return {
      impulse: 'flat'
    }
  }

  async load() {
    const res = await fetch(this.impulse)
    const arrayBuffer = await res.arrayBuffer()
    const buffer = await this.context.decodeAudioData(arrayBuffer)
    this.node.buffer = buffer
    return this
  }

  createNode() {
    const node = this.context.createConvolver()
    node.normalize = false
    node.connect(this.output)
    return node
  }
}
