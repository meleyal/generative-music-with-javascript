import test from 'tape-await'
import sinon from 'sinon'
import { Sampler } from '../src/sampler'
import { Note } from '../src/note'
import { pitches, durations, velocities } from '../src/constants'

const { C4, D4, REST } = pitches
const { QN } = durations
const { FFF } = velocities

test('Sampler / Note', async t => {
  const context = new window.AudioContext()
  const sampler = new Sampler(context, context.destination, 'piano')
  const callback = sinon.spy()

  const sourceNode = {
    start: sinon.spy(),
    stop: sinon.stub().callsFake(function() {
      this.onended()
    }),
    connect: () => null
  }
  const gainNode = {
    gain: {
      value: 0,
      linearRampToValueAtTime: () => null
    },
    connect: () => null
  }
  sinon.stub(context, 'createBufferSource').returns(sourceNode)
  sinon.stub(context, 'createGain').returns(gainNode)

  await sampler.load()

  // Note
  sampler.play(new Note(C4, QN, FFF), 1, callback)

  const buffers = sampler.buffers
  const buffersLength = Object.keys(buffers).length
  const note = buffers['C4']
  const duration = note.duration + QN

  t.equal(buffersLength, 84, 'loads samples')
  t.equal(note, sourceNode.buffer, 'plays correct note')
  t.assert(sourceNode.start.calledWith(1), 'starts at offset')
  t.assert(sourceNode.stop.calledWith(duration), 'stops at duration')
  t.assert(callback.calledOnce, 'calls callback on ended')

  // Chord
  sampler.play([new Note(C4, QN, FFF), new Note(D4, QN, 2)], 1, callback)

  // TODO: This should test that both notes are played
  t.equal(sampler.buffers['D4'], sourceNode.buffer, 'plays correct chord notes')
})

test('Sampler / Rest', t => {
  const context = new window.AudioContext()
  const sampler = new Sampler(context, context.destination, 'piano')
  const callback = sinon.spy()
  const oscillator = {
    start: sinon.spy(),
    stop: sinon.stub().callsFake(function() {
      this.onended()
    })
  }
  sinon.stub(context, 'createOscillator').returns(oscillator)

  sampler.play(new Note(REST, QN, FFF), 1, callback)

  t.assert(oscillator.start.calledWith(1), 'starts at offset')
  t.assert(oscillator.stop.calledWith(1 + QN), 'stops at duration')
  t.assert(callback.calledOnce, 'calls callback on ended')
})
