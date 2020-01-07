import env from './env'
import samples from './samples'

export default async (name = 'flat') => {
  const context = env.context
  console.log(samples.reverbs, name)
  const impulse = samples.reverbs[name]
  const res = await window.fetch(impulse)
  const arrayBuffer = await res.arrayBuffer()
  const buffer = await context.decodeAudioData(arrayBuffer)
  const node = context.createConvolver()
  node.buffer = buffer
  node.normalize = false

  return (state, next) => {
    node.connect(state.output)
    state.output = node
    next()
  }
}
