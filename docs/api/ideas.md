---
title: Ideas
---

## jQuery/Lodash-style chainable API?

```js
import { midi } from 'gen.midi'
import { inst } from 'gen.inst'
import { notes } from 'gen.music'
import { random } from 'gen.algo'
import { loop, play } from 'gen.metro'

midi().then(out => {
  out
    .connect()
    .inst('piano')
    .notes('cmaj')
    .random()
    .loop(200)

  out
    .connect()
    .inst('piano')
    .notes('cmin')
    .random()
    .loop(200)

  out.play()
})

midi().then(out => {
  const p1 = inst('piano')
    .notes('cmaj')
    .random()
    .loop(200)

  const p2 = inst('piano')
    .notes('cmin')
    .random()
    .loop(200)

  out
    .connect(p1)
    .connect(p2)
    .play()
})
```

## Elm/Redux-style API?

```js
import { createStore } from 'redux'

const initialState = {
  bpm: 60,
  beat: 0,
  key: 'cmaj',
  channels: [
    {
      instrument: 'piano',
      pattern: []
    },
    {
      instrument: 'cello',
      pattern: []
    }
  ]
}

function beat(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { beat: state.beat + 1 })
    default:
      return state
  }
}

let store = createStore(beat, initialState)
store.subscribe(() => console.log(store.getState()))

// UPDATE

setInterval(() => {
  store.dispatch({ type: 'INCREMENT' })
}, 500)
```

## Processing

```js
const midi = new Midi()
const channel = new Channel(1)
const piano = new Piano()

midi.connect(channel)

function loop(bpm) {
  // stuff
}
```

## Rails / MVC

```js
// Model
piano = new Piano()

// Controller
piano.action()

// View
render(piano.pattern)
```

## FP

```js
import {
  range,
  filter,
  chunk,
  map,
  flow,
  indexOf,
  includes,
  flatten
} from 'lodash/fp'

const scales = {
  cmaj: [0, 2, 4, 5, 7, 9, 11]
}

export const limit2 = instrument => {
  let min, max

  switch (instrument) {
    case 'piano':
      min = 21
      max = 109
      break
    default:
      min = 0
      max = 127
  }

  return notes => {
    return filter(n => {
      return n >= min && n <= max
    })(notes)
  }
}

const octaves = notes => {
  return chunk(12)(notes)
}

export const scale = scale => {
  // const notes = range(24, 108)
  const notes = range(0, 200)
  const scaleNotes = flow(
    octaves,
    map(o => {
      // select only the notes in the scale
      return filter(n => {
        const idx = indexOf(n, o)
        return includes(idx, scales[scale])
      })(o)
    }),
    flatten
  )(notes)

  return arr => {
    return scaleNotes
  }
}

import { metro, limit2, scale } from 'gen'
import { flow } from 'lodash/fp'

const notes = flow(
  scale('cmaj'),
  limit2('piano')
)([])

console.log(notes)
```
