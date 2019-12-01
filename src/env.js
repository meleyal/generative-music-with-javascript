import { memoize } from 'lodash'

/**
 * Create and cache the global AudioContext so we always use the same one.
 */

export const context = memoize(() => {
  return new window.AudioContext()
})

/**
 * Normalize now so events within latency return same timestamp.
 */

export const now = (() => {
  const latency = 0.02
  let currentTime

  return (time = context().currentTime) => {
    if (!currentTime) {
      currentTime = time
    } else if (time - currentTime > latency) {
      currentTime = time
    }
    return currentTime
  }
})()
