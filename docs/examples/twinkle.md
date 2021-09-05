---
title: Twinkle
---

```js
;(async () => {
  const { metronome, sampler, pattern, plugins } = tuplet
  const { magenta } = plugins

  TWINKLE_TWINKLE = {
    notes: [
      { pitch: 60, startTime: 0.0, endTime: 0.5 },
      { pitch: 60, startTime: 0.5, endTime: 1.0 },
      { pitch: 67, startTime: 1.0, endTime: 1.5 },
      { pitch: 67, startTime: 1.5, endTime: 2.0 },
      { pitch: 69, startTime: 2.0, endTime: 2.5 },
      { pitch: 69, startTime: 2.5, endTime: 3.0 },
      { pitch: 67, startTime: 3.0, endTime: 4.0 },
      { pitch: 65, startTime: 4.0, endTime: 4.5 },
      { pitch: 65, startTime: 4.5, endTime: 5.0 },
      { pitch: 64, startTime: 5.0, endTime: 5.5 },
      { pitch: 64, startTime: 5.5, endTime: 6.0 },
      { pitch: 62, startTime: 6.0, endTime: 6.5 },
      { pitch: 62, startTime: 6.5, endTime: 7.0 },
      { pitch: 60, startTime: 7.0, endTime: 8.0 },
    ],
    totalTime: 8,
  }

  pattern.use(magenta)

  const piano1 = await sampler('piano')
  const piano2 = await sampler('piano')

  const twinkle = await pattern.from(TWINKLE_TWINKLE)
  const continued1 = await twinkle.continue({ loop: true })
  const continued2 = await twinkle.continue({ loop: true })
  // const combined = pattern.concat([twinkle, continued], { loop: true })
  const metro = metronome({ bpm: 60 })

  // console.log(melody.fold())

  metro.on('tick', (time) => {
    piano1.play(continued1.at(time))
    piano2.play(continued2.at(time))
  })

  metro.start()
})()
```
