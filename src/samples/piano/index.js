import { sampleMap } from '../../sample-map'
import { enharmonic } from '../../music'

export const piano = sampleMap((note, octave) => {
  const baseUrl = 'http://localhost:3001'
  const noteName = enharmonic(note).toLowerCase()

  return `${baseUrl}/samples/piano/files/piano-loud-${noteName}${octave}.wav`
})
