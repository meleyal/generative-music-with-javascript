import { range as _range } from 'lodash'

/**
 * Find the closest number to n
 */
export const closest = (arr, n) => {
  return arr.reduce((prev, curr) => {
    return Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev
  })
}

/**
 * Inclusive range, like (start..end) in Ruby
 */
export const range = (start = 0, end, step = 1) => {
  return _range(start, end + 1, step)
}
