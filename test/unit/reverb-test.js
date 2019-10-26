import test from 'tape-await'
import sinon from 'sinon'
import { Reverb } from '../../src/reverb'

test('Reverb', async t => {
  const context = new window.AudioContext()
  const output = {}
  const node = {
    buffer: null,
    connect: sinon.spy()
  }
  sinon.stub(context, 'createConvolver').returns(node)

  const reverb = new Reverb(context, output)
  await reverb.load()

  t.assert(reverb.impulse.endsWith('flat.wav'), 'sets defaults')
  t.assert(node.connect.calledWith(output), 'connects to output')
  t.assert(node.buffer.duration, 'loads impulse sample')
})
