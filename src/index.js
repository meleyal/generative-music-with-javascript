import banner from './banner'
import * as constants from './constants'
import * as array from './array'
import app from './app'
import pattern from './pattern'
import sampler from './sampler'

const gen = { app, pattern, sampler, array, ...constants }

window.gen = gen
export default gen
