import test from 'tape-await'
import { Note } from '../src/note'
import { pitches, durations, velocities } from '../src/constants'

const { c4 } = pitches
const { qn, sn, wn } = durations
const { fff } = velocities

test('Note', t => {
  const n = new Note(c4, qn, fff)

  t.equal(n.pitch, 60)
  t.equal(n.duration, 1.0)
  t.equal(n.velocity, 127)
  t.equal(n.name, 'c4')
  t.equal(n.volume, 1)
})

test('Note / Quantize', t => {
  const n = new Note(c4, qn, fff)

  // Sixteenth note
  n.duration = sn
  t.equal(n.quantize(60).duration, 0.25)
  n.duration = sn
  t.equal(n.quantize(120).duration, 0.125)
  n.duration = sn
  t.equal(n.quantize(240).duration, 0.0625)

  // Quarter note
  n.duration = qn
  t.equal(n.quantize(60).duration, 1.0)
  n.duration = qn
  t.equal(n.quantize(120).duration, 0.5)
  n.duration = qn
  t.equal(n.quantize(240).duration, 0.25)

  // Whole note
  n.duration = wn
  t.equal(n.quantize(60).duration, 4.0)
  n.duration = wn
  t.equal(n.quantize(120).duration, 2.0)
  n.duration = wn
  t.equal(n.quantize(240).duration, 1.0)
})
