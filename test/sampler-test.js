import test from 'tape-await'
import sinon from 'sinon'
import { Sampler } from '../src/sampler'
import { Sample } from '../src/sample'
import { Note } from '../src/note'
import { pitches, durations } from '../src/constants'

const { c4, d4 } = pitches
const { qn } = durations

test('Sampler', async t => {
  const context = new window.AudioContext()
  const sampler = new Sampler(context, context.destination, 'piano')

  // Load
  await sampler.load()
  t.equal(Object.keys(sampler.buffers).length, 89)

  const note1 = new Note(c4, qn)
  const note2 = new Note(d4, qn)
  const time = 1
  const callback = sinon.spy()
  const playStub = sinon.stub(Sample.prototype, 'play')

  // Play note
  sampler.play(note1, time, callback)
  t.equal(note1, playStub.firstCall.thisValue.note)
  t.assert(playStub.calledWith(time, callback))

  // Play chord
  sampler.play([note1, note2], time, callback)
  t.equal(note1, playStub.secondCall.thisValue.note)
  t.equal(note2, playStub.thirdCall.thisValue.note)

  // TODO: should scale duration by playback rate (buffer.duration * playbackRate)
})
