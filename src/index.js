import './banner'
import * as constants from './constants'
import * as fx from './fx'
import * as metronome from './metronome'
import * as music from './music'
import * as score from './score'
import * as part from './part'
import * as phrase from './phrase'
import * as play from './play'
import * as number from './number'
import * as pattern from './pattern'
import * as sampler from './sampler'
import * as samples from './samples'
import * as util from './util'

const gen = {
  ...constants,
  ...fx,
  ...metronome,
  ...music,
  ...number,
  ...pattern,
  ...sampler,
  ...samples,
  ...score,
  ...part,
  ...phrase,
  ...play,
  ...util
}

window.gen = gen
export default gen
