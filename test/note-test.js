import test from 'tape'
import { pitches, durations } from '../src/constants'
import { Note } from '../src/note'

test('Note', t => {
  const n = new Note(pitches.C4, durations.QN, 127)

  t.equal(n.pitch, 60)
  t.equal(n.duration, 1.0)
  t.equal(n.velocity, 127)

  // Sixteenth note
  n.duration = durations.SN
  t.equal(n.quantize(60).duration, 0.25)
  n.duration = durations.SN
  t.equal(n.quantize(120).duration, 0.125)
  n.duration = durations.SN
  t.equal(n.quantize(240).duration, 0.0625)

  // Quarter note
  n.duration = durations.QN
  t.equal(n.quantize(60).duration, 1.0)
  n.duration = durations.QN
  t.equal(n.quantize(120).duration, 0.5)
  n.duration = durations.QN
  t.equal(n.quantize(240).duration, 0.25)

  // Whole note
  n.duration = durations.WN
  t.equal(n.quantize(60).duration, 4.0)
  n.duration = durations.WN
  t.equal(n.quantize(120).duration, 2.0)
  n.duration = durations.WN
  t.equal(n.quantize(240).duration, 1.0)

  t.end()
})
