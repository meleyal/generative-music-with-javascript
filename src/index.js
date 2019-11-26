import './banner'
import * as constants from './constants'
import { sampler } from './sampler'
import * as array from './array'
import * as music from './music'

const gen = {
  ...constants,
  ...array,
  ...music,
  sampler
}

window.gen = gen
export default gen
