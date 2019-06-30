import * as fx from './fx'
import * as music from './music'
import * as number from './number'
import * as pattern from './pattern'
import * as util from './util'
import { metronome } from './metronome'
import { sampler, sampleMap } from './sampler'
import { samples } from './samples'

const gen = {
  fx,
  metronome,
  music,
  number,
  pattern,
  sampleMap,
  sampler,
  samples,
  util
}

window.gen = gen
export default gen
