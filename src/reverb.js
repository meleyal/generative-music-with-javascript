import samples from './samples'

export default async (name, context) => {
  const impulse = samples.reverbs[name]
  const res = await window.fetch(impulse)
  const arrayBuffer = await res.arrayBuffer()
  const buffer = await context.decodeAudioData(arrayBuffer)
  const node = context.createConvolver()
  node.buffer = buffer
  node.normalize = false
  return node
}
