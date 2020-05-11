import * as constants from './constants'
import * as pattern from './pattern'
import seq from './seq'
import { createEnv } from './env'
import sampler from './sampler'
import reverb from './reverb'
import compressor from './compressor'

const tuplet = {
  createEnv,
  seq,
  pattern,
  music: constants,
  inst: { sampler },
  fx: { reverb, compressor },
}

window.tuplet = tuplet
export default tuplet
