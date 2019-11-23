import test from 'tape'
import { sampleMap } from '../../src/sample-map'

test('sampleMap', t => {
  const availablePitches = ['A0', 'C#2']

  const pathFn = (note, octave) => {
    return `/path/to/${note.toLowerCase()}${octave}.mp3`
  }

  const samples = sampleMap(pathFn, availablePitches)

  t.looseEqual(samples['A0'], {
    path: '/path/to/a0.mp3',
    distance: 0,
    frequency: 27.5,
    playbackRate: 1
  })
  t.looseEqual(samples['A#0'], {
    path: '/path/to/a0.mp3',
    distance: -1,
    frequency: 29.14,
    playbackRate: 0.9438743126816935
  })
  t.looseEqual(samples['B0'], {
    path: '/path/to/a0.mp3',
    distance: -2,
    frequency: 30.87,
    playbackRate: 0.8908987181403393
  })
  t.looseEqual(samples['A#1'], {
    path: '/path/to/cs2.mp3',
    distance: 3,
    frequency: 58.27,
    playbackRate: 1.189207115002721
  })
  t.looseEqual(samples['F7'], {
    path: '/path/to/cs2.mp3',
    distance: -64,
    frequency: 2793.83,
    playbackRate: 0.024803141437003122
  })
  t.end()
})
