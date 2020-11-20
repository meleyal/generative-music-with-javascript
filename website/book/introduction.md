---
title: Introduction
---

> Nature, music, and number are all somehow intertwined ... one can be
> transformed into another.
>
> – *[Making Music with Computers](https://www.amazon.com/dp/1439867917), Bill
> Manaris and Andrew R. Brown*

This book is a <mark>work in progress</mark> guide to creating generative music
with JavaScript.

There already exist
[many ways](https://github.com/ciconia/awesome-music/blob/master/README.md#music-programming)
to make generative music, but this book is about learning how to create
something from scratch using JavaScript and the Web Audio API. We can fairly
easily write a program to generate noise, and with a little work even something
that sounds vaguely like music, but can we design systems that produce something
that approaches the qualities of "real" music? Let's find out!

## Principles

To help us focus, the book has a few guiding principles:

- **Fun over rigour:** We'll take inspiration from science and nature, but also
  take some artistic license along the way.

- **Composition over sound design:** The focus will be on creating musical
  structures, with sound generation delegated to instrument samples.

- **Systems over performance:** We're aiming for music that is self evolving and
  requires no interaction from us or the listener (i.e.
  [procedural music](https://en.wikipedia.org/wiki/Generative_music#Creative/procedural)
  in contrast with [live coding](https://en.wikipedia.org/wiki/Live_coding)).

- **Simple building blocks:** We'll build things from the ground up. As we go
  we'll encapsulate our learning into a set of modules we can plug together to
  make more sophisticated music.

## Structure

### Primers

To help us get started, the book begins with short primers on each of its three
subjects:

- [**Generative:**](primers/generative) Here we define what we mean by
  "generative", and cover how generative processes can be applied to creating
  music.

- [**Music:**](primers/music) Here we explain the building blocks of music:
  melody, harmony and rhythm.

- [**JavaScript:**](primers/javascript) Here we cover the music-focused features
  available in JavaScript, namely the Web Audio API.

### Music

Next, we move on to programming the basic building blocks of music:

:::note TODO

List chapters

:::

### Generative

Finally, we go on to develop systems that create music based on different
generative ideas:

:::note TODO

List chapters

:::

## Who This Book Is For

This book is primarily aimed at web developers interested in using their
existing skills to make music. There's nothing truly web-specific about what
we'll learn, we're essentially just using the browser as our development
platform. With that said, it will be useful to have a working knowledge of
JavaScript and related tooling (e.g. Node.js, npm) to get the most of out of
this book.

## Code Examples

All of the code examples in this book are runnable. You can hear the results by
clicking the "Run" button in the corner of each code block.

A lot of the ideas in the book are encapsulated in the
[Tuplet](https://www.npmjs.com/package/tuplet) library. If you want to skip over
how things are implemented and just make music, we'll cross-reference each of
the code examples with their Tuplet counterpart. The full list of available
functions can be found in the [API Reference](api/index).

## Prior Art

This book takes inspiration from the following:

- [The Nature of Code](https://natureofcode.com/) – simulations of natural
  systems.
- [Overtone](https://github.com/overtone/overtone) – collaborative programmable
  music.
- [Sonic Pi](https://sonic-pi.net/) – a code-based music creation and
  performance tool.
- [Tone.js](https://tonejs.github.io/) – a framework for creating interactive
  music in the browser.
- [jMusic](https://explodingart.com/jmusic/jmDocumentation/index.html) – music
  composition in Java.
