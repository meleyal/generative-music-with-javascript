import test from 'tape'
import { metronome } from '../src/metronome'

test('tick/64', t => {
  const metro = metronome(60)
  metro.on('tick/64', tick => t.equal(tick, 1)).start(64)
  t.end()
})

test('tick/32', t => {
  const metro = metronome(60)
  metro.on('tick/32', tick => t.equal(tick, 2)).start(64)
  t.end()
})

test('tick/16', t => {
  const metro = metronome(60)
  metro.on('tick/16', tick => t.equal(tick, 4)).start(64)
  t.end()
})

test('tick/8', t => {
  const metro = metronome(60)
  metro.on('tick/8', tick => t.equal(tick, 8)).start(64)
  t.end()
})

test('tick/4', t => {
  const metro = metronome(60)
  metro.on('tick/4', tick => t.equal(tick, 16)).start(64)
  t.end()
})

test('tick', t => {
  const metro = metronome(60)
  metro.on('tick', tick => t.equal(tick, 16)).start(64)
  t.end()
})

test('chaining', t => {
  const metro = metronome(60)
  metro
    .on('tick', tick => t.equal(tick, 16))
    .on('tick/8', tick => t.equal(tick, 8))
    .start(64)
  t.end()
})
