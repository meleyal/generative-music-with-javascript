import './banner'
import * as constants from './constants'
import * as part from './part'
import * as phrase from './phrase'
import * as score from './score'

const gen = {
  ...constants,
  ...part,
  ...phrase,
  ...score
}

window.gen = gen
export default gen

const { Score, Part, Phrase, pitches, durations } = gen
const { A0, A1 } = pitches
const { QN } = durations

const _score = new Score(108)

const flute = new Part('piano')

const pitches1 = [A0, A0, A1, A1]
const durations1 = [QN, QN, QN, QN]

const theme = new Phrase()
  .add(pitches1, durations1)
  .startAt(0)
  .repeat(2)

flute.add(theme)

_score.add(flute).play()
