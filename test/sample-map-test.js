import test from 'tape'
import { sampleMap } from '../src/sample-map'

test('sampleMap', t => {
  const pitchesWithSamples = ['a0', 'cs2']
  const pathResolver = (n, o) => `/path/to/${n}${o}.mp3`.toLowerCase()
  const samples = sampleMap(pathResolver, pitchesWithSamples)

  t.looseEqual(samples['a0'], {
    path: '/path/to/a0.mp3',
    playbackRate: 1,
  })
  t.looseEqual(samples['as0'], {
    path: '/path/to/a0.mp3',
    playbackRate: 1.0594630943592953,
  })
  t.looseEqual(samples['b0'], {
    path: '/path/to/a0.mp3',
    playbackRate: 1.122462048309373,
  })
  t.looseEqual(samples['as1'], {
    path: '/path/to/cs2.mp3',
    playbackRate: 0.8408964152537146,
  })
  t.looseEqual(samples['f7'], {
    path: '/path/to/cs2.mp3',
    playbackRate: 40.317473596635935,
  })
  t.end()
})
