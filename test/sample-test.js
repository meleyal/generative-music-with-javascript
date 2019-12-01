import test from 'tape-await'
import sinon from 'sinon'
import { Sample } from '../src/sample'
import { Note } from '../src/note'
import { pitches, durations, velocities } from '../src/constants'

const { C4, REST } = pitches
const { QN } = durations
const { FFF } = velocities

test('Sample / Note', t => {
  const context = new window.AudioContext()
  const source = {
    start: sinon.spy(),
    stop: sinon.stub().callsFake(function() {
      this.onended()
    }),
    playbackRate: { value: 0 },
    connect: sinon.spy()
  }
  const volume = {
    gain: {
      value: 0,
      linearRampToValueAtTime: sinon.spy()
    },
    connect: sinon.spy()
  }
  sinon.stub(context, 'createBufferSource').returns(source)
  sinon.stub(context, 'createGain').returns(volume)

  const output = {}
  const buffer = { buffer: { duration: 1 }, playbackRate: 1 }
  const callback = sinon.spy()
  const note = new Note(C4, QN, FFF)
  const sample = new Sample(context, output, note, buffer)

  sample.play(1, callback)

  t.assert(volume.connect.calledWith(output))
  t.equal(volume.gain.value, 1)
  t.assert(volume.gain.linearRampToValueAtTime.calledWith(0, 1))

  t.assert(source.connect.calledWith(volume))
  t.equal(source.buffer, buffer.buffer)
  t.assert(source.start.calledWith(1))
  t.assert(source.stop.calledWith(2))
  t.assert(source.onended.calledOnce)
})

test('Sample / Rest', t => {
  const context = new window.AudioContext()
  const output = {}
  const osc = {
    start: sinon.spy(),
    stop: sinon.stub().callsFake(function() {
      this.onended()
    })
  }
  sinon.stub(context, 'createOscillator').returns(osc)

  const note = new Note(REST, QN, FFF)
  const callback = sinon.spy()
  const sample = new Sample(context, {}, note)

  sample.play(1, callback)

  t.assert(osc.start.calledWith(1), 'starts at start')
  t.assert(osc.stop.calledWith(2), 'stops at stop')
  t.assert(osc.onended.calledOnce, 'calls callback on ended')
})
