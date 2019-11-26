import test from 'tape'
import { round } from '../../src/number'

test('number', t => {
  t.equal(round(3.14159265359), 3.14)
  t.end()
})

// test('remap', t => {
//   t.equal(remap(50, 0, 100, 0, 1), 0.5, 'remaps value')
// })
