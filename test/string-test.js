import test from 'tape-await'
import { downcase, upcase } from '../src/string'

test('downcase', t => {
  t.equal(downcase('TEST'), 'test')
})

test('upcase', t => {
  t.equal(upcase('test'), 'TEST')
})
