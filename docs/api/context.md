---
title: context
---

## `context(async fn): AudioContext`

Creates an [`AudioContext`]. Repeated calls to `context` will always return the
same `AudioContext`. The passed in `fn` should be [`async`] so we can use
[`await`] in the rest of our code.

```js
import { context } from 'gen'

context(async audioContext => {
  const foo = await someThing(audioContext)
})
```

[`audiocontext`]: https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
[`async`]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
[`await`]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
