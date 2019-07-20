import test from 'tape'
import { pattern } from '../src/pattern'

test('get', t => {
  const p = pattern(['A', 'B', 'C'])
  t.looseEqual(p.get(), ['A', 'B', 'C'])
  t.end()
})

test('take', t => {
  const p = pattern(['A', 'B', 'C'])
  t.looseEqual(p.take(2).get(), ['A', 'B'])
  t.end()
})

test('reverse', t => {
  const p = pattern(['A', 'B', 'C'])
  t.looseEqual(p.reverse().get(), ['C', 'B', 'A'])
  t.end()
})

test('randomize', t => {
  const p = pattern(['A', 'B', 'C'])
  t.equal(p.randomize(0, 1).get().length, 3)
  t.end()
})

test('shuffle', t => {
  const p = pattern(['A', 'B', 'C'])
  t.equal(p.shuffle().get().length, 3)
  t.end()
})

test('transpose', t => {
  const p = pattern([1, 2, 3, 4])
  t.looseEqual(p.transpose(1).get(), [2, 3, 4, 5])
  t.end()
})

test('ring', t => {
  const p = pattern(['A4', 'B4', 'C4'])
  const r = p.ring()

  t.equal('A4', r(3))
  t.equal('B4', r(4))
  t.equal('C4', r(5))

  // without arguments, ring returns pattern
  t.equal(p, r())

  t.end()
})
