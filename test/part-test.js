// import test from 'tape-await'
// import sinon from 'sinon'
// import { Part } from '../src/part'
// import { Phrase } from '../src/phrase'
//
// test('part', t => {
//   const part = new Part('piano')
//   const phrase1 = sinon.createStubInstance(Phrase)
//   const phrase2 = sinon.createStubInstance(Phrase)
//
//   part
//     .add(phrase1)
//     .add(phrase2)
//     .play()
//
//   t.equal(part.instrument, 'piano', 'sets instrument')
//   t.equal(phrase1.part, part, 'sets part on phrase')
//   t.equal(phrase2.part, part, 'sets part on phrase')
//   t.looseEqual(part.phrases, [phrase1, phrase2], 'adds phrases')
//   t.assert(phrase1.play.calledOnce, 'plays first phrase')
//   t.assert(phrase2.play.notCalled, 'does not play later phrases')
// })
