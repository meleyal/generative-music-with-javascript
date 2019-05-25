import { random } from './number.js'
import chain from '../node_modules/lodash-es/chain.js'

export const ring = arr => {
  const len = arr.length

  return index => {
    if (typeof index !== 'undefined') {
      return arr[index % len]
    } else {
      return arr
    }
  }
}

// export const reverse = arr => [...arr].reverse()
//
// // TODO: Handle positive and negative steps > 1
// export const nudge = (arr, step = 1) => {
//   const _arr = [...arr]
//   const last = _arr.pop()
//   _arr.unshift(last)
//   return _arr
// }
//
// // TODO
// export const shuffle = arr => {
//   var index = -1,
//     result = [...arr],
//     length = result.length,
//     lastIndex = length - 1
//
//   while (++index < length) {
//     var rand = random(index, lastIndex)
//     result[index] = result[rand]
//   }
//
//   return result
// }
//
// export const transpose = (arr, step = 1) => {
//   return arr.map(n => n + step)
// }
//
// export const swap = arr => {
//   const a = arr.filter((n, idx) => idx % 2 == 0)
//   const b = arr.filter((n, idx) => idx % 2 == 1)
//   return a.map((n, idx) => [n, b[idx]].reverse())
// }
