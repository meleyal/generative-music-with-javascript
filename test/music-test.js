import test from 'tape-await'
import {
  pitchSplit,
  pitchNote,
  pitchOctave,
  pitchToMidi,
  midiToPitch,
  midiToFrequency,
  intervalToFrequencyRatio
} from '../src/music'

test('pitchSplit', t => {
  const [note, octave] = pitchSplit('as0')
  t.equal(note, 'as')
  t.equal(octave, 0)
})

test('pitchNote', t => {
  t.equal(pitchNote('as0'), 'as')
})

test('pitchOctave', t => {
  t.equal(pitchOctave('as0'), 0)
})

test('pitchToMidi', t => {
  t.equal(pitchToMidi('a0'), 21)
  t.equal(pitchToMidi('c8'), 108)
})

test('midiToPitch', t => {
  t.equal(midiToPitch(21), 'a0')
  t.equal(midiToPitch(108), 'c8')
})

test('midiToFrequency', t => {
  t.equal(midiToFrequency(21), 27.5) // a0
  t.equal(midiToFrequency(53), 174.61) // f3
  t.equal(midiToFrequency(38), 73.42) // d2
  t.equal(midiToFrequency(97), 2217.46) // cs7
})

test('intervalToFrequencyRatio', t => {
  t.equal(intervalToFrequencyRatio(0), 1)
  t.equal(intervalToFrequencyRatio(7), 1.4983070768766815)
  t.equal(intervalToFrequencyRatio(-7), 0.6674199270850172)
  t.equal(intervalToFrequencyRatio(12), 2)
  t.equal(intervalToFrequencyRatio(-12), 0.5)
})
