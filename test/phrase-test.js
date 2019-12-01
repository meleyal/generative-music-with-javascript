import test from 'tape-await'
import sinon from 'sinon'
import { Sampler } from '../src/sampler'
import { Score } from '../src/score'
import { Part } from '../src/part'
import { Phrase } from '../src/phrase'
import { Note } from '../src/note'

test('Phrase', t => {
  const phrase = new Phrase()
  const score = sinon.createStubInstance(Score)
  const sampler = sinon.createStubInstance(Sampler, {
    play: sinon.stub().callsFake((pitch, options, callback) => {
      callback()
    })
  })
  const part = sinon.createStubInstance(Part)
  part.score = score
  part.instrument = sampler

  phrase.part = part
  phrase.startAt(0)
  phrase.add([1, 1], [1, 2])
  phrase.play()

  t.equal(phrase.start, 0)
  t.looseEqual(phrase.notes, [new Note(1, 1), new Note(1, 2)])
  t.equal(phrase.playCount, 1)
  t.equal(phrase.currentTick, 2)
  t.equal(phrase.currentNote, 0)
})

test('Phrase / Transforms', t => {
  const phrase = new Phrase()
  phrase.add([1, 1], [1, 2])

  const notes = [new Note(1, 1), new Note(1, 2)]
  const firstNote = notes[0]
  const reversedNotes = [new Note(1, 2), new Note(1, 1)]
  const transposedNotes = [new Note(2, 1), new Note(2, 2)]

  t.looseEqual(phrase.copy().notes, notes)
  t.looseEqual(phrase.take(1).notes, [firstNote])
  t.looseEqual(phrase.reverse().notes, reversedNotes)
  t.equal(phrase.shuffle().notes.length, notes.length)
  t.equal(phrase.randomize().notes.length, notes.length)
  t.looseEqual(phrase.transpose(1).notes, transposedNotes)
})
