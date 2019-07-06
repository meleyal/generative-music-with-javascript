import * as fx from './fx'
import * as metronome from './metronome'
import * as music from './music'
import * as number from './number'
import * as pattern from './pattern'
import * as sampler from './sampler'
import * as samples from './samples'
import * as util from './util'

const gen = {
  ...fx,
  ...metronome,
  ...music,
  ...number,
  ...pattern,
  ...sampler,
  ...samples,
  ...util
}

window.gen = gen
export default gen
