import { expect } from 'chai'
import { round, remap } from '../src/number'

describe('Number', () => {
  it('round', () => {
    expect(round(3.14159265359)).to.equal(3.14)
  })

  it('remap', () => {
    expect(remap(50, 0, 100, 0, 1)).to.equal(0.5)
  })
})
