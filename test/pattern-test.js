import { expect } from 'chai'
import {
  ring,
  transpose,
  repeat,
  take,
  reverse,
  randomize,
  shuffle,
  quantize,
  range
} from '../src/pattern'
import { pitches, durations } from '../src/constants'

const { c4 } = pitches
const { qn, sn, wn } = durations

describe('Pattern', () => {
  it('range', () => {
    const arr = range(1, 10)
    expect(arr.length).to.equal(10)
    expect(arr[0]).to.equal(1)
    expect(arr[9]).to.equal(10)
  })

  it('ring', () => {
    const r = ring([1, 2, 3])

    expect(r(0)).to.equal(1)
    expect(r(1)).to.equal(2)
    expect(r(2)).to.equal(3)
    expect(r(3)).to.equal(1)
    expect(r(4)).to.equal(2)
    expect(r(5)).to.equal(3)
  })

  it('transpose', () => {
    const arr = [
      [1, 0, 0],
      [2, 0, 0]
    ]
    expect(transpose(arr, 1)).to.deep.equal([
      [2, 0, 0],
      [3, 0, 0]
    ])
  })

  it.skip('repeat', () => {
    const arr = [1, 2]
    expect(repeat(arr, 0)).to.deep.equal([1, 2])
    expect(repeat(arr, 1)).to.deep.equal([1, 2])
    expect(repeat(arr, 2)).to.deep.equal([1, 2, 1, 2])
  })

  it('reverse', () => {
    const arr = [1, 2, 3]
    expect(reverse(arr)).to.deep.equal([3, 2, 1])
    expect(arr).to.deep.equal([1, 2, 3])
  })

  it('randomize', () => {
    const arr = [1, 2, 3]
    expect(randomize(arr)).to.have.lengthOf(3)
  })

  it('shuffle', () => {
    const arr = [1, 2, 3]
    expect(shuffle(arr)).to.have.lengthOf(3)
  })

  it('take', () => {
    const arr = [1, 2, 3]
    expect(take(arr, 1)).to.deep.equal([1])
    expect(take(arr, 2)).to.deep.equal([1, 2])
  })

  it('quantize', () => {
    let notes = [
      [c4, sn],
      [c4, qn],
      [c4, wn]
    ]

    expect(quantize(notes, 30.0)).to.deep.equal([
      [c4, 0.5],
      [c4, 2.0],
      [c4, 8.0]
    ])

    expect(quantize(notes, 60.0)).to.deep.equal([
      [c4, 0.25],
      [c4, 1.0],
      [c4, 4.0]
    ])

    expect(quantize(notes, 120.0)).to.deep.equal([
      [c4, 0.125],
      [c4, 0.5],
      [c4, 2.0]
    ])

    expect(quantize(notes, 240.0)).to.deep.equal([
      [c4, 0.0625],
      [c4, 0.25],
      [c4, 1.0]
    ])
  })
})
