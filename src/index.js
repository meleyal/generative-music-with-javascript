import * as constants from './constants'
import * as pattern from './pattern'
import app from './app'
import seq from './seq'
import { createEnv } from './env'
import metronome from './metronome'
import sampler from './sampler'
import reverb from './reverb'
import compressor from './compressor'
import plugins from './plugins'

console.log('%c Tuplet.js v1.0.0 ', 'background: #8f1bf7; color: #fff;')

const env = createEnv()

const tuplet = {
  app,
  metronome: metronome(env),
  phrase: seq,
  music: constants,
  sampler: sampler(env),
  fx: { reverb: reverb(env), compressor: compressor(env) },
  plugins,
}

window.tuplet = tuplet
export default tuplet
