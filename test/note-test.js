import { expect } from 'chai'
import { Note } from '../src/note'
import { pitches, durations, velocities } from '../src/constants'

const { c4 } = pitches
const { qn, sn, wn } = durations
const { fff } = velocities

describe('Note', () => {
  it('create', () => {
    const n = new Note(c4, qn, fff)
    expect(n.pitch).to.equal(60)
    expect(n.duration).to.equal(1.0)
    expect(n.velocity).to.equal(127)
    expect(n.name).to.equal('c4')
    expect(n.volume).to.equal(1)
  })

  it('quantizes note durations', () => {
    const n = new Note(c4, qn, fff)

    // Sixteenth note
    n.duration = sn
    expect(n.quantize(60).duration).to.equal(0.25)
    n.duration = sn
    expect(n.quantize(120).duration).to.equal(0.125)
    n.duration = sn
    expect(n.quantize(240).duration).to.equal(0.0625)

    // Quarter note
    n.duration = qn
    expect(n.quantize(60).duration).to.equal(1.0)
    n.duration = qn
    expect(n.quantize(120).duration).to.equal(0.5)
    n.duration = qn
    expect(n.quantize(240).duration).to.equal(0.25)

    // Whole note
    n.duration = wn
    expect(n.quantize(60).duration).to.equal(4.0)
    n.duration = wn
    expect(n.quantize(120).duration).to.equal(2.0)
    n.duration = wn
    expect(n.quantize(240).duration).to.equal(1.0)
  })
})
