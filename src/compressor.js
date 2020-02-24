export default (
  context,
  threshold = -50,
  knee = 40,
  ratio = 12,
  attack = 0,
  release = 0.25
) => {
  const node = context.createDynamicsCompressor()
  node.threshold.value = threshold
  node.knee.value = knee
  node.ratio.value = ratio
  node.attack.value = attack
  node.release.value = release
  return node
}
