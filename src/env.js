// TODO: memoize so it always returns the same AudioContext.
export const context = fn => {
  return fn(new AudioContext())
}
