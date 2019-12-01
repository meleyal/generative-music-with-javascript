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

  t.equal(score.bpm, 60)
  t.looseEqual(score.parts, [part1, part2])
  t.equal(part1.score, score)
  t.equal(part2.score, score)
  t.assert(part1.quantize.calledOnce)
  t.assert(part2.quantize.calledOnce)
  t.assert(part1.play.calledOnce)
  t.assert(part2.play.calledOnce)
  t.equal(score.now(0.1), 0.1)
  t.equal(score.now(0.12), 0.1)
  t.equal(score.now(0.13), 0.13)
})
