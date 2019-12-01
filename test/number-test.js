import test from 'tape-await'
import { round, remap } from '../src/number'

test('number', t => {
  t.equal(round(3.14159265359), 3.14)
})

test('remap', t => {
  t.equal(remap(50, 0, 100, 0, 1), 0.5)
})
