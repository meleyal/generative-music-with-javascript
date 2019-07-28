import test from 'tape'
import sinon from 'sinon'
import { part } from '../src/part'

test('part', t => {
  const p = part('piano')
  const ph1 = { play: sinon.spy() }
  const ph2 = { play: sinon.spy() }

  p.add(ph1).add(ph2).play()

  t.equal(p.instrument, 'piano')
  t.looseEqual(p.phrases, [ph1, ph2])
  t.assert(ph1.play.calledOnce)
  t.assert(ph2.play.notCalled)
  t.end()
})
