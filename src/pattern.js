import {
  take as _take,
  shuffle as _shuffle,
  range as _range,
  head,
  tail,
  sample,
  cloneDeep,
} from 'lodash'
import { pitches, durations, velocities } from './constants'

export const loop = notes => {
  const r = ring(notes)

  return (state, next) => {
    state['note'] = r(state.tick)
    state.tick++
    next()
  }
}

export const ring = arr => {
  const len = arr.length

  return idx => {
    return arr[idx % len]
  }
}

export const range = (start = 0, end, step = 1) => {
  return _range(start, end + 1, step)
}

export const transpose = (arr, n) => {
  return arr.map(e => {
    const h = head(e) + n
    return [h, ...tail(e)]
  })
}

export const repeat = (arr, n) => {
  if (n < 2) {
    return arr
  } else {
    return Array(n)
      .fill(arr)
      .flat(1)
  }
}

export const reverse = arr => {
  return cloneDeep(arr).reverse()
}

export const randomize = arr => {
  return arr.map(n => {
    return [sample(pitches), sample(durations), sample(velocities)]
  })
}

export const shuffle = arr => {
  return _shuffle(arr)
}

export const take = (arr, n) => {
  return _take(arr, n)
}

export const quantize = (arr, bpm) => {
  const bps = 60.0 / bpm

  return cloneDeep(arr).map(n => {
    n[1] = n[1] * bps
    return n
  })
}
