import { expect } from 'chai'
import { round, remap, closest } from '../src/number'

describe('Number', () => {
  it('round', () => {
    expect(round(3.14159265359)).to.equal(3.14)
  })

  it('remap', () => {
    expect(remap(50, 0, 100, 0, 1)).to.equal(0.5)
  })

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
})
