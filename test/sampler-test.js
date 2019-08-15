import test from 'tape-await'
import sinon from 'sinon'
import { Sampler } from '../src/sampler'
import { pitches, durations } from '../src/constants'

const { C4, D4 } = pitches
const { QN } = durations

test('Sampler', async t => {
  const context = new window.AudioContext()
  const sampler = new Sampler(context, 'piano')
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
  const oscillator = {
    start: sinon.spy(),
    stop: sinon.stub().callsFake(function() {
      this.onended()
    }),
    connect: () => null
  }
  sinon.stub(context, 'createBufferSource').returns(sourceNode)
  sinon.stub(context, 'createGain').returns(gainNode)
  sinon.stub(context, 'createOscillator').returns(oscillator)
  const noteCallback = sinon.spy()
  const restCallback = sinon.spy()

  await sampler.load()

  const cNote = sampler.buffers.find(n => n.note === 'C4')
  const dNote = sampler.buffers.find(n => n.note === 'D4')

  // Note
  sampler.play(C4, { offset: 1, duration: QN, volume: 2 }, noteCallback)
  t.equal(sampler.buffers.length, 84, 'loads samples')
  t.equal(gainNode.gain.value, 2, 'sets volume')
  t.equal(cNote.buffer, sourceNode.buffer, 'plays correct note')
  t.assert(sourceNode.start.calledWith(1), 'note starts at offset')
  t.assert(
    sourceNode.stop.calledWith(cNote.buffer.duration + QN),
    'note stops at duration'
  )
  t.assert(noteCallback.calledOnce, 'note calls callback on ended')

  // Chord
  sampler.play([C4, D4], { offset: 1, duration: QN, volume: 2 }, noteCallback)
  // TODO: This should test that both notes are played
  t.equal(dNote.buffer, sourceNode.buffer, 'plays correct chord notes')

  // Rest
  sampler.play(null, { offset: 1, duration: QN, volume: 2 }, restCallback)
  t.assert(oscillator.start.calledWith(1), 'rest starts at offset')
  t.assert(oscillator.stop.calledWith(1 + QN), 'rest stops at duration')
  t.assert(restCallback.calledOnce, 'rest calls callback on ended')
})
