---
title: Canon (Elm v2)
---

```js
;(async () => {
  const { app, sampler, pattern, music } = tuplet
  const { c4, d4, e4, f4, g4, c5, rest } = music.pitches
  const { wn, qn, den, sn, hn, ent } = music.durations

  const model = {
    bpm: 60.0,
    parts: {
      piano: {
        notes: [
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
        ],
        note: null,
        loop: true,
      },
    },
  }

  const update = (model) => {
    const piano = model.parts.piano
    const melody = pattern(piano.notes, { loop: true })

    return (model, time) => {
      piano.note = melody.at(time)
      return model
    }
  }

  const view = async (model) => {
    const piano = await sampler('piano')

    return (model) => {
      console.log(model.parts.piano.note)
      // piano.play(model.parts.piano.note)
    }
    //   console.log(model)
  }

  app(model, update, view)
})()
```
