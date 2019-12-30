import { round, remap } from './number'
import { velocities } from './constants'

const { fff, silent } = velocities

export const pitchSplit = pitch => {
  const re = /(\w(?:\w|\W)?)(\d{1})/
  const m = re.exec(pitch)
  return [m[1], m[2]]
}

export const pitchToMidi = pitch => {
  const [note, octave] = pitchSplit(pitch)
  const notes = {
    c: 0,
    cs: 1,
    db: 1,
    d: 2,
    ds: 3,
    eb: 3,
    e: 4,
    f: 5,
    fs: 6,
    gb: 6,
    g: 7,
    gs: 8,
    ab: 8,
    a: 9,
    as: 10,
    bb: 10,
    b: 11,
  }
  return notes[note] + 12 + 12 * octave
}

export const midiToPitch = midi => {
  const numbers = {
    0: 'c',
    1: 'cs',
    2: 'd',
    3: 'ds',
    4: 'e',
    5: 'f',
    6: 'fs',
    7: 'g',
    8: 'gs',
    9: 'a',
    10: 'as',
    11: 'b',
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

// Shamelessly stolen from Tone.js
export const intervalToFrequencyRatio = interval => {
  return Math.pow(2, interval / 12)
}

export const volume = velocity => {
  return remap(velocity, silent, fff, 0, 1)
}
