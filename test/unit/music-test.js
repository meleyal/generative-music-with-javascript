import test from 'tape-await'
import {
  pitchSplit,
  pitchNote,
  pitchOctave,
  toMidi,
  toPitch,
  toPath,
  mtof,
  intervalToFrequencyRatio
} from '../../src/music'

test('pitchSplit', t => {
  const [note, octave] = pitchSplit('A#0')

  t.equal(note, 'A#')
  t.equal(octave, '0')
})

test('pitchNote', t => {
  t.equal(pitchNote('A#0'), 'A#')
})

test('pitchOctave', t => {
  t.equal(pitchOctave('A#0'), '0')
})

test('toMidi', t => {
  t.equal(toMidi('A0'), 21)
  t.equal(toMidi('C8'), 108)
})

test('toPitch', t => {
  t.equal(toPitch(21), 'A0')
  t.equal(toPitch(108), 'C8')
})

test('toPath', t => {
  t.equal(toPath('A1'), 'a1')
  t.equal(toPath('A#1'), 'as1')
  t.equal(toPath('Ab1'), 'ab1')
})

test('mtof', t => {
  t.equal(mtof(21), 27.5) // A0
  t.equal(mtof(53), 174.61) // F3
  t.equal(mtof(38), 73.42) // D2
  t.equal(mtof(97), 2217.46) // C#7
})

test('intervalToFrequencyRatio', t => {
  t.equal(intervalToFrequencyRatio(0), 1)
  t.equal(intervalToFrequencyRatio(7), 1.4983070768766815)
  t.equal(intervalToFrequencyRatio(-7), 0.6674199270850172)
  t.equal(intervalToFrequencyRatio(12), 2)
  t.equal(intervalToFrequencyRatio(-12), 0.5)
})
