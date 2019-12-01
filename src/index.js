import './banner'
import app from './application'
import * as constants from './constants'
import * as array from './array'
import * as music from './music'
import * as metronome from './metronome'
import * as pattern from './pattern'
import { sampler } from './sampler'

const gen = Object.assign(app, {
  ...constants,
  ...array,
  ...music,
  ...metronome,
  ...pattern,
  sampler
})

window.gen = gen
export default gen
