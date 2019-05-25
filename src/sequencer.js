import { limit, scale } from 'gen'
import { flow, sample, take, map } from 'lodash/fp'
import seedrandom from 'seedrandom'
import cryptoRandomString from 'crypto-random-string'

// const seed = '788215b'
const seed = cryptoRandomString(7)
console.log('seed:', seed)
const rng = new seedrandom(seed)

function random(lower, upper) {
  return lower + Math.floor(rng() * (upper - lower + 1))
}

function shuffle(collection) {
  var index = -1,
    result = [...collection],
    length = result.length,
    lastIndex = length - 1

  while (++index < length) {
    var rand = random(index, lastIndex)
    result[index] = result[rand]
  }

  return result
}

const reverse = arr => [...arr].reverse()

const transpose = (arr, step = 1) => {
  return arr.map(n => n + step)
}

const pattern1 = flow(
  scale('cmaj'),
  limit('piano'),
  shuffle,
  take(8),
  map(n => [n, 127])
)([])

// TODO why does reducing the bpm speed things up?
const bpm = 30
const beat = (bpm / 60) * 1000 // 1000ms = 1s
const bar = beat * 4 // 4000ms = 4s
const resolution = 16
let length = bar / resolution

const patterns = [pattern1, transpose(reverse(pattern1), 7)]

navigator.requestMIDIAccess().then(midi => {
  const outputs = midi.outputs.values()
  const output = outputs.next().value

  let step1 = 0

  setInterval(() => {
    const pattern = 0
    console.log(`p${pattern + 1} : s${step1 + 1} : ${patterns[pattern][step1]}`)

    const [note, velocity] = patterns[pattern][step1]
    output.send([0x90, note, velocity])
    output.send([0x80, note, velocity], window.performance.now() + length)

    if (step1 < patterns[pattern].length - 1) {
      step1 += 1
    } else {
      step1 = 0
    }
  }, length)

  let step2 = 0

  setInterval(() => {
    const pattern = 1
    console.log(`p${pattern + 1} : s${step2 + 1} : ${patterns[pattern][step2]}`)

    const [note, velocity] = patterns[pattern][step2]
    output.send([0x90, note, velocity])
    output.send([0x80, note, velocity], window.performance.now() + length)

    if (step2 < patterns[pattern].length - 1) {
      step2 += 1
    } else {
      step2 = 0
    }
  }, length)
})
