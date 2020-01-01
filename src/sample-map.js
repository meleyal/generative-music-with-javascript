import { range } from './pattern'
import { closest } from './number'
import { pitches } from './constants'
import { intervalToFrequencyRatio, midiToPitch, pitchSplit } from './music'

const { a0, g8 } = pitches

class SampleMap {
  constructor(pathResolver, midiSamples, start = a0, end = g8) {
    this.pathResolver = pathResolver
    this.midiSamples = midiSamples
    this.start = start
    this.end = end
  }

  result() {
    const { pathResolver, midiSamples, start, end } = this

    return Object.assign(
      ...range(start, end).map(midi => {
        let pitch = midiToPitch(midi)
        let distance = 0
        let path
        let nearest

        if (midiSamples.includes(midi)) {
          path = pathResolver(...pitchSplit(pitch))
        } else {
          nearest = closest(midiSamples, midi)
          distance = midi - nearest
          path = pathResolver(...pitchSplit(midiToPitch(nearest)))
        }

        return {
          [pitch]: {
            path: path,
            playbackRate: intervalToFrequencyRatio(distance),
          },
        }
      })
    )
  }
}

export const sampleMap = (pathResolver, midiSamples, start = a0, end = g8) => {
  const m = new SampleMap(pathResolver, midiSamples, start, end)
  return m.result()
}
