import test from 'tape'
import sinon from 'sinon'
import { Score } from '../src/score'
import { Part } from '../src/part'
import { Phrase } from '../src/phrase'
import { Note } from '../src/note'

test('Phrase', t => {
  const instrument = {
    play: (pitch, options, callback) => {
      callback()
    }
  }
  const phrase = new Phrase()

  const score = sinon.createStubInstance(Score)
  score.context = { currentTime: 0 }
  const part = sinon.createStubInstance(Part)
  part.score = score
  part.instrument = instrument
  phrase.part = part

  phrase.startAt(0)
  phrase.add([1, 1], [1, 2])
  phrase.transpose(1)
  phrase.play()

  t.equal(phrase.start, 0, 'starts at 0')
  t.looseEqual(phrase.notes, [new Note(2, 1), new Note(2, 2)], 'adds notes')
  t.equal(phrase.playCount, 1, 'tracks play count')
  t.equal(phrase.currentTick, 2, 'tracks current tick')
  t.equal(phrase.currentNote, 0, 'tracks current note')
  t.looseEqual(
    phrase.copy().notes,
    [new Note(2, 1), new Note(2, 2)],
    'copies self'
  )

  const ph1 = new Phrase()
  ph1.add([1, 1], [1, 2])
  t.looseEqual(ph1.take(1).notes, [new Note(1, 1)], 'take')

  const ph2 = new Phrase()
  ph2.add([1, 1], [1, 2])
  t.looseEqual(ph2.reverse().notes, [new Note(1, 2), new Note(1, 1)], 'reverse')

  const ph3 = new Phrase()
  ph3.add([1, 1], [1, 2])
  t.equal(ph3.shuffle().notes.length, 2, 'shuffle')

  const ph4 = new Phrase()
  ph4.add([1, 1], [1, 2])
  t.equal(ph3.randomize().notes.length, 2, 'randomize')

  t.end()
})
