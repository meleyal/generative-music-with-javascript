---
title: Canon
---

```js
/**
 * "Row Your Boat"
 *
 * Adapted from https://git.io/fjyri
 */

const { pattern, sampler, reverb, pitches, durations } = gen
const { c4, d4, e4, f4, g4, c5, rest } = pitches
const { wn, qn, den, sn, hn, ent } = durations
const { part, part2, loop, repeat, transpose } = pattern

;(async () => {
  const rests = [[rest, wn]]

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
    [c4, hn]
  ]

  // const app = gen.app()
  // const theme = loop(repeat(notes, 2))
  // const response1 = loop([...rests, ...repeat(transpose(notes, 12), 2)])
  // const response2 = loop([
  //   ...repeat(rests, 2),
  //   ...repeat(transpose(notes, -12), 2)
  // ])
  // const smp = await sampler('piano')
  // const rvb = await reverb('flat')
  // const logger = (state, next) => {
  //   console.log('logger', state)
  //   next()
  // }
  // app.use('piano/1', theme, smp, rvb, logger)
  // app.use('piano/2', response1, smp, logger)
  // app.use('piano/3', response2, smp, logger)
  // app.play()

  // const theme = part(repeat(notes, 2))
  // const response1 = part([...rests, ...repeat(transpose(notes, 12), 2)])
  // const response2 = part([
  //   ...repeat(rests, 2),
  //   ...repeat(transpose(notes, -12), 2)
  // ])
  // const piano = await sampler('piano')
  // theme.on('note', piano).play()
  // response1.on('note', piano).play()
  // response2.on('note', piano).play()

  const theme = part2(repeat(notes, 2))
  const response1 = part2([...rests, ...repeat(transpose(notes, 12), 2)])
  const response2 = part2([
    ...repeat(rests, 2),
    ...repeat(transpose(notes, -12), 2)
  ])
  const piano = await sampler('piano')

  theme(piano)
  response1(piano)
  response2(piano)

  // what about...
  // piano(theme)
  // piano(response1)
  // piano(response2)
})()
```
