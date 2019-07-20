---
title: Phasing
---

This guide describes how to create Steve Reich's "Piano Phase".

```js
const { sampler, metronome, ring } = gen

;(async () => {
  const piano1 = await sampler('piano')
  const piano2 = await sampler('piano')
  const metro = metronome({ bpm: 80 })

  const notes = ring([
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
  ])

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
