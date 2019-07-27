---
title: Introduction
---

> Nature, music, and number are all somehow intertwined ... one can be
> transformed into another.
>
> _[Making Music with Computers](https://www.amazon.com/dp/1439867917), Bill
> Manaris and Andrew R. Brown_

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
  art and music

- [**Music:**](primers/music) Here we explain the building blocks of music:
  melody, harmony and rhythm.

- [**JavaScript:**](primers/javascript) Here we cover modern JavaScript, and
  introduce the Web Audio API.

### Music

Next, we move on to programming the basic building blocks of music:

- Notes
- Scales
- Timing
- Sequencing

### Generative

Finally, we go on to develop systems that create music based on different
generative ideas:

- Randomness and probability
- Grammars (L-Systems)
- Recursion (Fractals, Cantor Set...)
- Evolution (Game of Life, Cellular Automata)
- Data
- Rules

## Code Examples

All the code examples in this book are runnable. You should be able to hear the
results (or see them in the console) when hitting the `Run` bottom in the
bottom-right corner of each code snippet.

To avoid repeating big chunks of code we've already seen, once a concept has
been introduced, we'll import relevant functions from the
[Gen.js](https://www.npmjs.com/package/@meleyal/gen) library (it's present on
every page as the `gen` global). The actual implementation might differ from the
presented examples as the library evolves, but the principles should remain
similar.

## Gen.js Library

A lot of the ideas are encapsulated in the Gen.js library. If you want to skip
over how things are implemented and just make music, we'll cross-reference each
of the code examples with their Gen.js counterpart. The full list of available
functions can be found in the [API Reference](api/index).
