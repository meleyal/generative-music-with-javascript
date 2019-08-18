import test from 'tape-await'
import sinon from 'sinon'
import { Source } from '../src/source'

test('Source', t => {
  const context = new window.AudioContext()
  const output = {}
  const node = {
    start: sinon.spy(),
    stop: sinon.stub().callsFake(function() {
      this.onended()
    }),
    connect: sinon.spy()
  }
  sinon.stub(context, 'createBufferSource').returns(node)

  const source = new Source(context, output, {
    buffer: 1,
    start: 1,
    stop: 2,
    onended: sinon.spy()
  })

  t.equal(node.buffer, 1, 'sets options')
  t.assert(node.connect.calledWith(output), 'connects to output')
  t.assert(node.start.calledWith(1), 'starts at start')
  t.assert(node.stop.calledWith(2), 'stops at stop')
  t.assert(node.onended.calledOnce, 'calls callback on ended')
})
