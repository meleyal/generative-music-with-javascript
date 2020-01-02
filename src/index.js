import banner from './banner'
import * as constants from './constants'
import app from './app'
import * as pattern from './pattern'
import sampler from './sampler'

const gen = { app, sampler, pattern, ...constants }

window.gen = gen
export default gen
