import banner from './banner'
import * as constants from './constants'
import score from './score'
import part from './part'
import phrase from './phrase'

const gen = { ...constants, score, part, phrase }

window.gen = gen
export default gen
