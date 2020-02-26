import { expect } from 'chai'
import { context, clock, connect, master } from '../src/env'

describe('Env', () => {
  it('context', done => {
    const ctx1 = context()

    setTimeout(() => {
      const ctx2 = context()
      expect(ctx1.id).to.eql(ctx2.id)
      done()
    }, 10)
  })

  it('clock', () => {
    const ctx = context()
    const now = clock(ctx)

    expect(now(0)).to.equal(0)
    expect(now(0.01)).to.equal(0)
    expect(now(0.03)).to.equal(0.03)
    expect(now(0.05)).to.equal(0.05)
  })

  it('connect', () => {
    const ctx = context()
    const master = ctx.destination
    const gain = ctx.createGain()
    const source = ctx.createBufferSource()

    // TODO: assert connect is called with correct arg
    expect(connect(master)).to.eql(master)
    expect(connect(gain, master)).to.eql(gain)
    expect(connect(source, gain, master)).to.eql(source)
  })

  it('master', () => {
    const ctx = context()

    expect(master(ctx)).to.eql(ctx.destination)
  })
})
