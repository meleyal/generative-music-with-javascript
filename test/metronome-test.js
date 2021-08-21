import { expect } from 'chai'
import { createEnv } from '../src/env'
import metronome from '../src/metronome'

const sandbox = sinon.sandbox.create()

describe.only('metronome', () => {
  it('calls callbacks with current time on each tick', () => {
    const env = createEnv()
    // TODO: mock env with current time
    const metro = metronome(env)()

    const callback1 = sandbox.spy()
    const callback2 = sandbox.spy()

    metro.on('tick', callback1)
    metro.on('tick', callback2)

    metro.start()

    expect(callback1).to.have.beenCalledWith(0)
  })
})
