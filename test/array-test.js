import test from 'tape'
import {
  closest,
  range
} from '../src/array'

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

test('range', t => {
  const arr = range(1, 10)
  t.equal(arr.length, 10)
  t.equal(arr[0], 1)
  t.equal(arr[9], 10)
  t.end()
})
