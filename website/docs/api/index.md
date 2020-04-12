---
title: API Reference
---

This page documents all of the functions available in the
[Tuplet](https://www.npmjs.com/package/@meleyal/tuplet) library.

## context()

TODO: Summary: Creates an `AudioContext`, the canvas for all the nodes you
create. Repeated calls to `run()` will always return the same one. If the passed
in function is `async`, we can use `await` in the rest of our code.

```js
context() // => AudioContext
```

## compressor()

TODO: Summary

```js
// TODO: Example
```

## enharmonic()

TODO: Summary. Convert enharmonic notes in either direction.

```js
enharmonic('C#') // => Db
enharmonic('Db') // => C#
```

## limit()

TODO: Summary

```js
// TODO: Example
```

## metronome()

TODO: Summary
https://github.com/overtone/overtone/blob/f6d414f884f1b6d3166195b49276174efddf2cf2/src/overtone/music/rhythm.clj

```js
const context = new AudioContext()

const metro = metronome(context, 60)

metro.on('tick', (tick) => {
  console.log('tick', tick)
})

metro.on('tick/16', (tick) => {
  console.log('tick/16', tick)
})

metro.start()
```

## noteName()

TODO: Summary

```js
noteName(12) // => C0
noteName(14) // => D0
noteName(21) // => A0
noteName(24) // => C1
noteName(60) // => C4
noteName(80) // => G#5/Ab5
noteName(107) // => B7
```

## noteNumber()

TODO: Summary

```js
noteNumber('C0') // => 12
noteNumber('C4') // => 60
noteNumber('Gb4') // => 66
noteNumber('G4') // => 67
noteNumber('A4') // => 69
noteNumber('A#4') // => 70
noteNumber('Bb4') // => 70
noteNumber('B4') // => 71
```

## pipe()

TODO: Summary

```js
// TODO: Example
```

## random()

TODO: Summary

```js
const generator = random(21, 108)

generator() // => 21
generator() // => 88
```

## randomize()

TODO: Summary

```js
randomize(1, 10)([1, 2, 3, 4]) // => [9, 4, 6, 2]
```

## reverb()

TODO: Summary

```js
// TODO: Example
```

## reverse()

TODO: Summary

```js
reverse()([1, 2, 3, 4]) // => [4, 3, 2, 1]
```

## ring()

TODO: Summary

Credit: Sonic Pi

```js
const pattern = ring(['a', 'b', 'c', 'd'])

pattern(0) // => 'a'
pattern(1) // => 'b'
pattern(2) // => 'c'
pattern(3) // => 'd'
pattern(4) // => 'a'
pattern() // => ['a', 'b', 'c', 'd']
```

## sample()

TODO: Summary

```js
const { sample } = tuplet

;(async () => {
  const context = new AudioContext()
  const s = await sample(context, '{{PACKAGE_URL}}/samples/piano/c4.mp3')
  s.connect(context.destination)
  s.start()
})()
```

## sampleMap()

TODO: Summary

TODO: Example

## sampler()

TODO: Summary

```js
tuplet.run(async (context) => {
  const piano = await tuplet.sampler(
    context,
    tuplet.sampleMap('{{PACKAGE_URL}}/samples/piano/')
  )

  // Single C note
  piano('C4', { volume: 0.5 })

  // C major chord
  piano(['C4', 'E4', 'G4'], { volume: 0.8, duration: 2 })
})
```

## scale()

TODO: Summary

```js
// TODO: Example
```

## shuffle()

TODO: Summary

```js
shuffle()([1, 2, 3, 4]) // => [3, 2, 1, 4]
```

## take()

TODO: Summary

```js
take(2)([1, 2, 3, 4]) // => [1, 2]
```

## transpose()

TODO: Summary

```js
transpose(1)([1, 2, 3, 4]) // => [2, 3, 4, 5]
```
