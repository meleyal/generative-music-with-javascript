---
title: Routing
---

> TODO: Cover how to route audio / signal processing (DSP).

The simplest graph is a single node with zero inputs:

```js
const context = new AudioContext()
```

![](/img/routing/routing-a.svg)

New nodes are not connected by default:

```js
const context = new AudioContext()
const source = context.createBufferSource()
```

![](/img/routing/routing-b.svg)

Nodes are connected by calling their `connect()` method, which connects the
_output(s)_ of the first node to the _input(s)_ of the second:

```js
const context = new AudioContext()
const source = context.createBufferSource()
source.connect(context.destination)
```

![](/img/routing/routing-c.svg)

Multiple nodes can be connected to the same input:

```js
const context = new AudioContext()
const source1 = context.createBufferSource()
const source2 = context.createBufferSource()
const source3 = context.createBufferSource()
source1.connect(context.destination)
source2.connect(context.destination)
source3.connect(context.destination)
```

![](/img/routing/routing-d.svg)

Nodes can be chained together to process audio as it passes through:

```js
const context = new AudioContext()
const source1 = context.createBufferSource()
const source2 = context.createBufferSource()
const source3 = context.createBufferSource()
const volume = context.createGain()
source1.connect(volume)
source2.connect(volume)
source3.connect(volume)
volume.connect(context.destination)
```

![](/img/routing/routing-e.svg)
