---
title: API Reference
---

This page documents all of the functions available in the Gen.js library.

## Core

### context()

Creates an `AudioContext`, the canvas for all the nodes you create. Repeated
calls to `context()` will always return the same one. If the passed in function
is `async`, we can use `await` in the rest of our code.

```js
context(async audioContext => {
  const foo = await someThing(audioContext)
})
```

## Music

### enharmonic()

TODO: Summary. Convert enharmonic notes in either direction.

```js
enharmonic('C#') // => Db
enharmonic('Db') // => C#
```
