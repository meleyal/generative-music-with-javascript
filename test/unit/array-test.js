import test from 'tape'
import {
  closest,
  first,
  includes,
  last,
  length,
  nth,
  range
} from '../../src/array'

test('closest', t => {
  const arr = [-10, -5, 0, 5, 10]
  t.equal(closest(arr, 1), 0)
  t.equal(closest(arr, 2), 0)
  t.equal(closest(arr, 3), 5)
  t.equal(closest(arr, 4), 5)
  t.equal(closest(arr, 5), 5)
  t.equal(closest(arr, 8), 10)
  t.equal(closest(arr, -1), 0)
  t.equal(closest(arr, -2), 0)
  t.equal(closest(arr, -3), -5)
  t.equal(closest(arr, -4), -5)
  t.equal(closest(arr, -5), -5)
  t.equal(closest(arr, -8), -10)
  t.end()
})

test('first', t => {
  const arr = [1, 2, 3]
  t.equal(first(arr), 1)
  t.end()
})

test('includes', t => {
  const arr = [1, 2, 3]
  t.equal(includes(arr, 1), true)
  t.equal(includes(arr, 3), true)
  t.equal(includes(arr, 4), false)
  t.end()
})

test('last', t => {
  const arr = [1, 2, 3]
  t.equal(last(arr), 3)
  t.end()
})

test('length', t => {
  const arr = [1, 2, 3]
  t.equal(length(arr), 3)
  t.end()
})

test('nth', t => {
  const arr = [1, 2, 3]
  t.equal(nth(arr, 0), 1)
  t.equal(nth(arr, 2), 3)
  t.end()
})

test('range', t => {
  const arr = range(1, 10)
  t.equal(length(arr), 10)
  t.equal(first(arr), 1)
  t.equal(last(arr), 10)
  t.end()
})
