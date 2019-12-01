import test from 'tape-await'
import sinon from 'sinon'
import { pattern } from '../src/pattern'

test('use', t => {
  const m = sinon.spy()
  const p = pattern([[1, 1]])
    .use(m)
    .play()
  t.equal(p.middleware.length, 1)
  t.looseEqual(m.firstCall.args[0], [1, 1])
  // TODO: Hack! need a way to reset now() (0.13) after env-test
  t.looseEqual(m.firstCall.args[1], { start: 0.13 })
  t.looseEqual(typeof m.firstCall.args[2], 'function')
})

test('play', t => {
  const m = sinon.spy()
  const p = pattern([[1, 1]])
  t.equal(p.currentTick, 0)
  p.use(m).play()
  // TODO: Ugh, cleanup!
  m.firstCall.args[2]()
  t.equal(p.currentTick, 1)
})

test('play with future start', t => {
  const m = sinon.spy()
  const p = pattern([[1, 1]]).startAt(1)
  p.use(m).play()
  // TODO: Ugh, cleanup!
  // m.firstCall.args[2]()
  t.equal(m.called, false)
})

test('get', t => {
  const p = pattern([[1], [2], [3]])
  t.looseEqual(p.get(), [[1], [2], [3]])
})

test('fill', t => {
  const p = pattern([])
  t.looseEqual(p.fill(3).get(), [[0], [0], [0]])
})

test('take', t => {
  const p = pattern([[1], [2], [3]])
  t.looseEqual(p.take(2).get(), [[1], [2]])
  // t.looseEqual(p.get(), [[1], [2], [3]])
})

test('reverse', t => {
  const p = pattern([[1], [2], [3]])
  t.looseEqual(p.reverse().get(), [[3], [2], [1]])
  // t.looseEqual(p.get(), [[1], [2], [3]])
})

test('randomize', t => {
  const p = pattern([[1], [2], [3]])
  t.equal(p.randomize(0, 1).get().length, 3)
  // t.looseEqual(p.get(), [[1], [2], [3]])
})

test('shuffle', t => {
  const p = pattern([[1], [2], [3]])
  t.equal(p.shuffle().get().length, 3)
  // t.looseEqual(p.get(), [[1], [2], [3]])
})

test('transpose', t => {
  const p = pattern([[1], [2], [3]])
  t.looseEqual(p.transpose(1).get(), [[2], [3], [4]])
  // t.looseEqual(p.get(), [[1], [2], [3]])
})

test('quantize', t => {
  const p = pattern([[1, 1], [2, 2], [3, 3]])
  t.looseEqual(p.quantize(120).get(), [[1, 0.5], [2, 1], [3, 1.5]])
  // t.looseEqual(p.get(), [[1, 1], [2, 2], [3, 3]])
})

test('startAt', t => {
  const p = pattern([[1, 1]]).startAt(0)
  t.equal(p.start, 0)
})

test('clamp', t => {
  const p = pattern([[1], [2], [3]])
  t.looseEqual(
    p
      .transpose(10)
      .clamp(0, 12)
      .get(),
    [[11], [12], [12]]
  )
  // t.looseEqual(p.get(), [[1], [2], [3]])
})

test('repeat', t => {
  const p = pattern([[1], [2], [3]])
  t.looseEqual(p.repeat(0).get(), [[1], [2], [3]])
  t.looseEqual(p.repeat(1).get(), [[1], [2], [3], [1], [2], [3]])
  // t.looseEqual(p.get(), [[1], [2], [3]])
})

test('ring', t => {
  const p = pattern(['A4', 'B4', 'C4'])
  const r = p.ring()

  t.equal('A4', r(3))
  t.equal('B4', r(4))
  t.equal('C4', r(5))

  // without arguments, ring returns pattern
  t.equal(p, r())
})
