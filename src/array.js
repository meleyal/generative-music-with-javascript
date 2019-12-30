import { range as _range } from 'lodash'

export const closest = (arr, n) => {
  return arr.reduce((prev, curr) => {
    return Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev
  })
}

export const range = (start = 0, end, step = 1) => {
  return _range(start, end + 1, step)
}
