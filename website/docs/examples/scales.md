---
title: Scales
---

```js
;(async () => {
  const { sampler, range, toPitch } = gen

  // load piano instrument
  const piano = await sampler('piano')

  // generate range of all playable note numbers (21-108)
  const notes = range(21, 108)

  // cycle through note numbers and play with time offset
  notes.map((n, idx) => {
    const note = toPitch(n)
    piano(note, { start: idx * 0.25, duration: 2 })
  })
})()
```
