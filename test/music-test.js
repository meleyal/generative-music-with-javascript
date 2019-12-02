import test from 'tape-await'
import {
  pitchSplit,
  pitchToMidi,
  midiToPitch,
  pitchToPath,
  intervalToFrequencyRatio
} from '../src/music'

test('pitchSplit', t => {
  const [note, octave] = pitchSplit('A#0')
  t.equal(note, 'A#')
  t.equal(octave, '0')
})

test('pitchToMidi', t => {
  t.equal(pitchToMidi('A0'), 21)
  t.equal(pitchToMidi('C8'), 108)
})

test('midiToPitch', t => {
  t.equal(midiToPitch(21), 'A0')
  t.equal(midiToPitch(108), 'C8')
})

test('pitchToPath', t => {
  t.equal(pitchToPath('A1'), 'a1')
  t.equal(pitchToPath('A#1'), 'as1')
  t.equal(pitchToPath('Ab1'), 'ab1')
})

test('intervalToFrequencyRatio', t => {
  t.equal(intervalToFrequencyRatio(0), 1)
  t.equal(intervalToFrequencyRatio(7), 1.4983070768766815)
  t.equal(intervalToFrequencyRatio(-7), 0.6674199270850172)
  t.equal(intervalToFrequencyRatio(12), 2)
  t.equal(intervalToFrequencyRatio(-12), 0.5)
})
