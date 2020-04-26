import sampleMap from '../src/sample-map'
import { pitches } from '../src/constants'

const { a0, cs2 } = pitches

describe('sampleMap', () => {
  it('create', () => {
    const midiSamples = [a0, cs2]
    const pathResolver = (n, o) => `/path/to/${n}${o}.mp3`
    const samples = sampleMap(pathResolver, midiSamples)

    expect(samples['a0'].path).to.eql('/path/to/a0.mp3')
    expect(samples['a0'].playbackRate).to.be.closeTo(1, 0)

    expect(samples['as0'].path).to.eql('/path/to/a0.mp3')
    expect(samples['as0'].playbackRate).to.be.closeTo(1.059, 0.001)

    expect(samples['b0'].path).to.eql('/path/to/a0.mp3')
    expect(samples['b0'].playbackRate).to.be.closeTo(1.122, 0.001)

    expect(samples['as1'].path).to.eql('/path/to/cs2.mp3')
    expect(samples['as1'].playbackRate).to.be.closeTo(0.84, 0.001)

    expect(samples['f7'].path).to.eql('/path/to/cs2.mp3')
    expect(samples['f7'].playbackRate).to.be.closeTo(40.317, 0.001)
  })
})
