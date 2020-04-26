import {
  pitchSplit,
  pitchToMidi,
  midiToPitch,
  intervalToFrequencyRatio,
  volume,
} from '../src/music'

describe('Music', () => {
  it('pitchSplit', () => {
    const [note, octave] = pitchSplit('as0')
    expect(note).to.eql('as')
    expect(octave).to.eql('0')
  })

  it('pitchToMidi', () => {
    expect(pitchToMidi('a0')).to.eql(21)
    expect(pitchToMidi('c8')).to.eql(108)
  })

  it('midiToPitch', () => {
    expect(midiToPitch(21)).to.eql('a0')
    expect(midiToPitch(108)).to.eql('c8')
  })

  it('intervalToFrequencyRatio', () => {
    expect(intervalToFrequencyRatio(0)).to.eql(1)
    expect(intervalToFrequencyRatio(7)).to.eql(1.4983070768766815)
    expect(intervalToFrequencyRatio(-7)).to.eql(0.6674199270850172)
    expect(intervalToFrequencyRatio(12)).to.eql(2)
    expect(intervalToFrequencyRatio(-12)).to.eql(0.5)
  })

  it('volume', () => {
    expect(volume(0)).to.eql(0)
    expect(volume(63.5)).to.eql(0.5)
    expect(volume(127)).to.eql(1)
  })
})
