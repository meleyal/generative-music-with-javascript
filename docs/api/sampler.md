---
title: sampler
---

```js
import { sample } from 'lodash'
import { context, sampler } from 'gen'

context(async ac => {
  const piano = await sampler(ac, 'piano')

  // piano('A#1')
  // piano('A#4')
  // piano('C7')

  const notes = ['A4', 'C2', 'D3', 'E7', 'B5']

  setInterval(() => {
    piano(sample(notes))
  }, 200)
})
```
