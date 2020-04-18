---
title: JavaScript
---

This article is a general introduction to the Web Audio API aimed at web
developers who are interested in extending their skills to work with audio and
music applications.

We start by defining what the Web Audio API is and where it came from, then move
on to cover two of its key concepts that may be unfamiliar to web developers:
graphs and timing. Along the way we'll get a feel for the API and what it can
do.

## Background

The Web Audio API is a set of APIs for generating and processing audio in the
browser. It's designed by the
[W3C Audio Working Group](https://www.w3.org/2011/audio/), steered by Google,
Mozilla, and the BBC, and chartered to "add advanced sound and music synthesis
capabilities to the Open Web Platform."

It has been in development
[since 2011](https://www.w3.org/TR/2011/WD-webaudio-20111215/), with the spec
recently reaching v1.0 (with
[v2.0 in the works](https://github.com/WebAudio/web-audio-api-v2)) and becoming
a [W3C Candidate Recomendation](https://www.w3.org/TR/webaudio/). Despite its
candiditate status, it's already well supported in browsers,
[reaching 94% of users](https://caniuse.com/#feat=audio-api) at time of writing.

Common use-cases cited for the Web Audio API are to bring music composition and
audio editing tools (e.g. Ableton Live, Logic Pro) to the browser, as well as
enabling real-time audio for games and VR. Beyond these obvious applications,
bringing sound to the mix opens up another dimension for building a richer, more
sensory web.

## The Web Audio API

The Web Audio API itself is relatively small, and is covered comprehensively by
the
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API),
the go-to source for understanding everything the API can do.

Rather than repeat the documentation here, we'll instead focus on the two
aspects of working with the API that are most different from traditional web
development, namely the audio graph and the timing model. We'll cover just
enough of the API to get up and running creating our own bleeps and bloops.

## Graphs & Nodes

As web developers, we're used to working with the DOM, a tree data structure
representing a hierarchy of nodes that we traverse via parent, sibling and child
relationships. The Web Audio API, on the other hand (and audio apps in general),
organizes nodes in a _graph_ data structure.

[ILLUSTRATION]

_Source_ nodes generate signals and are the inputs of our system. These signals
are routed through _effect_ nodes to modify them in various ways. Everything
ends up at a single _destination_ node, i.e. your speakers, producing the
audible output of our system. This is digital signal processing 101.

It's worth taking a moment to understand the fundamental differences between
tree and graph data structures.
[Graph theory](<https://en.wikipedia.org/wiki/Graph_(abstract_data_type)>) is
it's own rich topic, but a key point to note is that a graph is not a heirarchy,
but is instead like a flow chart or electrical circuit. Each node is 'equal' and
can be connected to any (and many) other nodes, and connections can be circular
(in fact this is essential to produce certain types of effects).

If we think about it, this is not such a new concept. We build pages (nodes)
which we link together to form websites and apps (graphs), which together form
the internet, itself a graph of servers, routers, etc.

You might come across graphs described in more technical terms. Graph nodes are
also know as _vertices_, with the connections between them known as _edges_.
Traversing a graph is done by following its edges. A graph data structure
generally has ways to find which vertices are connected (either directly or via
other vertices), and insert and remove vertices and edges at given points in the
graph. Specifically, the Web Audio API uses a _directed graph_, that is, the
signals flow in a defined direction.

A big part of working with the Web Audio API involves creating nodes and making
sure they are wired up correctly in our graph. So let's see how this works...

### Creating Our Graph

Our graph exists in an `AudioContext`. Everything we do via the Web Audio API
happens in this context, similar to how a `<canvas>` element creates its own
environment for drawing. We'll generally only create a single `AudioContext` per
app and use its factory methods to create the nodes of our graph:

```js
const context = new AudioContext()
let osc = context.createOscillator()
let vol = context.createGain()
osc.connect(vol)
vol.connect(context.destination)
```

Here we create an `AudioContext`, and from it create two different node types.
an `OscillatorNode`, a type of _source_ node, and a `GainNode`, a type of
_effect_ node (we'll cover what these nodes actually do shortly). We connect the
`OscillatorNode` to the `GainNode`, and the `GainNode` to the _destination_ node
of the `AudioContext` i.e. our speakers. Our graph looks as follows (rendered in
Chrome with the [Web Audio Inspector](https://google.github.io/audion/)).

![](/img/primers/javascript/basic-graph.png)

## Nodes

Everything we create in our graph is a node. All nodes implement the
[`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode)
interface, with additional properties and methods specific to their type.

A node's properties can be get and set as you'd expect, but with an additional
super-power: they implement the
[`AudioParam`](https://developer.mozilla.org/en-US/docs/Web/API/AudioParam)
interface, meaning changes to them can be scheduled over time:

```js
const context = new AudioContext()
let osc = context.createOscillator()

// Set frequency now
osc.frequency = 440

// Change frequency in 1 second
oscillator.frequency.setValueAtTime(880, context.currentTime + 1)
```

Nodes all implement the `connect()` method, which is how you connect the output
of one node to the input of others. This chaining is what creates our graph.

Nodes themselves can be grouped into two types: Source Nodes and Effect Nodes.

### Source Nodes

Source nodes are anything that produce an audio signal and are the inputs of our
system. There are several types of source node, but we'll cover just the two
most common here:

- [`OscillatorNode`](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode)
  – for synthesizing our own sounds.
- [`AudioBufferSourceNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode)
  – for playing back recorded sounds (samples).

All source nodes have a `start()` and `stop()` method, which as you might guess,
start and stop them producing their audio signal.

**Note:** Source nodes are single use only, or 'fire and forget'. Once a node
has stopped (either by manually calling `stop()`, or by reaching the end of the
sample it was playing), it cannot be restarted. In creating a piano instrument,
our instinct might be to create 88 nodes, one for each key. Instead, we actually
need to create a new node each time a key is pressed. In this way, our audio
graph is not something fixed that we define ahead of time, but is instead a
dynamic structure that changes as new nodes are created and discarded. Source
nodes are intentionally cheap to create and stopped nodes are automatically
garbage-collected for us.

#### OscillatorNode

To synthesize our own sounds, we'd use an `OscillatorNode`. This produces a
waveform (sine, square, triangle, etc.) oscillating at a given frequency
(specified in hertz). By combining different types of oscillators and effects,
we can produce an infinite range of sounds.

```js
const context = new AudioContext()

const bass = context.createOscillator()
bass.type = 'sine'
bass.frequency = 220
bass.frequency.linearRampToValueAtTime(880, context.currentTime + 2)

const hi = context.createOscillator()
hi.type = 'square'
hi.frequency = 660
hi.frequency.linearRampToValueAtTime(880, context.currentTime + 6)

bass.connect(context.destination)
hi.connect(context.destination)

bass.start()
hi.start()
```

#### AudioBufferSourceNode

To play back recorded sounds (samples), we'd use an `AudioBufferSourceNode`.
This node is responsible for playing back and controlling the sample, but the
sample itself is stored in an `AudioBuffer`. In this way we can load a sample
once, and use it many times.

Loading a sample is a two step process. We first need to fetch it over the
network, then decode it into a format that `AudioBuffer` understands.

The whole process of loading, decoding, and finally playing back a sample looks
as follows:

```js
const context = new AudioContext()

const response = await fetch('http://example.com/meow.mp3')
const arrayBuffer = await response.arrayBuffer()
const audioBuffer = await context.decodeAudioData(arrayBuffer)

const sourceNode = context.createBufferSource()
sourceNode.buffer = audioBuffer
sourceNode.connect(context.destination)
sourceNode.start()
```

### Effect Nodes

We can route an audio signal (coming from a source node) through a wide range of
effect nodes. These modify the incoming signal in some way, producing a new
signal as output. The Web Audio API defines some basic primitives, which can be
combined to create all sorts of effects. The most common ones are:

- [`GainNode`](https://developer.mozilla.org/en-US/docs/Web/API/GainNode) –
  adjusts the volume of a signal. By applying this over time we can also model
  ADSR envelopes (e.g. if a sound starts abruptly or fades in slowly).
- [`BiquadFilterNode`](https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode) -
  cut or boost certain frequencies of a signal
- ConvolverNode - apply reverb to a signal so it sounds like it's in a certain
  physical space e.g. a small room or large hall.
- DelayNode - apply a delay the the outgoing signal, used for all sorts of
  effects from echoes to phasing.
- DynamicsCompressorNode – applies compression to a signal to control its
  dynamic range (e.g. to avoid distortion)
- WaveShaperNode – applies distortion to the signal.
- PannerNode – places the audio in the stereo field (i.e. to the left or right
  in stereo output).

### Destination Node

The detination node is the final node in the chain and represents our audio
output device (i.e. our sound card). This is provided for us as the
`destination` node of our AudioContext. In addition, there's also an
offlineAudioContext with its own destination if we want to render our audio to
disk, for example.

## Timing Model

To understand the timing model, we need to understand under the hood, control
thread = your code, rendering thread = where audio is actually computed.

Timing: has it's own internal clock. Separate from JS clock. JS clock can be
thought of as lazy/relative/imprecise. Usually we'd schedule a callback in
2000ms. JS will schedule this and run when it's done with other tasks, in
roughly 2 seconds.

Web Audio clock is absolute time. Precise. Seconds, not milliseconds! Relative
to the current time.

ILLUSTRATION?

Current time is defined by the AudioContext. It starts counting up from the
moment the AudioContext is created. We can't change it, we can only get it and
schedule things relative to it:

```js
const context = new AudioContext()
context.currentTime // => 0.1234
```

As you can see, the Web Audio API doesn't give us much to work with here. We
need to invent our own timing abstraction to work with beats, bars, time
signatures etc. But that's for a future article!

## Aside: Autoplay Policy

Needs interaction. Needs some hijinx.

- Chrome: `chrome://flags/#autoplay-policy` – no longer working as of v76
- Firefox: enabled by default?
- Safari: ?
- Edge: ?

Can be allowed for specific domains:

- Chrome: chrome://settings/content/sound

References:

- https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#Autoplay_using_the_Web_Audio_API
- https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio

## Conclusion

The WAA is a well defined and adopted/supported technology that's actively
developed. It is and will continue to enable a whole range of previously
native-tethered apps to move to the web.

The WAA provides only the basic primitives. Because it's use-cases are wide.
Depending on what we want to do, we have to build our own abstractions. There
are already a range of libraries for music, game audio, VR?, machine learning.

If we understand two basic concepts: graph/nodes and timing model, we have a
good foundation for working at a higher level and make cool stuff.

## Further Reading

- [JavaScript Systems Music](https://teropa.info/blog/2016/07/28/javascript-systems-music.html)
- [What Is the Web Audio API?](http://teropa.info/blog/2016/08/19/what-is-the-web-audio-api.html)
- [Making Generative Music in the Browser](https://medium.com/@metalex9/making-generative-music-in-the-browser-bfb552a26b0b)
