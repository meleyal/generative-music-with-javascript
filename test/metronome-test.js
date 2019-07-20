import test from 'tape'
import { metronome } from '../src/metronome'

test('tick', t => {
  const metro = metronome({ bpm: 60, end: 16 })
  metro
    .on('tick', tick => {
      t.equal(tick, 1)
      t.end()
    })
    .start(15)
})

test('tick/1', t => {
  const metro = metronome({ bpm: 60, end: 64 })
  metro
    .on('tick/1', tick => {
      t.equal(tick, 1)
      t.end()
    })
    .start(63)
})

test('tick/2', t => {
  const metro = metronome({ bpm: 60, end: 32 })
  metro
    .on('tick/2', tick => {
      t.equal(tick, 1)
      t.end()
    })
    .start(31)
})

test('tick/4', t => {
  const metro = metronome({ bpm: 60, end: 16 })
  metro
    .on('tick', tick => {
      t.equal(tick, 1)
      t.end()
    })
    .start(15)
})

test('tick/8', t => {
  const metro = metronome({ bpm: 60, end: 8 })
  metro
    .on('tick/8', tick => {
      t.equal(tick, 1)
      t.end()
    })
    .start(7)
})

test('tick/16', t => {
  const metro = metronome({ bpm: 60, end: 4 })
  metro
    .on('tick/16', tick => {
      t.equal(tick, 1)
      t.end()
    })
    .start(3)
})

test('tick/32', t => {
  const metro = metronome({ bpm: 60, end: 2 })
  metro
    .on('tick/32', tick => {
      t.equal(tick, 1)
      t.end()
    })
    .start(1)
})

test('tick/64', t => {
  const metro = metronome({ bpm: 60, end: 1 })
  metro
    .on('tick/64', tick => {
      t.equal(tick, 1)
      t.end()
    })
    .start(0)
})
