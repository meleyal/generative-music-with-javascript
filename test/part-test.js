import { expect } from 'chai'
import sinon from 'sinon'
import { Part } from '../src/part'
import { Phrase } from '../src/phrase'

describe('Part', () => {
  const part = new Part('piano')
  const phrase1 = sinon.createStubInstance(Phrase)
  const phrase2 = sinon.createStubInstance(Phrase)

  part
    .add(phrase1)
    .add(phrase2)
    .play()

  it('create', () => {
    expect(part.instrument).to.equal('piano')
    expect(phrase1.part).to.equal(part)
    expect(phrase2.part).to.equal(part)
    expect(part.phrases).to.deep.equal([phrase1, phrase2])
    expect(phrase1.play).to.have.been.calledOnce
    expect(phrase2.play).not.to.have.been.called
  })
})
