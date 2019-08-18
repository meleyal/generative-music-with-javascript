import test from 'tape-await'
import sinon from 'sinon'
import { Oscillator } from '../src/oscillator'

test('Oscillator', t => {
  const context = new window.AudioContext()
  const node = {
    start: sinon.spy(),
    stop: sinon.stub().callsFake(function() {
      this.onended()
    })
  }
  sinon.stub(context, 'createOscillator').returns(node)

  const oscillator = new Oscillator(context, {
    start: 1,
    stop: 2,
    onended: sinon.spy()
  })

  t.assert(node.start.calledWith(1), 'starts at start')
  t.assert(node.stop.calledWith(2), 'stops at stop')
  t.assert(node.onended.calledOnce, 'calls callback on ended')
})
