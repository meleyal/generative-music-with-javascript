---
title: Notes Test
---

```js
const { Score, Part, Phrase } = tuplet
const { C4 } = tuplet.pitches
const { WN } = tuplet.durations

const score = new Score(60)
const part = new Part('piano')

const pitches = [C4, C4, C4, C4]
const durations = [WN, WN, WN, WN]

const phrase = new Phrase()

phrase.add(pitches, durations)
part.add(phrase)
score.add(part)

score.play()

setInterval(() => {
  console.log('tick')
}, 1000)
```
