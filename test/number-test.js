import test from 'tape'
import { remap } from '../src/number'

test('number', t => {
  t.equal(remap(50, 0, 100, 0, 1), 0.5, 'remaps value')
  t.end()
})
