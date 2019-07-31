import test from 'tape'
import { Phrase } from '../src/phrase'
import { Note } from '../src/note'

test('Phrase', t => {
  const i = {
    play: (pitch, options, callback) => {
      callback()
    }
  }
  const p = new Phrase()

  p.startAt(0.0)
  p.add([1, 1], [1, 2])
  p.transpose(1)
  p.play(i)

  t.equal(p.start, 0.0)
  t.looseEqual(p.notes, [new Note(2, 1), new Note(2, 2)])
  t.equal(p.playCount, 1)
  t.equal(p.currentTick, 2)
  t.equal(p.currentNote, 0)
  t.end()
})
