import test from 'tape-await'
import {
  pitchSplit,
  pitchToMidi,
  midiToPitch,
  intervalToFrequencyRatio,
} from '../src/music'

test('pitchSplit', t => {
  const [note, octave] = pitchSplit('as0')
  t.equal(note, 'as')
  t.equal(octave, '0')
})

test('pitchToMidi', t => {
  t.equal(pitchToMidi('a0'), 21)
  t.equal(pitchToMidi('c8'), 108)
})

test('midiToPitch', t => {
  t.equal(midiToPitch(21), 'a0')
  t.equal(midiToPitch(108), 'c8')
})

test('intervalToFrequencyRatio', t => {
  t.equal(intervalToFrequencyRatio(0), 1)
  t.equal(intervalToFrequencyRatio(7), 1.4983070768766815)
  t.equal(intervalToFrequencyRatio(-7), 0.6674199270850172)
  t.equal(intervalToFrequencyRatio(12), 2)
  t.equal(intervalToFrequencyRatio(-12), 0.5)
})
