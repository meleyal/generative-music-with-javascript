---
title: Scratchpad
---

```js
const { sampler, metronome, pattern } = gen

;(async () => {
  const piano = await sampler('piano')
  const metro = metronome(60)

  let p1 = pattern(['C2', 'E2', 'G2', 'B2', 'C2', 'E2', 'G2', 'B2'])
    .shuffle()
    .ring()

  let p2 = pattern(['C3', 'E2', 'G3', 'A2', 'B3', 'C3', 'A4', 'G3', 'B3'])
    .shuffle()
    .ring()

  let p3 = pattern(['C4', 'A4', 'G4', 'B2', 'C4', 'E4', 'G2', 'B4'])
    .shuffle()
    .ring()

  let p4 = pattern(['C5', 'E3', 'G5', 'B5', 'C2', 'E4', 'G2', 'B5', 'A3'])
    .shuffle()
    .ring()

  metro
    .on('tick/1', (tick, now) => {
      p1 = p1()
        .shuffle()
        .ring()
      p2 = p2()
        .shuffle()
        .ring()
      p3 = p3()
        .shuffle()
        .ring()
      p4 = p4()
        .shuffle()
        .ring()
    })
    .on('tick/4', (tick, now) => {
      piano(p1(tick))
    })
    .on('tick/2', (tick, now) => {
      piano(p2(tick))
    })
    .on('tick/32', (tick, now) => {
      piano(p3(tick))
    })
    .on('tick/16', (tick, now) => {
      piano(p3(tick))
    })
    .on('tick/8', (tick, now) => {
      piano(p4(tick))
    })
    .start()
})()
```
