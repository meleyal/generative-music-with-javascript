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

TODO: Example

## enharmonic()

TODO: Summary. Convert enharmonic notes in either direction.

```js
enharmonic('C#') // => Db
enharmonic('Db') // => C#
```

## sampler()

TODO: Summary

TODO: Example

## sampleMap()

TODO: Summary

TODO: Example
