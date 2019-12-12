import { expect } from 'chai'
import {
  pitchSplit,
  pitchToMidi,
  midiToPitch,
  intervalToFrequencyRatio,
} from '../src/music'

describe('Music', () => {
  it('pitchSplit', () => {
    const [note, octave] = pitchSplit('as0')
    expect(note).to.equal('as')
    expect(octave).to.equal('0')
  })

  it('pitchToMidi', () => {
    expect(pitchToMidi('a0')).to.equal(21)
    expect(pitchToMidi('c8')).to.equal(108)
  })

  it('midiToPitch', () => {
    expect(midiToPitch(21)).to.equal('a0')
    expect(midiToPitch(108)).to.equal('c8')
  })

  it('intervalToFrequencyRatio', () => {
    expect(intervalToFrequencyRatio(0)).to.equal(1)
    expect(intervalToFrequencyRatio(7)).to.equal(1.4983070768766815)
    expect(intervalToFrequencyRatio(-7)).to.equal(0.6674199270850172)
    expect(intervalToFrequencyRatio(12)).to.equal(2)
    expect(intervalToFrequencyRatio(-12)).to.equal(0.5)
  })
})
