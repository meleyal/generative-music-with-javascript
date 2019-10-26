import test from 'tape-await'
import sinon from 'sinon'
import { Compressor } from '../../src/compressor'

test('Compressor', t => {
  const context = new window.AudioContext()
  const output = {}
  const node = {
    threshold: { value: 0 },
    knee: { value: 0 },
    ratio: { value: 0 },
    attack: { value: 0 },
    release: { value: 0 },
    connect: sinon.spy()
  }
  sinon.stub(context, 'createDynamicsCompressor').returns(node)

  const compressor = new Compressor(context, output, {
    threshold: 100
  })

  t.equal(node.knee.value, 40, 'sets defaults')
  t.equal(node.threshold.value, 100, 'sets options')
  t.assert(node.connect.calledWith(output), 'connects to output')
})
