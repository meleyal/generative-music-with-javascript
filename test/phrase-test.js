import test from 'tape'
import sinon from 'sinon'
import { phrase } from '../src/phrase'

test('phrase', t => {
  const i = sinon.spy()
  const p = phrase()
  p.startAt(0.0)
  p.repeat(2)
  p.add([1], [2])
  p.transpose(1)
  p.play(i)

  t.equal(p.start, 0.0)
  t.equal(p.repeats, 2)
  t.looseEqual(p.pitches, [2])
  t.looseEqual(p.durations, [2])
  t.assert(i.calledWith(2, { duration: 2 }))
  t.end()
})
