import _ from 'lodash'
import * as ptn from './pattern'

const seq = (notes) => {
  const curriedPluginMethods = seq.plugins.flatMap((m) => {
    return Object.keys(m).flatMap((key) => {
      return {
        [key]: _.partial(m[key], notes),
      }
    })
  })
  const pluginMethods = Object.assign(...curriedPluginMethods)

  return {
    repeat: (n) => seq(ptn.repeat(notes, n)),
    quantize: (bpm) => seq(ptn.quantize(notes, bpm)),
    transpose: (n) => seq(ptn.transpose(notes, n)),
    fold: () => notes,
    ...pluginMethods,
  }
}

seq.concat = (...seqs) => {
  return seq(seqs.flatMap((s) => s.fold()))
}

seq.play = async (notes, inst) => {
  // const _notes = notes.fold()
  for (const note of notes.fold()) {
    await inst(note)
  }
  // for (let i = 0; i < _notes.length; i++) {
  //   const element = _notes[i];

  // }
}

seq.loop = async (notes, inst) => {
  const _notes = notes.fold()
  const len = _notes.length

  for (let i = 0; i < len; i++) {
    await inst(_notes[i])
    if (i === len - 1) {
      i = 0
    }
  }
}

seq.plugins = []

seq.use = (plugin) => {
  plugin.install()
  seq.plugins.push(plugin.seq)
}

export default seq
