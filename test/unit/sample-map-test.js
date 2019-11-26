import test from 'tape'
import { sampleMap } from '../../src/sample-map'
import { downcase } from '../../src/string'

test('sampleMap', t => {
  const pitchesWithSamples = ['A0', 'C#2']
  const pathResolver = (n, o) => downcase(`/path/to/${n}${o}.mp3`)
  const samples = sampleMap(pathResolver, pitchesWithSamples)

  t.looseEqual(samples['A0'], {
    path: '/path/to/a0.mp3',
    playbackRate: 1
  })
  t.looseEqual(samples['A#0'], {
    path: '/path/to/a0.mp3',
    playbackRate: 1.0594630943592953
  })
  t.looseEqual(samples['B0'], {
    path: '/path/to/a0.mp3',
    playbackRate: 1.122462048309373
  })
  t.looseEqual(samples['A#1'], {
    path: '/path/to/cs2.mp3',
    playbackRate: 0.8408964152537146
  })
  t.looseEqual(samples['F7'], {
    path: '/path/to/cs2.mp3',
    playbackRate: 40.317473596635935
  })
  t.end()
})
