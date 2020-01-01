import banner from './banner'
import * as constants from './constants'
import app from './app'
import pattern from './pattern'
import sampler from './sampler'

const gen = { app, pattern, sampler, ...constants }

window.gen = gen
export default gen
