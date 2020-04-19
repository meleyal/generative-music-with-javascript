import _range from 'lodash.range'
import _take from 'lodash.take'
import _shuffle from 'lodash.shuffle'
import head from 'lodash.head'
import tail from 'lodash.tail'
import sample from 'lodash.sample'
import cloneDeep from 'lodash.clonedeep'

import { pitches, durations, velocities } from './constants'

export const loop = (notes) => {
  const r = ring(notes)

  return (state, next) => {
    state['note'] = r(state.tick)
    state.tick++
    next()
  }
}

export const ring = (arr) => {
  const len = arr.length

  return (idx) => {
    return arr[idx % len]
  }
}

export const range = (start = 0, end, step = 1) => {
  return _range(start, end + 1, step)
}

export const transpose = (arr, n) => {
  return arr.map((e) => {
    const h = head(e) + n
    return [h, ...tail(e)]
  })
}

export const repeat = (arr, n) => {
  if (n < 2) {
    return arr
  } else {
    return Array(n).fill(arr).flat(1)
  }
}

export const reverse = (arr) => {
  return cloneDeep(arr).reverse()
}

export const randomize = (arr) => {
  return arr.map((n) => {
    return [sample(pitches), sample(durations), sample(velocities)]
  })
}

export const shuffle = (arr) => {
  return _shuffle(arr)
}

export const take = (arr, n) => {
  return _take(arr, n)
}

export const quantize = (arr, bpm) => {
  const bps = bpm / 60.0

  return arr.map((n) => {
    return [n[0], n[1] / bps]
  })
}
