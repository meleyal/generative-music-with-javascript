import test from 'tape'
import { take, randomize, shuffle, reverse, transpose, ring } from '../src/pattern'

test('take', t => {
  const a = ['A', 'B', 'C']
  const r = take(2)(a)
  t.looseEqual(r, ['A', 'B'])
  t.end()
})

test('randomize', t => {
  const a = ['A', 'B', 'C']
  const r = randomize()(a)
  t.equal(r.length, 3)
  t.end()
})

test('shuffle', t => {
  const a = ['A', 'B', 'C']
  const r = shuffle()(a)
  t.equal(r.length, 3)
  t.end()
})

test('reverse', t => {
  const a = ['A', 'B', 'C']
  const r = reverse()(a)
  t.looseEqual(r, ['C', 'B', 'A'])
  t.end()
})

test('transpose', t => {
  const a = [1, 2, 3, 4]
  const r = transpose(1)(a)
  t.looseEqual(r, [2, 3, 4, 5])
  t.end()
})

test('ring', t => {
  const r = ring(['A4', 'B4', 'C4'])
  t.equal(r(0), r(3))
  t.equal(r(1), r(4))
  t.equal(r(2), r(5))
  t.end()
})
