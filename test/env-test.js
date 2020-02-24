import { expect } from 'chai'
import { context, clock, connect } from '../src/env'

describe.only('Env', () => {
  it('context', () => {
    const ctx1 = context()
    const ctx2 = context()

    expect(ctx1.id).to.eql(ctx2.id)
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
    const gain = ctx.createGain()
    const source = ctx.createBufferSource()

    expect(connect(ctx.destination)).to.eql(ctx.destination)
    expect(connect(gain, ctx.destination)).to.eql(ctx.destination)
    expect(connect(gain, source, ctx.destination)).to.eql(ctx.destination)
  })
})
