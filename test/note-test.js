import test from 'tape-await'
import { Note } from '../src/note'
import { pitches, durations, velocities } from '../src/constants'

const { C4 } = pitches
const { QN, SN, WN } = durations
const { FFF } = velocities

test('Note', t => {
  const n = new Note(C4, QN, FFF)

  t.equal(n.pitch, 60)
  t.equal(n.duration, 1.0)
  t.equal(n.velocity, 127)
  t.equal(n.name, 'C4')
  t.equal(n.volume, 1)
})

test('Note / Quantize', t => {
  const n = new Note(C4, QN, FFF)

  // Sixteenth note
  n.duration = SN
  t.equal(n.quantize(60).duration, 0.25)
  n.duration = SN
  t.equal(n.quantize(120).duration, 0.125)
  n.duration = SN
  t.equal(n.quantize(240).duration, 0.0625)

  // Quarter note
  n.duration = QN
  t.equal(n.quantize(60).duration, 1.0)
  n.duration = QN
  t.equal(n.quantize(120).duration, 0.5)
  n.duration = QN
  t.equal(n.quantize(240).duration, 0.25)

  // Whole note
  n.duration = WN
  t.equal(n.quantize(60).duration, 4.0)
  n.duration = WN
  t.equal(n.quantize(120).duration, 2.0)
  n.duration = WN
  t.equal(n.quantize(240).duration, 1.0)
})
