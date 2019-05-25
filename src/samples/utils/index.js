// const baseUrl = 'http://localhost:8081/'
const baseUrl = 'https://unpkg.com/@meleyal/gen-samples/'

export const octaveNotes = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B'
]

export const sharpToFlat = note => {
  switch (note) {
    case 'A#':
      return 'Bb'
    case 'C#':
      return 'Db'
    case 'D#':
      return 'Eb'
    case 'F#':
      return 'Gb'
    case 'G#':
      return 'Ab'
    default:
      return note
  }
}

export const noteName = (note, octave) => {
  return `${note}${octave}`
}

export const notePath = (sampleDir, note, octave, extension = '.mp3') => {
  return `${baseUrl}${sampleDir}${sharpToFlat(
    note
  ).toLowerCase()}${octave}${extension}`
}

export const sampleMap = (notes, octaves, sampleDir) => {
  return notes
    .flatMap(note => {
      return octaves.map(octave => {
        return {
          [noteName(note, octave)]: notePath(sampleDir, note, octave)
        }
      })
    })
    .reduce((a, b) => Object.assign(a, b), {})
}

// const sampleMap2 = baseUrl => {
//   const notes = 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B'.split(',')
//   const range = [1, 2, 3, 4, 5, 6, 7]
//   const extension = '.mp3'
//
//   return notes
//     .flatMap(note =>
//       range.map(octave => {
//         const name = `${note}${octave}`
//         const path = `${baseUrl}${enharmonic(
//           note
//         ).toLowerCase()}${octave}${extension}`
//         return { [name]: path }
//       })
//     )
//     .reduce((a, b) => Object.assign(a, b), {})
// }
// console.log(sampleMap('http://example.com/piano/'))

const sampleMap3 = (
  baseUrl,
  options = {
    name: (note, octave) => {
      return `${note}${octave}`
    },
    path: (baseUrl, note, octave, extension) => {
      return `${baseUrl}${enharmonic(note).toLowerCase()}${octave}${extension}`
    },
    notes: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    octaves: [1, 2, 3, 4, 5, 6, 7],
    extension: '.mp3'
  }
) => {
  const { name, path, notes, octaves, extension } = options
  return notes
    .flatMap(note =>
      octaves.map(octave => {
        return { [name(note, octave)]: path(baseUrl, note, octave, extension) }
      })
    )
    .reduce((a, b) => Object.assign(a, b), {})
}
