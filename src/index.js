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
