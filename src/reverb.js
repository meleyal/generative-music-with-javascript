import { samples } from './samples'

export const reverb = async (context, options) => {
  const defaults = {
    impulse: samples.reverbs['bottle-hall'],
    output: null
  }
  const { impulse, output } = Object.assign(defaults, options)
  const res = await fetch(impulse)
  const arrayBuffer = await res.arrayBuffer()
  const buffer = await context.decodeAudioData(arrayBuffer)
  const node = context.createConvolver()
  node.normalize = false
  node.buffer = buffer
  node.connect(output)
  return node
}
