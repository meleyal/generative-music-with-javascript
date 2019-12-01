import { sampleMap } from '../../sample-map'
import { downcase } from '../../string'

// TODO: Use constants for notes
// TODO: Make baseUrl configurable
export const piano = sampleMap(
  (note, octave) => {
    const baseUrl = 'http://localhost:3001'
    const noteName = downcase(note)
    return `${baseUrl}/samples/piano/files/${noteName}${octave}.mp3`
  },
  [
    'A0',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'C#1',
    'C#2',
    'C#3',
    'C#4',
    'C#5',
    'C#6',
    'C#7',
    'C8',
    'F1',
    'F2',
    'F3',
    'F4',
    'F5',
    'F6',
    'F7'
  ],
  21,
  108
)
