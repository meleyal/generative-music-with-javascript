import test from 'tape'
import { part } from '../src/part'

test('part', t => {
  const p = part('piano')
  p.add(1)

  t.equal(p.instrument, 'piano')
  t.looseEqual(p.phrases, [1])
  t.end()
})
