---
title: Phasing
---

```js
// "Piano Phase" by Steve Reich

const { sampler, metronome, pattern, pitches } = gen
const { e4, fs4, b4, cs5, d5 } = pitches

;(async () => {
  const piano1 = await sampler('piano')
  const piano2 = await sampler('piano')
  const metro = metronome(140)

  const notes = pattern([
    e4,
    fs4,
    b4,
    cs5,
    d5,
    fs4,
    e4,
    cs5,
    b4,
    fs4,
    d5,
    cs5
  ]).ring()

  let phase = 0

  metro
    .on('tick/16', (tick, now) => {
      const note = notes(tick)
      piano1(note, { start: now })
      piano2(note, { start: now + phase })
      phase += 0.0009
    })
    .start()
})()
```
