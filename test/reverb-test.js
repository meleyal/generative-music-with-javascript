import { expect } from 'chai'
import sinon from 'sinon'
import { Reverb } from '../src/reverb'

describe('Reverb', () => {
  it('create', async () => {
    const context = new window.AudioContext()
    const output = {}
    const node = {
      buffer: null,
      connect: sinon.spy(),
    }
    sinon.stub(context, 'createConvolver').returns(node)

    const reverb = new Reverb(context, output)
    await reverb.load()

    expect(reverb.impulse).to.endWith('flat.wav')
    expect(node.connect).to.have.been.calledWith(output)
    expect(node.buffer).to.have.property('duration')
  })
})
