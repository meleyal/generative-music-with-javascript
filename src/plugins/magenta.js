import seq from '../seq'

export const toNoteSequence = (notes) => {
  let startTime = 0
  let endTime = 0
  let totalTime = 0

  return {
    notes: notes.map((n) => {
      const [pitch, dur, velocity = 127] = n
      startTime = endTime
      endTime += dur
      totalTime += dur
      return { pitch, velocity, startTime, endTime }
    }),
    totalTime,
  }
}

export const fromQuantizedNoteSequence = (qns) => {
  return qns.notes.map((n) => {
    const { pitch, quantizedStartStep, quantizedEndStep } = n
    // const dur = quantizedStartStep + quantizedEndStep
    const dur = quantizedEndStep - quantizedStartStep
    // console.log(pitch, quantizedStartStep, quantizedEndStep)
    return [pitch, dur]
  })
}

let rnn

export default {
  install: () => {
    if (!window.mm) {
      throw new Error(
        'Magenta not found. See https://magenta.tensorflow.org/get-started/'
      )
    }
    rnn = new mm.MusicRNN(
      'https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/basic_rnn'
    )
    // rnn.initialize()
  },
  seq: {
    viz: (notes, id) => {
      const ns = toNoteSequence(notes)
      return new mm.Visualizer(ns, document.getElementById(id))
    },
    continue: async (notes) => {
      const ns = toNoteSequence(notes)
      const qns = mm.sequences.quantizeNoteSequence(ns, 16)
      const continued = await rnn.continueSequence(qns, 32, 1.5)
      return fromQuantizedNoteSequence(continued)
    },
  },
}
