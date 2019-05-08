---
title: midi
---

The `midi` library abstracts some of the details of working with the Web MIDI
API.

## `midi(): Promise<MIDIOutput>`

```js
midi().then(out => out.send(...));
```
