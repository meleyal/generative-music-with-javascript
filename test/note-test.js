import test from 'tape'
import { Note } from '../src/note'
import { pitches, durations, velocities } from '../src/constants'

const { C4 } = pitches
const { QN, SN, WN } = durations
const { FFF } = velocities

test('Note', t => {
  const n = new Note(C4, QN, FFF)

  t.equal(n.pitch, 60, 'sets pitch')
  t.equal(n.duration, 1.0, 'sets duration')
  t.equal(n.velocity, 127, 'sets velocity')
  t.equal(n.name, 'C4', 'maps pitch to name')
  t.equal(n.volume, 1, 'maps velocity to volume')

  // Sixteenth note
  n.duration = SN
  t.equal(n.quantize(60).duration, 0.25, 'quantizes duration')
  n.duration = SN
  t.equal(n.quantize(120).duration, 0.125, 'quantizes duration')
  n.duration = SN
  t.equal(n.quantize(240).duration, 0.0625, 'quantizes duration')

  // Quarter note
  n.duration = QN
  t.equal(n.quantize(60).duration, 1.0, 'quantizes duration')
  n.duration = QN
  t.equal(n.quantize(120).duration, 0.5, 'quantizes duration')
  n.duration = QN
  t.equal(n.quantize(240).duration, 0.25, 'quantizes duration')

  // Whole note
  n.duration = WN
  t.equal(n.quantize(60).duration, 4.0, 'quantizes duration')
  n.duration = WN
  t.equal(n.quantize(120).duration, 2.0, 'quantizes duration')
  n.duration = WN
  t.equal(n.quantize(240).duration, 1.0, 'quantizes duration')

  t.end()
})
