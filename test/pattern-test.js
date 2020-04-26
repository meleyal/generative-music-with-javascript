import * as ptn from '../src/pattern'
import { pitches, durations } from '../src/constants'

const { c4 } = pitches
const { qn, sn, wn } = durations

describe('Pattern', () => {
  it('range', () => {
    const arr = ptn.range(1, 10)
    expect(arr.length).to.eql(10)
    expect(arr[0]).to.eql(1)
    expect(arr[9]).to.eql(10)
  })

  it('ring', () => {
    const r = ptn.ring([1, 2, 3])

    expect(r(0)).to.eql(1)
    expect(r(1)).to.eql(2)
    expect(r(2)).to.eql(3)
    expect(r(3)).to.eql(1)
    expect(r(4)).to.eql(2)
    expect(r(5)).to.eql(3)
  })

  it('transpose', () => {
    const arr = [
      [1, 0, 0],
      [2, 0, 0],
    ]
    expect(ptn.transpose(arr, 1)).to.deep.eql([
      [2, 0, 0],
      [3, 0, 0],
    ])
  })

  it('repeat', () => {
    const arr = [1, 2]
    expect(ptn.repeat(arr, 0)).to.deep.eql([1, 2])
    expect(ptn.repeat(arr, 1)).to.deep.eql([1, 2])
    expect(ptn.repeat(arr, 2)).to.deep.eql([1, 2, 1, 2])
  })

  it('reverse', () => {
    const arr = [1, 2, 3]
    expect(ptn.reverse(arr)).to.deep.eql([3, 2, 1])
    expect(arr).to.deep.eql([1, 2, 3])
  })

  it('randomize', () => {
    const arr = [1, 2, 3]
    expect(ptn.randomize(arr)).to.have.lengthOf(3)
  })

  it('shuffle', () => {
    const arr = [1, 2, 3]
    expect(ptn.shuffle(arr)).to.have.lengthOf(3)
  })

  it('take', () => {
    const arr = [1, 2, 3]
    expect(ptn.take(arr, 1)).to.deep.eql([1])
    expect(ptn.take(arr, 2)).to.deep.eql([1, 2])
  })

  it('quantize', () => {
    let notes = [
      [c4, sn],
      [c4, qn],
      [c4, wn],
    ]

    expect(ptn.quantize(notes, 30.0)).to.deep.eql([
      [c4, 0.5],
      [c4, 2.0],
      [c4, 8.0],
    ])

    expect(ptn.quantize(notes, 60.0)).to.deep.eql([
      [c4, 0.25],
      [c4, 1.0],
      [c4, 4.0],
    ])

    expect(ptn.quantize(notes, 120.0)).to.deep.eql([
      [c4, 0.125],
      [c4, 0.5],
      [c4, 2.0],
    ])

    expect(ptn.quantize(notes, 240.0)).to.deep.eql([
      [c4, 0.0625],
      [c4, 0.25],
      [c4, 1.0],
    ])
  })
})
