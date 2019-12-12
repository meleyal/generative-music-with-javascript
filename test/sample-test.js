import { expect } from 'chai'
import { createSandbox } from 'sinon'
import { Sample } from '../src/sample'
import { Note } from '../src/note'
import { pitches, durations, velocities } from '../src/constants'

const sandbox = createSandbox()
const context = new window.AudioContext()

const { c4, rest } = pitches
const { qn } = durations
const { fff } = velocities

describe('Sample', () => {
  afterEach(() => {
    sandbox.restore()
  })

  it('note', () => {
    const source = {
      start: sandbox.spy(),
      stop: sandbox.stub().callsFake(function() {
        this.onended()
      }),
      playbackRate: { value: 0 },
      connect: sandbox.spy(),
    }
    const volume = {
      gain: {
        value: 0,
        linearRampToValueAtTime: sandbox.spy(),
      },
      connect: sandbox.spy(),
    }
    sandbox.stub(context, 'createBufferSource').returns(source)
    sandbox.stub(context, 'createGain').returns(volume)

    const output = {}
    const buffer = { buffer: { duration: 1 }, playbackRate: 1 }
    const callback = sandbox.spy()
    const note = new Note(c4, qn, fff)
    const sample = new Sample(context, output, note, buffer)

    sample.play(1, callback)

    expect(volume.connect).to.have.been.calledWith(output)
    expect(volume.gain.value).to.equal(1)
    expect(volume.gain.linearRampToValueAtTime).to.have.been.calledWith(0, 1)
    expect(source.connect).to.have.been.calledWith(volume)
    expect(source.buffer).to.equal(buffer.buffer)
    expect(source.start).to.have.been.calledWith(1)
    expect(source.stop).to.have.been.calledWith(2)
    expect(source.onended).to.have.been.calledOnce
  })

  it('rest', () => {
    const osc = {
      start: sandbox.spy(),
      stop: sandbox.stub().callsFake(function() {
        this.onended()
      }),
    }
    sandbox.stub(context, 'createOscillator').returns(osc)

    const note = new Note(rest, qn, fff)
    const callback = sandbox.spy()
    const sample = new Sample(context, {}, note)

    sample.play(1, callback)

    expect(osc.start).to.have.been.calledWith(1)
    expect(osc.stop).to.have.been.calledWith(2)
    expect(osc.onended).to.have.been.calledOnce
  })
})
