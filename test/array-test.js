import { expect } from 'chai'
import { closest, range, transpose, repeat } from '../src/array'

describe('Array', () => {
  it('closest', () => {
    const arr = [-10, -5, 0, 5, 10]
    expect(closest(arr, 1)).to.equal(0)
    expect(closest(arr, 2)).to.equal(0)
    expect(closest(arr, 3)).to.equal(5)
    expect(closest(arr, 4)).to.equal(5)
    expect(closest(arr, 5)).to.equal(5)
    expect(closest(arr, 8)).to.equal(10)
    expect(closest(arr, -1)).to.equal(0)
    expect(closest(arr, -2)).to.equal(0)
    expect(closest(arr, -3)).to.equal(-5)
    expect(closest(arr, -4)).to.equal(-5)
    expect(closest(arr, -5)).to.equal(-5)
    expect(closest(arr, -8)).to.equal(-10)
  })

  it('range', () => {
    const arr = range(1, 10)
    expect(arr.length).to.equal(10)
    expect(arr[0]).to.equal(1)
    expect(arr[9]).to.equal(10)
  })

  it('transpose', () => {
    const arr = [[1, 0, 0], [2, 0, 0]]
    expect(transpose(arr, 1)).to.deep.equal([[2, 0, 0], [3, 0, 0]])
  })

  it.only('repeat', () => {
    const arr = [1, 2]
    expect(repeat(arr, 0)).to.deep.equal([1, 2])
    expect(repeat(arr, 1)).to.deep.equal([1, 2])
    expect(repeat(arr, 2)).to.deep.equal([[1, 2], [1, 2]])
  })
})
