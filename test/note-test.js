import test from 'tape'
import { pitches, durations } from '../src/constants'
import { Note } from '../src/note'

test('Note', t => {
  const n = new Note(pitches.C4, durations.QN, 127)

  t.equal(n.pitch, 60, 'sets pitch')
  t.equal(n.duration, 1.0, 'sets duration')
  t.equal(n.velocity, 127, 'sets velocity')

  // Sixteenth note
  n.duration = durations.SN
  t.equal(n.quantize(60).duration, 0.25, 'quantizes duration')
  n.duration = durations.SN
  t.equal(n.quantize(120).duration, 0.125, 'quantizes duration')
  n.duration = durations.SN
  t.equal(n.quantize(240).duration, 0.0625, 'quantizes duration')

  // Quarter note
  n.duration = durations.QN
  t.equal(n.quantize(60).duration, 1.0, 'quantizes duration')
  n.duration = durations.QN
  t.equal(n.quantize(120).duration, 0.5, 'quantizes duration')
  n.duration = durations.QN
  t.equal(n.quantize(240).duration, 0.25, 'quantizes duration')

  // Whole note
  n.duration = durations.WN
  t.equal(n.quantize(60).duration, 4.0, 'quantizes duration')
  n.duration = durations.WN
  t.equal(n.quantize(120).duration, 2.0, 'quantizes duration')
  n.duration = durations.WN
  t.equal(n.quantize(240).duration, 1.0, 'quantizes duration')

  t.end()
})
