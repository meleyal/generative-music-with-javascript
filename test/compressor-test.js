import { expect } from 'chai'
import sinon from 'sinon'
import { Compressor } from '../src/compressor'

describe('Compressor', () => {
  const context = new window.AudioContext()
  const output = {}
  const node = {
    threshold: { value: 0 },
    knee: { value: 0 },
    ratio: { value: 0 },
    attack: { value: 0 },
    release: { value: 0 },
    connect: sinon.spy(),
  }
  sinon.stub(context, 'createDynamicsCompressor').returns(node)

  const compressor = new Compressor(context, output, {
    threshold: 100,
  })

  it('create', () => {
    expect(node.knee.value).to.equal(40)
    expect(node.threshold.value).to.equal(100)
    expect(node.connect).to.have.been.calledWith(output)
  })
})
