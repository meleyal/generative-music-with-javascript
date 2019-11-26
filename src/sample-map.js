import { range } from 'lodash'
import { closest } from './array'
import { pitches } from './constants'
import { intervalToFrequencyRatio, midiToPitch, pitchSplit } from './music'

const { a0, g8 } = pitches

export const sampleMap = (
  pathResolver,
  midisWithSamples,
  start = a0,
  end = g8
) => {
  return Object.assign(
    ...range(start, end + 1).map(midi => {
      let pitch = midiToPitch(midi)
      let distance = 0
      let path
      let nearest

      if (midisWithSamples.includes(midi)) {
        path = pathResolver(...pitchSplit(pitch))
      } else {
        nearest = closest(midisWithSamples, midi)
        distance = midi - nearest
        path = pathResolver(...pitchSplit(midiToPitch(nearest)))
      }

      return {
        [pitch]: {
          path,
          playbackRate: intervalToFrequencyRatio(distance)
        }
      }
    })
  )
}
