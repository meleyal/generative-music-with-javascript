---
title: Repetition
---

Repetition is a fundamental aspect of music. From individual phrases to entire
song structures, we can find repetition in music at every zoom level.

In this chapter, we'll see how to apply repetition, starting with simple loops,
and building up to creating variation through alternation and layering. Through
repetition, we can define discrete patterns and arrange them to form larger
musical works, and open the door to generating infinitely evolving music. So
let's get started!

## Notes

We already learned how to create repeating notes in the music/timing chapter. To
recap:

```js
const { metronome, sampler, music, phrase } = tuplet
const { c4 } = music.pitches
const { qn } = music.durations

;(async () => {
  const notes = [[c4, qn]]
  const piano = await sampler('piano')
  const metro = metronome({ bpm: 60 })
  const melody = phrase(notes, { loop: true })

  metro.on('tick', (time) => {
    piano.play(melody.at(time))
  })

  metro.start()
})()
```

Though it doesn't look (or sound) like much, it's worth noting that we just
created some infinite music! Left undisturbed, our humble note could in theory
repeat for eternity...

(See also, music/sequencing chapter)

- Metronome / sync to beat
- Note duration

## Loops

Music is built of repeating patterns, often in groups of 4, 8 or 16 beats (i.e.
1, 2 or 4 bars).

- Looping / Rings (see music/phrases)

```js
const { metronome, sampler, music, phrase } = tuplet
const { c4, d4, e4, f4, g4, a4, b4, c5 } = music.pitches
const { qn } = music.durations

;(async () => {
  const notes = [
    [c4, qn],
    [d4, qn],
    [e4, qn],
    [f4, qn],
    [g4, qn],
    [a4, qn],
    [b4, qn],
    [c5, qn],
  ]
  const piano = await sampler('piano')
  const metro = metronome({ bpm: 60 })
  const melody = phrase(notes, { loop: true })

  metro.on('tick', (time) => {
    piano.play(melody.at(time))
  })

  metro.start()
})()
```

## Alternation

- Alternating (ABBA, ABAB, etc.)

```js
const { metronome, sampler, music, phrase } = tuplet
const { c4, d4, e4, f4, g4, a4, b4, c5 } = music.pitches
const { qn } = music.durations

;(async () => {
  const a = phrase([
    [c4, qn],
    [d4, qn],
    [e4, qn],
    [f4, qn],
    [g4, qn],
    [a4, qn],
    [b4, qn],
    [c5, qn],
  ])
  const b = phrase([
    [c5, qn],
    [b4, qn],
    [a4, qn],
    [g4, qn],
    [f4, qn],
    [e4, qn],
    [d4, qn],
    [c4, qn],
  ])
  const piano = await sampler('piano')
  const metro = metronome({ bpm: 60 })
  const melody = phrase.join([a, b], { loop: true })

  metro.on('tick', (time) => {
    piano.play(melody.at(time))
  })

  metro.start()
})()
```

## Layering

- Round > Canon > Fugue

```js
const { metronome, sampler, music, phrase } = tuplet
const { c4, d4, e4, f4, g4, c5, rest } = music.pitches
const { wn, qn, den, sn, hn, ent } = music.durations

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
    [c4, hn],
  ]

  const piano = await sampler('piano')
  const metro = metronome({ bpm: 60 })

  const theme = phrase(notes).repeat(2)

  const responseA = phrase
    .join([phrase(rests), phrase(notes)])
    .repeat(2)
    .transpose(12)

  const responseB = phrase
    .join([phrase(rests).repeat(2), phrase(notes)])
    .repeat(2)
    .transpose(-12)

  metro.on('tick', (time) => {
    piano.play(theme.at(time))
    piano.play(responseA.at(time))
    piano.play(responseB.at(time))
  })

  metro.start()
})()
```

## Phasing

```js
const { metronome, sampler, music, phrase } = tuplet
const { b4, e4, fs4, cs5, d5 } = music.pitches
const { sn } = music.durations

;(async () => {
  const notes = [
    [e4, sn],
    [fs4, sn],
    [b4, sn],
    [cs5, sn],
    [d5, sn],
    [fs4, sn],
    [e4, sn],
    [cs5, sn],
    [b4, sn],
    [fs4, sn],
    [d5, sn],
    [cs5, sn],
  ]

  const piano = await sampler('piano')
  const metro = metronome({ bpm: 60 })
  const melody = phrase(notes, { loop: true })

  let phase = 0

  metro.on('tick', (time) => {
    piano.play(melody.at(time))
    piano.play(melody.at(time + phase))
    phase += 0.000009
  })

  metro.start()
})()
```
