---
title: Scratchpad
---

```js
const score = new Tuplet()

const melody1 = {
  pitches: [A0, A0, A1, A1],
  durations: [QN, QN, QN, QN],
}

const melody2 = {
  pitches: [B0, B0, B1, B1],
  durations: [QN, QN, QN, QN],
}

const piano = score
  .part('piano')
  .phrase('melody1', melody1)
  .phrase('melody2', melody2)

score.on('bar:1', (req, res) => {
  piano.phrase('melody1').play()
})

score.on('bar:5', (req, res) => {
  piano.phrase('melody2').reverse().play()
})

score.every('bar', (req, res) => {
  piano.phrase('melody2').reverse().play()
})

score.play(108)
```

```js
const app = tuplet()

const pitches = [A0, A0, A1, A1]
const durations = [QN, QN, QN, QN]

const piano = app.part('piano').add(pitches, durations)

app.beat(1, (req, res) => {
  piano.play().repeat(2)
})

app.play(108)
app.stop()
```

```js
const { Score, Part, Phrase, pitches, durations } = tuplet
const { A0, A1 } = pitches
const { QN } = durations

const score = new Score(108)

const piano = new Part('piano')

const pitches1 = [A0, A0, A1, A1]
const durations1 = [QN, QN, QN, QN]

const theme = new Phrase().add(pitches1, durations1).startAt(0).repeat(2)

piano.add(theme)

score.add(piano).play()
```
