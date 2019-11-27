// TODO: memoize so it always returns the same AudioContext.
export const context = () => {
  return new window.AudioContext()
}
