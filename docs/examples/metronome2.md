---
title: Metronome 2
---

```js
const { metronome, sampler, music, pattern } = tuplet
const { c4, d4, e4, f4, g4, c5, rest } = music.pitches
const { wn, qn, den, sn, hn, ent } = music.durations

;(async () => {
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

  const piano = await sampler('piano')
  const metro = metronome({ bpm: 60 })
  const melody = pattern(notes, { loop: true })

  // console.log(melody.fold())

  metro.on('tick', (time) => {
    piano.play(melody.at(time))
  })

  metro.start()
})()
```
