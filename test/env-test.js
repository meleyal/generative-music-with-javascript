import { expect } from 'chai'
import sinon from 'sinon'
import { createEnv } from '../src/env'

const sandbox = sinon.createSandbox()

describe('Env', () => {
  afterEach(() => {
    sandbox.restore()
  })

  it('now', () => {
    const env = createEnv()

    expect(env.now(0)).to.equal(0)
    expect(env.now(0.01)).to.equal(0)
    expect(env.now(0.03)).to.equal(0.03)
    expect(env.now(0.05)).to.equal(0.05)
  })

  it('connect', () => {
    const { context, connect, master } = createEnv()
    const gain = context.createGain()
    const source = context.createBufferSource()

    // TODO: assert connect is called with correct arg
    expect(connect(master)).to.eql(master)
    expect(connect(gain, master)).to.eql(gain)
    expect(connect(source, gain, master)).to.eql(source)
  })
})
