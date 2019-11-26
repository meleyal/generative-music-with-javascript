import test from 'tape'
import { downcase, upcase } from '../../src/string'

test('downcase', t => {
  t.equal(downcase('TEST'), 'test')
  t.end()
})

test('upcase', t => {
  t.equal(upcase('test'), 'TEST')
  t.end()
})
