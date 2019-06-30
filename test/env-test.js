import test from 'tape'
import { context } from '../src/env'

test('env', t => {
  t.equal(context(window), context(window))
  t.end()
})
