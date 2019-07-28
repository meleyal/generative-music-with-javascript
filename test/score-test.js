import test from 'tape'
import { score } from '../src/score'

test('score', t => {
  const s = score(60.0)
  s.add(1)

  t.equal(s.bpm, 60.0)
  t.looseEqual(s.parts, [1])
  t.end()
})
