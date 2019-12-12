import { expect } from 'chai'
import sinon from 'sinon'
import { Score } from '../src/score'
import { Part } from '../src/part'

describe('Score', () => {
  it('create', () => {
    const context = {}
    const score = new Score(context, 60.0)
    const part1 = sinon.createStubInstance(Part)
    const part2 = sinon.createStubInstance(Part)

    score.loaded = true // hack
    score
      .add(part1)
      .add(part2)
      .play()

    expect(score.bpm).to.equal(60.0)
    expect(score.parts).to.deep.equal([part1, part2])
    expect(part1.score).to.equal(score)
    expect(part2.score).to.equal(score)
    expect(part1.quantize).to.have.been.calledOnce
    expect(part2.quantize).to.have.been.calledOnce
    expect(part1.play).to.have.been.calledOnce
    expect(part2.play).to.have.been.calledOnce
    expect(score.now(0.1)).to.equal(0.1)
    expect(score.now(0.12)).to.equal(0.1)
    expect(score.now(0.13)).to.equal(0.13)
  })
})
