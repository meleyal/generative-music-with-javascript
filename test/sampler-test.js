// import { context, clock } from '../src/env'
import { createEnv } from '../src/env'
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
    const env = createEnv()
    const node = {
      buffer: null,
      playbackRate: { value: 0 },
      connect: () => null,
      start: sinon.spy(function () {
        setTimeout(() => {
          this.onended()
        }, 0)
      }),
      stop: sinon.spy(),
    }

    sandbox.stub(env.context, 'createBufferSource').returns(node)
    sandbox.stub(env, 'now').returns(1)

    const piano = await sampler(env, 'piano')
    const note = [c4, qn]
    await piano(note)

    expect(node.start).to.have.been.calledWith(1)
    expect(node.stop).to.have.been.calledWith(2)
  })

  it('plays rest', async () => {
    const env = createEnv()

    const node = {
      start: sinon.spy(function () {
        setTimeout(() => {
          this.onended()
        }, 0)
      }),
      stop: sinon.spy(),
    }
    sandbox.stub(env.context, 'createOscillator').returns(node)
    sandbox.stub(env, 'now').returns(1)

    const piano = await sampler(env, 'piano')
    const note = [rest, qn]
    await piano(note)

    expect(node.start).to.have.been.calledWith(1)
    expect(node.stop).to.have.been.calledWith(2)
  })
})
