---
title: Canon (Elm)
---

```js
// const { m }

// -- PROGRAM
const main = {
  init: init(),
  update,
  view,
}

// -- DATA
const rests = [[rest, wn]]

const notes = [
  [c4, qn],
  [c4, qn],
  [c4, den],
  [d4, sn],
  [e4, qn],

  [e4, den],
  [d4, sn],
  [e4, den],
  [f4, sn],
  [g4, hn],

  [c5, ent],
  [c5, ent],
  [c5, ent],
  [g4, ent],
  [g4, ent],
  [g4, ent],
  [e4, ent],
  [e4, ent],
  [e4, ent],
  [c4, ent],
  [c4, ent],
  [c4, ent],

  [g4, den],
  [f4, sn],
  [e4, den],
  [d4, sn],
  [c4, hn],
]

// -- MODEL
function init() {
  return {
    bpm: 90.0,
    parts: [
      { inst: 'piano', notes: seq(notes).repeat(2).quantize(bpm) },
      {
        inst: 'piano',
        notes: seq
          .concat(seq(rests), seq(notes).repeat(2).transpose(12))
          .quantize(bpm),
      },
      {
        inst: 'piano',
        notes: seq
          .concat(seq(rests).repeat(2), seq(notes).repeat(2).transpose(-12))
          .quantize(bpm),
      },
    ],
  }
}

// -- MESSAGES
function Tick() {}

// -- UPDATE
function update(msg, model) {
  switch (msg.constructor) {
    case Tick:
      break
    default:
      return model
  }
}

// -- VIEW
function view(model) {
  return e({}, [
    fx([f('compressor', {}), f('reverb', {})]),
    ch([s('piano', {}), s('piano', {})]),
  ])
}
```
