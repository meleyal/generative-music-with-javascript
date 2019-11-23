import { range } from 'lodash'
import { closest } from './array'
import {
  toPitch,
  toMidi,
  toPath,
  pitchSplit,
  mtof,
  intervalToFrequencyRatio
} from './music'

export const sampleMap = (pathFn, pitches, start = 21, end = 127) => {
  const available = pitches.map(toMidi).sort((a, b) => a - b)

  return range(start, end + 1)
    .map(n => {
      let pitch = toPitch(n)
      let distance = 0
      let path
      let nearest

      if (available.includes(n)) {
        path = pathFn(...pitchSplit(pitch))
      } else {
        nearest = closest(available, n)
        distance = nearest - n
        path = pathFn(...pitchSplit(toPitch(nearest)))
      }

      return {
        [pitch]: {
          path: toPath(path),
          distance,
          frequency: mtof(n),
          playbackRate: intervalToFrequencyRatio(distance)
        }
      }
    })
    .reduce((a, b) => {
      return Object.assign(a, b, {})
    })
}
