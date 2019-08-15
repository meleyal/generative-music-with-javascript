import './banner'
import * as compressor from './compressor'
import * as constants from './constants'
import * as music from './music'
import * as number from './number'
import * as part from './part'
import * as phrase from './phrase'
import * as reverb from './reverb'
import * as sampler from './sampler'
import * as samples from './samples'
import * as score from './score'

const gen = {
  ...compressor,
  ...constants,
  ...music,
  ...number,
  ...part,
  ...phrase,
  ...reverb,
  ...sampler,
  ...samples,
  ...score
}

window.gen = gen
export default gen
