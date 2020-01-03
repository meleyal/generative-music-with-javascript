import { expect } from 'chai'
import sinon from 'sinon'
import env from '../src/env'
import sampler from '../src/sampler'
import { pitches, durations, velocities } from '../src/constants'

const { c4, rest } = pitches
const { qn } = durations

describe('Sampler', () => {
  it('plays note', async () => {
    const smp = await sampler('piano')
    const note = [c4, qn]
    const state = { note }
    const node = {
      buffer: null,
      playbackRate: { value: 0 },
      connect: () => null,
      start: sinon.spy(),
      stop: sinon.spy(),
    }
    sinon.stub(env.context, 'createBufferSource').returns(node)

    smp(state)

    expect(node.start).to.have.been.called
    expect(node.stop).to.have.been.called
  })

  it('plays rest', async () => {
    const smp = await sampler('piano')
    const note = [rest, qn]
    const state = { note }
    const node = {
      start: sinon.spy(),
      stop: sinon.spy(),
    }
    sinon.stub(env.context, 'createOscillator').returns(node)

    smp(state)

    expect(node.start).to.have.been.called
    expect(node.stop).to.have.been.called
  })
})
