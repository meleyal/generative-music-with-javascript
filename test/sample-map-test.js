import { expect } from 'chai'
import { sampleMap } from '../src/sample-map'

describe('sampleMap', () => {
  const pitchesWithSamples = ['a0', 'cs2']
  const pathResolver = (n, o) => `/path/to/${n}${o}.mp3`
  const samples = sampleMap(pathResolver, pitchesWithSamples)

  it('create', () => {
    expect(samples['a0']).to.deep.equal({
      path: '/path/to/a0.mp3',
      playbackRate: 1,
    })
    expect(samples['as0']).to.deep.equal({
      path: '/path/to/a0.mp3',
      playbackRate: 1.0594630943592953,
    })
    expect(samples['b0']).to.deep.equal({
      path: '/path/to/a0.mp3',
      playbackRate: 1.122462048309373,
    })
    expect(samples['as1']).to.deep.equal({
      path: '/path/to/cs2.mp3',
      playbackRate: 0.8408964152537146,
    })
    expect(samples['f7']).to.deep.equal({
      path: '/path/to/cs2.mp3',
      playbackRate: 40.317473596635935,
    })
  })
})
