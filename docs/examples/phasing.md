---
title: Phasing
---

```js
// "Piano Phase" by Steve Reich

const { sampler, metronome, pattern } = gen

;(async () => {
  const piano1 = await sampler('piano')
  const piano2 = await sampler('piano')
  const metro = metronome(80)

  const notes = pattern([
    'E4',
    'F#4',
    'B4',
    'C#5',
    'D5',
    'F#4',
    'E4',
    'C#5',
    'B4',
    'F#4',
    'D5',
    'C#5'
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
