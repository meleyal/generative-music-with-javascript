import test from 'tape'
import sinon from 'sinon'
import { score } from '../src/score'

test('score', t => {
  const s = score(60.0)
  const pt1 = { play: sinon.spy(), loadInstrument() {} }
  const pt2 = { play: sinon.spy(), loadInstrument() {} }

  s.instrumentsLoaded = true // hack
  s.add(pt1).add(pt2).play()

  t.equal(s.bpm, 60.0)
  t.looseEqual(s.parts, [pt1, pt2])
  t.assert(pt1.play.calledOnce)
  t.assert(pt2.play.calledOnce)
  t.end()
})
