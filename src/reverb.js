import samples from './samples'

export default async (env, name) => {
  const impulse = samples.reverbs[name]
  const res = await window.fetch(impulse)
  const arrayBuffer = await res.arrayBuffer()
  const buffer = await env.context.decodeAudioData(arrayBuffer)
  const node = env.context.createConvolver()
  node.buffer = buffer
  node.normalize = false
  return node
}
