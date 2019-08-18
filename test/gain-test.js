import test from 'tape-await'
import sinon from 'sinon'
import { Gain } from '../src/gain'

test('Gain', t => {
  const context = new window.AudioContext()
  const output = {}
  const node = {
    gain: {
      value: 0,
      linearRampToValueAtTime: sinon.spy()
    },
    connect: sinon.spy(),
    stop: sinon.spy()
  }
  sinon.stub(context, 'createGain').returns(node)

  const gain = new Gain(context, output, { stop: 1 })

  t.equal(node.gain.value, 1, 'sets defaults')
  t.assert(node.connect.calledWith(output), 'connects to output')
  t.assert(node.gain.linearRampToValueAtTime.calledWith(0, 1), 'ramps to 0')
})
