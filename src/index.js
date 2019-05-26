import { run } from './env'
import { random } from './number'
import { noteNumber, noteName, enharmonic } from './music'
import { ring } from './pattern'
import { metronome, resolution } from './metronome'
import { sampler, sampleMap } from './sampler'

const gen = {
  run,
  noteNumber,
  noteName,
  enharmonic,
  random,
  ring,
  metronome,
  resolution,
  sampler,
  sampleMap
}

window.gen = gen

export default gen
