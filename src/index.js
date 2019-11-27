import './banner'
import * as constants from './constants'
import { sampler } from './sampler'
import * as array from './array'
import * as music from './music'
import * as metronome from './metronome'
import * as pattern from './pattern'

const gen = {
  ...constants,
  ...array,
  ...music,
  ...metronome,
  ...pattern,
  sampler
}

window.gen = gen
export default gen
