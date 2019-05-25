import { context } from './env'
import { random } from './number'
import { noteNumber, noteName, enharmonic } from './music'
import { ring } from './pattern'
import { metronome } from './metronome'
import { sampleMap } from './sampler'

const gen = {
  context,
  noteNumber,
  noteName,
  enharmonic,
  random,
  ring,
  metronome,
  sampleMap
}

window.gen = gen

export default gen
