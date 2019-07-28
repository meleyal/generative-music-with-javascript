import test from 'tape'
import { phrase } from '../src/phrase'

test('phrase', t => {
  const p = phrase()
  p.startAt(4.0)
  p.repeat(2)
  p.add([1], [2])
  p.transpose(1)

  t.equal(p.start, 4.0)
  t.equal(p.repetitions, 2)
  t.looseEqual(p.pitches, [2])
  t.looseEqual(p.durations, [2])
  t.end()
})
