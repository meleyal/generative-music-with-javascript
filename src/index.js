import banner from './banner'
import * as constants from './constants'
import * as pattern from './pattern'
import * as env from './env'
import sampler from './sampler'
import reverb from './reverb'
import compressor from './compressor'

const gen = {
  env,
  sampler,
  reverb,
  compressor,
  pattern,
  ...constants
}

window.gen = gen
export default gen
