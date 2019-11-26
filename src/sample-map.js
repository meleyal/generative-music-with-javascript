import { closest, includes, map, range } from './array'
import { pitches } from './constants'
import {
  intervalToFrequencyRatio,
  midiToPitch,
  pitchSplit,
  pitchToMidi,
  pitchToPath
} from './music'

const { A0, G8 } = pitches

export const sampleMap = (
  pathResolver,
  pitchesWithSamples,
  start = A0,
  end = G8
) => {
  const midiSamples = map(pitchesWithSamples, pitchToMidi)

  return Object.assign(
    ...map(range(start, end + 1), midi => {
      let pitch = midiToPitch(midi)
      let distance = 0
      let path
      let nearest

      if (includes(midiSamples, midi)) {
        path = pathResolver(...pitchSplit(pitch))
      } else {
        nearest = closest(midiSamples, midi)
        distance = midi - nearest
        path = pathResolver(...pitchSplit(midiToPitch(nearest)))
      }

      return {
        [pitch]: {
          path: pitchToPath(path),
          playbackRate: intervalToFrequencyRatio(distance)
        }
      }
    })
  )
}
