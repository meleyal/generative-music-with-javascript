import banner from './banner'
import * as constants from './constants'
import app from './app'
import * as pattern from './pattern'
import sampler from './sampler'
import reverb from './reverb'
import compressor from './compressor'

const gen = { app, sampler, reverb, compressor, pattern, ...constants }

window.gen = gen
export default gen
