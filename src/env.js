// TODO: memoize so it always returns the same AudioContext.
export const run = fn => {
  return fn(new AudioContext())
}
