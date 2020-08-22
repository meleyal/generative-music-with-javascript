import * as constants from './constants'
import * as pattern from './pattern'
import seq from './seq'
import { createEnv } from './env'
import sampler from './sampler'
import reverb from './reverb'
import compressor from './compressor'
import plugins from './plugins'

console.log('%c Tuplet.js v1.0.0 ', 'background: #8f1bf7; color: #fff;')

const tuplet = {
  createEnv,
  seq,
  pattern,
  music: constants,
  inst: { sampler },
  fx: { reverb, compressor },
  plugins,
}

window.tuplet = tuplet
export default tuplet
