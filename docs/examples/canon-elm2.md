---
title: Canon (Elm v2)
---

```js
const { app, sampler, pattern, music } = tuplet
const { c4, d4, e4, f4, g4, c5, rest } = music.pitches
const { wn, qn, den, sn, hn, ent } = music.durations

const model = async () => {
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

  return {
    bpm: 60.0,
    parts: {
      piano: pattern(notes).loop(),
      trumpet: pattern(notes).transpose(12).loop(),
      bass: pattern(notes).transpose(-12).loop(),
    },
  }
}

const update = async () => {
  return (model, time) => {
    model.now = time.now
    return model
  }
}

const view = async () => {
  const $piano = await sampler('piano')

  return (model) => {
    const { parts, now } = model
    const { piano, trumpet, bass } = parts
    $piano.play(piano.at(now))
    // TODO: play when time.beat = x
    $piano.play(trumpet.at(now))
    $piano.play(bass.at(now))
  }
}

app(model, update, view)
```
