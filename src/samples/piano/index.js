import { sampleMap } from '../../sample-map'
import { pitches as p } from '../../constants'

export const piano = sampleMap(
  (note, octave) => {
    const baseUrl = 'http://localhost:3001' // TODO: set via ENV
    return `${baseUrl}/samples/piano/files/${note}${octave}.mp3`
  },
  [
    p.a0,
    p.a2,
    p.a3,
    p.a4,
    p.a5,
    p.a6,
    p.a7,
    p.cs1,
    p.cs2,
    p.cs3,
    p.cs4,
    p.cs5,
    p.cs6,
    p.cs7,
    p.c8,
    p.f1,
    p.f2,
    p.f3,
    p.f4,
    p.f5,
    p.f6,
    p.f7
  ],
  p.a0,
  p.c8
)
