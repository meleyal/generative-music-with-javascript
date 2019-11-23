import './banner'
import * as constants from './constants'
import { sampler } from './sampler'

const gen = {
  ...constants,
  sampler
}

window.gen = gen
export default gen
