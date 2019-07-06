---
title: Patterns
---

At it's most basic, we could represent a pattern as an array of notes:

```js
const pattern = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
```

## Steps

To step through the pattern, we just need a counter to keep track of the current
step and use that as an index into the pattern array, then wrap around back to
the start when it reaches the last step:

```js
const pattern = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']

let step = 0

setInterval(() => {
  console.log(`s${step} : ${pattern[step]}`)

  if (step < pattern.length - 1) {
    step += 1
  } else {
    step = 0
  }
}, 1000)
```

Recall that we already have our `metronome()` function. Rather than keeping
track of the step ourselves, can we use metronome to update the step? Recall
that our metronome simply counts beats upwards from 0. It has no concept of
pattern length, so it would work for the first 16 beats then continue past the
end of the pattern.

We could extend our metronome to tick in units of 8, 16 etc. but this would be
limiting as it would prevent combining patterns of different lengths.

It would be nice if we could pass our pattern our incrementing beat, and our
pattern would just know when it needed to loop back around. Enter rings!

## Rings

Rings (or [ring buffers](https://en.wikipedia.org/wiki/Circular_buffer)) are a
special type of array where the values 'loop'. With a regular array, accessing
an element that's out of range returns undefined. Accessing an element beyond
the end of a ringed array 'wraps around' to give you back the element at the
equivalent index from the start of the array. Another way to think about it is
that the ringed array repeats itself.

```js
const array = ['A4', 'B4', 'C4']
array[1] // => B4
array[4] // => undefined

const fakeRing = ['A4', 'B4', 'C4'].concat(['A4', 'B4', 'C4'])
fakeRing[1] // => B4
fakeRing[4] // => B4
```

We can make our own `ring()` function that takes a regular array and returns a
function we can use to access the array like a ring:

```js
const ring = arr => {
  const len = arr.length

  return index => {
    if (typeof index !== 'undefined') {
      return arr[index % len]
    } else {
      return arr
    }
  }
}

const r = ring(['A4', 'B4', 'C4'])

r(0) == r(3) // => true
r(1) == r(4) // => true
r(2) == r(5) // => true
```

We can now plug our newly ringed pattern into our metronome and it will loop
back around:

```js
const { metronome, ring } = gen

const pattern = ring(['A4', 'B4', 'C4', 'D4'])
const metro = metronome(60)

metro.on('tick', tick => {
  pattern(tick) // => A4, B4, C4, D4, A4, B4...
})

metro.start()
```

## Resolution

Resolution defines how fast a pattern plays back, relative to the current bpm,
giving you a way to control the speed of a pattern without altering the overall
speed of the music. This is useful to hear how a pattern sounds at double speed,
half speed, or any resolution the sequencer supports.

Our `metronome()` function already supports different resolutions. We can use
this to sequence two patterns at different speeds:

```js
const { sampler, metronome, ring } = gen

;(async () => {
  const piano = await sampler('piano')
  const metro = metronome(60)
  const pattern1 = ring(['A4', 'B4', 'C4', 'D4'])
  const pattern2 = ring(['E4', 'F4', 'G4', 'A4'])

  metro.on('tick', tick => {
    piano(pattern1(tick)) // => A4, B4, C4, D4, A4, B4...
  })

  metro.on('tick/16', tick => {
    piano(pattern2(tick)) // => E4, F4, G4, A4, E4, F4...
  })

  metro.start()

  // => A4, E4, F4, G4, A4, B4, E4, F4, G4, A4, C4, E4, F4...
})()
```

## Transforms

Being that our pattern is just an array, it's easy to copy and alter it:

```js
const pattern = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']

const pattern2 = pattern.slice(4, 8).reverse()

pattern2 // => ['C5', 'B4', 'A4', 'G4']
```

> TODO: Expand: See Sequencing chapter.

## Generators

> TODO: Research if Generator functions would be useful here.

It would be nice if we could avoid writing out all of our patterns by hand. This
is a book on generative music after all! For this purpose, we'll introduce the
concept of "generators". In this context, a generator is just a name we'll give
to something that produces a pattern (not to be confused with
[JavaScript generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)).

Let's start simple and just generate a random sequence of notes from the C major
scale. As we progress through the book, we'll explore more interesting ways of
generating patterns.

```js
const {
  sampler,
  metronome,
  music,
  util,
  pipe,
  scale,
  limit,
  ring,
  transpose,
  take,
  shuffle
} = gen

;(async () => {
  const piano = await sampler('piano')
  const metro = metronome(120)

  const pattern1 = pipe(
    scale('cmaj'),
    limit('piano'),
    shuffle(),
    take(8)
  )([])

  const pattern2 = pipe(transpose(-5))(pattern1)

  const ring1 = ring(pattern1)
  const ring2 = ring(pattern2)

  metro.on('tick', tick => {
    piano(ring1(tick))
    piano(ring2(tick))
  })

  metro.start()
})()
```
