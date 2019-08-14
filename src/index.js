import './banner'
import * as constants from './constants'
import * as fx from './fx'
import * as music from './music'
import * as score from './score'
import * as part from './part'
import * as phrase from './phrase'
import * as number from './number'
import * as sampler from './sampler'
import * as samples from './samples'
import * as util from './util'

const gen = {
  ...constants,
  ...fx,
  ...music,
  ...number,
  ...sampler,
  ...samples,
  ...score,
  ...part,
  ...phrase,
  ...util
}

window.gen = gen
export default gen
