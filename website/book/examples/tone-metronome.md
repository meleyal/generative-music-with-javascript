---
title: Tone Metronome
---

```js
;(async () => {
  const { metronome } = tuplet

  const metro = metronome()

  metro.on('blarg', () => {
    console.log('blarg!')
  })

  metro.start()
})()
```
