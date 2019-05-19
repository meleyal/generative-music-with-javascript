---
title: API Reference
---

This page documents all of the functions available in the
[`gen`](https://www.npmjs.com/package/@meleyal/gen) library.

## context()

Creates an `AudioContext`, the canvas for all the nodes you create. Repeated
calls to `context()` will always return the same one. If the passed in function
is `async`, we can use `await` in the rest of our code.

```js
context(async audioContext => {
  const foo = await someThing(audioContext)
})
```

## ring()

TODO: Summary

```js
const pattern = ring(['a', 'b', 'c', 'd'])

pattern(0) // => 'a'
pattern(1) // => 'b'
pattern(2) // => 'c'
pattern(3) // => 'd'
pattern(4) // => 'a'
pattern() // => ['a', 'b', 'c', 'd']
```

## metronome()

TODO: Summary

```js
const context = new AudioContext()

const metro = metronome(context, 60)

metro.on('tick', tick => {
  console.log('tick', tick)
})

metro.on('tick/16', tick => {
  console.log('tick/16', tick)
})

metro.start()
```

## enharmonic()

TODO: Summary. Convert enharmonic notes in either direction.

```js
enharmonic('C#') // => Db
enharmonic('Db') // => C#
```

## noteName()

TODO: Summary

```js
console.log(noteName(12)) // => C0
console.log(noteName(14)) // => D0
console.log(noteName(21)) // => A0
console.log(noteName(24)) // => C1
console.log(noteName(60)) // => C4
console.log(noteName(80)) // => G#5/Ab5
console.log(noteName(107)) // => B7
```

## noteNumber()

TODO: Summary

```js
console.log(noteNumber('C0')) // => 12
console.log(noteNumber('C4')) // => 60
console.log(noteNumber('Gb4')) // => 66
console.log(noteNumber('G4')) // => 67
console.log(noteNumber('A4')) // => 69
console.log(noteNumber('A#4')) // => 70
console.log(noteNumber('Bb4')) // => 70
console.log(noteNumber('B4')) // => 71
```

## sampler()

TODO: Summary

TODO: Example

## sampleMap()

TODO: Summary

TODO: Example

## random()

TODO: Summary

```js
const rng = random(21, 108)

rng() // => 21
rng() // => 88
```
