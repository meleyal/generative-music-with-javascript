import test from 'tape-await'
import sinon from 'sinon'
import { Sampler } from '../src/sampler'
import { Note } from '../src/note'
import { Compressor } from '../src/compressor'
import { pitches, durations, velocities } from '../src/constants'

const { C4, D4, REST } = pitches
const { QN } = durations
const { FFF } = velocities

test('Sampler', async t => {
  const context = new window.AudioContext()
  const compressor = new Compressor(context)
  const sampler = new Sampler(context, 'piano', compressor)

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

  // Note
  sampler.play(new Note(C4, QN, FFF), 1, noteCallback)
  t.equal(Object.keys(sampler.buffers).length, 84, 'loads samples')
  t.equal(gainNode.gain.value, 1, 'sets volume')
  t.equal(sampler.buffers['C4'], sourceNode.buffer, 'plays correct note')
  t.assert(sourceNode.start.calledWith(1), 'note starts at offset')
  t.assert(
    sourceNode.stop.calledWith(sampler.buffers['C4'].duration + QN),
    'note stops at duration'
  )
  t.assert(noteCallback.calledOnce, 'note calls callback on ended')

  // Chord
  sampler.play([new Note(C4, QN, FFF), new Note(D4, QN, 2)], 1, noteCallback)
  // TODO: This should test that both notes are played
  t.equal(sampler.buffers['D4'], sourceNode.buffer, 'plays correct chord notes')

  // Rest
  sampler.play(new Note(REST, QN, FFF), 1, restCallback)
  t.assert(oscillator.start.calledWith(1), 'rest starts at offset')
  t.assert(oscillator.stop.calledWith(1 + QN), 'rest stops at duration')
  t.assert(restCallback.calledOnce, 'rest calls callback on ended')
})
