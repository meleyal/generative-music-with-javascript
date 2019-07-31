export const sampleMap = pathFn => {
  const notes = 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B'.split(',')
  const octaves = [1, 2, 3, 4, 5, 6, 7]
  const extension = '.mp3'

  return notes
    .flatMap(note =>
      octaves.map(octave => {
        const name = `${note}${octave}`
        const path = pathFn(note, octave)
        return { [name]: path }
      })
    )
    .reduce((a, b) => Object.assign(a, b), {})
}
