import test from 'tape-await'
import sinon from 'sinon'
import { Score } from '../src/score'
import { Part } from '../src/part'

test('Score', t => {
  const score = new Score(60)
  const part1 = sinon.createStubInstance(Part)
  const part2 = sinon.createStubInstance(Part)

  score.loaded = true // hack
  score
    .add(part1)
    .add(part2)
    .play()

  t.equal(score.bpm, 60, 'sets bpm')
  t.looseEqual(score.parts, [part1, part2], 'adds parts')
  t.equal(part1.score, score, 'sets score')
  t.equal(part2.score, score, 'sets score')
  t.assert(part1.quantize.calledOnce, 'quantizes part')
  t.assert(part2.quantize.calledOnce, 'quantizes part')
  t.assert(part1.play.calledOnce, 'plays part')
  t.assert(part2.play.calledOnce, 'plays part')
  t.equal(score.now(0.1), 0.1, 'calculates now')
  t.equal(score.now(0.12), 0.1, 'calculates now')
  t.equal(score.now(0.13), 0.13, 'calculates now')
})
