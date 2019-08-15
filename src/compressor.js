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
