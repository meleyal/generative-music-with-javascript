import { expect } from 'chai'
import sinon from 'sinon'
import metronome from '../src/metronome'

describe('Metronome', () => {
  it.only('api', () => {
    const m = metronome()

    const clock = sinon.useFakeTimers()
    const spy = sinon.spy()

    m.on('tick', spy)

    // m.on('tick', tick => {
    //   expect(tick).to.equal(4)
    //   m.stop()
    //   done()
    // })

    m.start(4)

    expect(spy).to.have.been.calledWith(4)

    clock.restore()
  })
})
