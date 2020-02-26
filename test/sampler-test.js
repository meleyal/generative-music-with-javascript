import { expect } from 'chai'
import sinon from 'sinon'
import { context, clock } from '../src/env'
import sampler from '../src/sampler'
import { pitches, durations } from '../src/constants'

const { c4, rest } = pitches
const { qn } = durations
const sandbox = sinon.createSandbox()

describe('Sampler', () => {
  afterEach(() => {
    sandbox.restore()
  })

  it('plays note', async () => {
    const ctx = context()
    const time = clock(ctx)
    const piano = await sampler('piano', ctx, time, ctx.destination)
    const note = [c4, qn]
    const node = {
      buffer: null,
      playbackRate: { value: 0 },
      connect: () => null,
      start: sinon.spy(),
      stop: sinon.spy()
    }
    sandbox.stub(ctx, 'createBufferSource').returns(node)

    piano(note)

    expect(node.start).to.have.been.called
    expect(node.stop).to.have.been.called
  })

  it('plays rest', async () => {
    const ctx = context()
    const time = clock(ctx)
    const piano = await sampler('piano', ctx, time, ctx.destination)
    const note = [rest, qn]
    const node = {
      start: sinon.spy(),
      stop: sinon.spy()
    }
    sandbox.stub(ctx, 'createOscillator').returns(node)

    piano(note)

    expect(node.start).to.have.been.called
    expect(node.stop).to.have.been.called
  })
})
