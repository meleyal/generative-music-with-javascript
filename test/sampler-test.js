import { expect } from 'chai'
import { createSandbox } from 'sinon'
import { Sampler } from '../src/sampler-class'
import { Sample } from '../src/sample'
import { Note } from '../src/note'
import { pitches, durations, velocities } from '../src/constants'

const sandbox = createSandbox()
const context = new window.AudioContext()
const sampler = new Sampler(context, context.destination, 'piano')

const { c4, d4 } = pitches
const { qn } = durations

describe('Sampler', () => {
  beforeEach(() => {
    sandbox.stub(Sample.prototype, 'play')
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('loads samples', async () => {
    await sampler.load()
    expect(Object.keys(sampler.buffers)).to.have.lengthOf(88)
  })

  it('plays note', () => {
    const note1 = new Note(c4, qn)
    const time = 1
    const callback = sandbox.spy()
    sampler.play(note1, time, callback)
    expect(Sample.prototype.play.firstCall.thisValue.note).to.equal(note1)
    expect(Sample.prototype.play).to.have.been.calledWith(time, callback)
  })

  it('plays chord', () => {
    const note1 = new Note(c4, qn)
    const note2 = new Note(d4, qn)
    const time = 1
    const callback = sandbox.spy()
    sampler.play([note1, note2], time, callback)
    expect(Sample.prototype.play.firstCall.thisValue.note).to.equal(note1)
    expect(Sample.prototype.play.secondCall.thisValue.note).to.equal(note2)
  })
})
