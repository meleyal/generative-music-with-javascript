import samples from './samples'

export default (env) => async (name = 'flat') => {
  const impulse = samples.reverbs[name]
  const sample = await window.fetch(impulse)
  const arrayBuffer = await sample.arrayBuffer()
  const buffer = await env.context.decodeAudioData(arrayBuffer)
  const node = env.context.createConvolver()
  node.buffer = buffer
  node.normalize = false
  return node
}
