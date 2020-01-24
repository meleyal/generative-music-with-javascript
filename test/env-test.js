import { expect } from 'chai'
import env from '../src/env'

describe('Env', () => {
  it('context', () => {
    const ctx1 = env.context
    const ctx2 = env.context

    expect(ctx1).to.equal(ctx2)
  })

  it('now', () => {
    const now1 = env.now(0.01)
    const now2 = env.now(0.02)
    const now3 = env.now(0.04)

    expect(now1).to.equal(0.01)
    expect(now2).to.equal(0.01)
    expect(now3).to.equal(0.04)
  })
})
