import seq from '../seq'

export const fromNoteSequence = (ns) => {
  return ns.notes.map((n) => {
    const { pitch, startTime, endTime } = n
    const dur = endTime - startTime
    return [pitch, dur]
  })
}

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

export const fromQuantizedNoteSequence = (qns, options) => {
  const { notes, quantizationInfo } = qns

  return seq(
    notes.map((n) => {
      const { pitch, quantizedStartStep, quantizedEndStep } = n
      const dur =
        (quantizedEndStep - quantizedStartStep) /
        quantizationInfo.stepsPerQuarter
      return [pitch, dur]
    }),
    options
  )
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
  },
  seq: {
    static: {
      from: (ns, options) => {
        return seq(fromNoteSequence(ns), options)
      },
    },
    methods: {
      viz: (notes, id) => {
        const ns = toNoteSequence(notes)
        return new mm.Visualizer(ns, document.getElementById(id))
      },
      toNs: (notes) => {
        return toNoteSequence(notes)
      },
      continue: async (notes, options) => {
        const ns = toNoteSequence(notes)
        const qns = mm.sequences.quantizeNoteSequence(ns, 4)
        const continued = await rnn.continueSequence(qns, 16, 1.5)
        return fromQuantizedNoteSequence(continued, options)
      },
    },
  },
}
