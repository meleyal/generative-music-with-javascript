---
title: instrument
---

The `instrument` library handles sending notes to a given output and channel.

## `inst({ out: MIDIOutput, metro: Object, note: number, velocity: number, length: number }: Object): void`

```js
inst({ out, note: 60, velocity: 80, length: 1 }); // middle C at 80 velocity for 1 beat
```
