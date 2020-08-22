import {
  toNoteSequence,
  fromQuantizedNoteSequence,
} from '../../src/plugins/magenta'
import { pitches, durations } from '../../src/constants'

const { g3, a3, b3, c4, d4, e4, f4 } = pitches
const { wn, hn, qn } = durations

describe('Plugins', () => {
  describe('Magenta', () => {
    it('toNoteSequence', () => {
      const notes = [
        [c4, wn],
        [d4, hn],
        [e4, qn],
        [f4, qn],
      ]
      const ns = toNoteSequence(notes)
      expect(ns).to.eql({
        notes: [
          { pitch: 60, velocity: 127, startTime: 0, endTime: 4 },
          { pitch: 62, velocity: 127, startTime: 4, endTime: 6 },
          { pitch: 64, velocity: 127, startTime: 6, endTime: 7 },
          { pitch: 65, velocity: 127, startTime: 7, endTime: 8 },
        ],
        totalTime: 8,
      })
    })

    it.only('fromQuantizedNoteSequence', () => {
      const qns = {
        notes: [
          { pitch: 62, quantizedStartStep: 0, quantizedEndStep: 4 },
          { pitch: 60, quantizedStartStep: 4, quantizedEndStep: 8 },
          { pitch: 59, quantizedStartStep: 8, quantizedEndStep: 10 },
          { pitch: 57, quantizedStartStep: 10, quantizedEndStep: 11 },
          { pitch: 55, quantizedStartStep: 11, quantizedEndStep: 12 },
          { pitch: 60, quantizedStartStep: 12, quantizedEndStep: 14 },
          { pitch: 62, quantizedStartStep: 14, quantizedEndStep: 16 },
        ],
      }
      const notes = fromQuantizedNoteSequence(qns)
      expect(notes).to.eql([
        [d4, wn],
        [c4, wn],
        [b3, hn],
        [a3, qn],
        [g3, qn],
        [c4, hn],
        [d4, hn],
      ])
    })
  })
})
