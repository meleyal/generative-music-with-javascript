// import test from 'tape-await'
// import sinon from 'sinon'
// import { Sampler } from '../src/sampler'
// import { Sample } from '../src/sample'
// import { Note } from '../src/note'
// import { pitches, durations } from '../src/constants'
//
// const { C4, D4 } = pitches
// const { QN } = durations
//
// test('Sampler', async t => {
//   const context = new window.AudioContext()
//   const sampler = new Sampler(context, context.destination, 'piano')
//
//   // Load
//   await sampler.load()
//   t.equal(Object.keys(sampler.buffers).length, 84, 'loads samples')
//
//   const note1 = new Note(C4, QN)
//   const note2 = new Note(D4, QN)
//   const time = 1
//   const callback = sinon.spy()
//   const playStub = sinon.stub(Sample.prototype, 'play')
//
//   // Play note
//   sampler.play(note1, time, callback)
//   t.equal(note1, playStub.firstCall.thisValue.note, 'plays note')
//   t.assert(playStub.calledWith(time, callback), 'plays note')
//
//   // Play chord
//   sampler.play([note1, note2], time, callback)
//   t.equal(note1, playStub.secondCall.thisValue.note, 'plays chord note')
//   t.equal(note2, playStub.thirdCall.thisValue.note, 'plays chord note')
//
//  TODO: should scale duration by playback rate (buffer.duration * playbackRate)
// })
