import { run, createContext } from './env'
import { random } from './number'
import { noteNumber, noteName, enharmonic } from './music'
import { ring } from './pattern'
import { metronome, resolution } from './metronome'
import {
  sampler,
  sampler2,
  sampler3,
  sampleMap,
  sampleMap2,
  loadSample
} from './sampler'
import { program } from './program'

const gen = {
  run,
  createContext,
  noteNumber,
  noteName,
  enharmonic,
  random,
  ring,
  metronome,
  resolution,
  sampler,
  sampler2,
  sampler3,
  sampleMap,
  sampleMap2,
  loadSample,
  program
}

window.gen = gen

export default gen
