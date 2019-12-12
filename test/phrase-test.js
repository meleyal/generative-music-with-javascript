import { expect } from 'chai'
import sinon from 'sinon'
import { Sampler } from '../src/sampler'
import { Score } from '../src/score'
import { Phrase } from '../src/phrase'
import { Note } from '../src/note'

describe('Phrase', function() {
  before(function() {
    const phrase = new Phrase()
    phrase.add([
      [
        [1, 1],
        [1, 2],
      ],
    ])
    const score = sinon.createStubInstance(Score)
    const sampler = sinon.createStubInstance(Sampler, {
      play: sinon.stub().callsFake((pitch, options, callback) => {
        callback()
      }),
    })
    sinon.stub(phrase, 'score').get(() => score)
    sinon.stub(phrase, 'instrument').get(() => sampler)
    this.phrase = phrase
  })

  it('plays phrase', function() {
    const { phrase } = this
    phrase.startAt(0)
    phrase.play()
    expect(phrase.start).to.equal(0)
    expect(phrase.playCount).to.equal(1)
    expect(phrase.currentTick).to.equal(2)
    expect(phrase.currentNote).to.equal(0)
  })

  it('parses notes', function() {
    const { phrase } = this
    expect(phrase.notes).to.deep.equal([new Note(1, 1), new Note(1, 2)])
  })

  it('copies notes', function() {
    const { phrase } = this
    const notes = [new Note(1, 1), new Note(1, 2)]
    expect(phrase.copy().notes).to.deep.equal(notes)
  })

  it('takes notes', function() {
    const { phrase } = this
    const notes = [new Note(1, 1), new Note(1, 2)]
    expect(phrase.take(1).notes).to.deep.equal([notes[0]])
  })

  it('reverses notes', function() {
    const { phrase } = this
    const reversedNotes = [new Note(1, 2), new Note(1, 1)]
    expect(phrase.reverse().notes).to.deep.equal(reversedNotes)
  })

  it('shuffle notes', function() {
    const { phrase } = this
    expect(phrase.reverse().notes).to.have.lengthOf(2)
  })

  it('randomizes notes', function() {
    const { phrase } = this
    expect(phrase.randomize().notes).to.have.lengthOf(2)
  })

  it('transposes notes', function() {
    const { phrase } = this
    const transposedNotes = [new Note(2, 1), new Note(2, 2)]
    expect(phrase.transpose(1).notes).to.deep.equal(transposedNotes)
  })
})
