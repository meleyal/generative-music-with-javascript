import { expect } from 'chai'
import seq from '../src/seq'

describe.only('Pattern', () => {
  it('works', () => {
    // console.log(
    //   seq([
    //     [1, 1],
    //     [2, 1],
    //     [3, 1]
    //   ])
    //     .repeat(2)
    //     .quantize(120.0)
    //     .transpose(1)
    //     .fold()
    // )

    console.log(seq.concat(seq([1, 2, 3]), seq([4, 5, 6])).fold())
  })
})
