import test from 'tape-await'
import { context, now } from '../src/env'

test('context', t => {
  t.equal(context(), context())
})

test('now', t => {
  t.equal(now(0.1), 0.1)
  t.equal(now(0.12), 0.1)
  t.equal(now(0.13), 0.13)
})
