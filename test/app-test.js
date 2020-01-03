import { expect } from 'chai'
import sinon from 'sinon'
import app from '../src/app'

describe('App', () => {
  it('use', () => {
    const clock = sinon.useFakeTimers()
    const spy1 = sinon.stub().callsFake((state, next) => {
      next()
    })
    const spy2 = sinon.stub()
    const spy3 = sinon.stub()
    const a = app()

    a.use('test', spy1, spy2)
    a.play()

    clock.tick(1)
    expect(spy1).to.have.been.called

    clock.tick(1)
    expect(spy2).to.have.been.called

    clock.tick(1)
    expect(spy3).not.to.have.been.called

    clock.restore()
  })

  it('play', () => {
    const clock = sinon.useFakeTimers()
    const spy = sinon.spy()
    const a = app()

    a.use('test', spy)
    a.play()

    clock.tick(1)
    expect(spy).to.have.been.calledWith({ tick: 0 })
  })
})
