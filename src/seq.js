import * as ptn from './pattern'

const seq = notes => {
  return {
    repeat: n => seq(ptn.repeat(notes, n)),
    quantize: bpm => seq(ptn.quantize(notes, bpm)),
    transpose: n => seq(ptn.transpose(notes, n)),
    fold: () => notes
  }
}

seq.concat = (...seqs) => {
  return seq([...seqs[0].fold(), ...seqs[1].fold()])
}

seq.play = async (notes, inst) => {
  for (const note of notes.fold()) {
    await inst(note)
  }
}

export default seq
