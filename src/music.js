import { round } from 'lodash'

export const pitchSplit = pitch => {
  const re = /(\w(?:\w|\W)?)(\d{1})/
  const m = re.exec(pitch)
  return [m[1], m[2]]
}

export const pitchNote = pitch => {
  return pitchSplit(pitch)[0]
}

export const pitchOctave = pitch => {
  return pitchSplit(pitch)[1]
}

export const pitchToMidi = pitch => {
  const [note, octave] = pitchSplit(pitch)
  const notes = {
    C: 0,
    'C#': 1,
    Db: 1,
    D: 2,
    'D#': 3,
    Eb: 3,
    E: 4,
    F: 5,
    'F#': 6,
    Gb: 6,
    G: 7,
    'G#': 8,
    Ab: 8,
    A: 9,
    'A#': 10,
    Bb: 10,
    B: 11
  }
  return notes[note] + 12 + 12 * octave
}

export const midiToPitch = midi => {
  const numbers = {
    0: 'C',
    1: 'C#',
    2: 'D',
    3: 'D#',
    4: 'E',
    5: 'F',
    6: 'F#',
    7: 'G',
    8: 'G#',
    9: 'A',
    10: 'A#',
    11: 'B'
  }

  // Normalize the note number so it maps to our 0-indexed `numbers` map
  const norm = midi - 12

  // Dividing the note number by 12 (the number of notes in an octave) gives us
  // the octave that the note falls into.
  const octave = Math.floor(norm / 12)

  // Remove the octaves to get a valid index into our numbers map
  const note = norm - 12 * octave

  return numbers[note]
    .split('/')
    .map(name => name + octave)
    .join('/')
}

export const pitchToPath = pitch => {
  return pitch.replace('#', 's').toLowerCase()
}

export const midiToFrequency = midi => {
  const A4 = 440
  return round(A4 * Math.pow(2, (midi - 69) / 12), 2)
}

// Shamelessly stolen from Tone.js
export const intervalToFrequencyRatio = interval => {
  return Math.pow(2, interval / 12)
}

export const enharmonic = note => {
  switch (note) {
    case 'A#':
      return 'Bb'
    case 'Bb':
      return 'A#'
    case 'C#':
      return 'Db'
    case 'Db':
      return 'C#'
    case 'D#':
      return 'Eb'
    case 'Eb':
      return 'D#'
    case 'F#':
      return 'Gb'
    case 'Gb':
      return 'F#'
    case 'G#':
      return 'Ab'
    case 'Ab':
      return 'G#'
    default:
      return note
  }
}
