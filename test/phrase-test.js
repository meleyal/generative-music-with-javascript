import test from 'tape'
import sinon from 'sinon'
import { Phrase } from '../src/phrase'

test('Phrase', t => {
  const i = sinon.spy()
  const p = new Phrase()
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
