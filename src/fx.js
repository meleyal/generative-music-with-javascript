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

export const compressor = (context, options) => {
  const defaults = {
    threshold: -50,
    knee: 40,
    ratio: 12,
    attack: 0,
    release: 0.25,
    output: null
  }
  const { threshold, knee, ratio, attack, release, output } = Object.assign(
    defaults,
    options
  )
  const node = context.createDynamicsCompressor()
  node.threshold.value = threshold
  node.knee.value = knee
  node.ratio.value = ratio
  node.attack.value = attack
  node.release.value = release
  node.connect(output)
  return node
}
