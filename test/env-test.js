import { createEnv } from '../src/env'

describe('Env', () => {
  it('now', () => {
    const env = createEnv()

    expect(env.now(0)).to.eql(0)
    expect(env.now(0.01)).to.eql(0)
    expect(env.now(0.03)).to.eql(0.03)
    expect(env.now(0.05)).to.eql(0.05)
  })

  it('connect', () => {
    const { context, connect, master } = createEnv()
    const gain = context.createGain()
    const source = context.createBufferSource()

    expect(connect(master)).to.eql(master)
    expect(connect(gain, master)).to.eql(gain)
    expect(connect(source, gain, master)).to.eql(source)
  })
})
