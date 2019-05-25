export const noteNumber = name => {
  const re = /(?<note>\w(\w|\W)?)(?<octave>\d{1})/u
  const {
    groups: { note, octave }
  } = re.exec(name)

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

export const noteName = num => {
  // const numbers = {
  //   0: 'C',
  //   1: 'C#/Db',
  //   2: 'D',
  //   3: 'D#/Eb',
  //   4: 'E',
  //   5: 'F',
  //   6: 'F#/Gb',
  //   7: 'G',
  //   8: 'G#/Ab',
  //   9: 'A',
  //   10: 'A#/Bb',
  //   11: 'B'
  // }

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
  const norm = num - 12

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

// import {
//   range,
//   filter,
//   chunk,
//   map,
//   flow,
//   indexOf,
//   includes,
//   flatten
// } from 'lodash/fp'
//
// const scales = {
//   cmaj: [0, 2, 4, 5, 7, 9, 11]
// }
//
// export const limit = instrument => {
//   let min, max
//
//   switch (instrument) {
//     case 'piano':
//       min = 21
//       max = 109
//       break
//     default:
//       min = 0
//       max = 127
//   }
//
//   return notes => {
//     return filter(n => {
//       return n >= min && n <= max
//     })(notes)
//   }
// }
//
// const octaves = notes => {
//   return chunk(12)(notes)
// }
//
// export const scale = scale => {
//   // const notes = range(24, 108)
//   const notes = range(0, 200)
//   const scaleNotes = flow(
//     octaves,
//     map(o => {
//       // select only the notes in the scale
//       return filter(n => {
//         const idx = indexOf(n, o)
//         return includes(idx, scales[scale])
//       })(o)
//     }),
//     flatten
//   )(notes)
//
//   return arr => {
//     return scaleNotes
//   }
// }
