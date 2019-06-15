---
title: Introduction
---

This book is a <mark>work in progress</mark> guide to composing generative music
with JavaScript.

It's part learning exercise, part experiment. There already exist
[many ways](https://github.com/ciconia/awesome-music/blob/master/README.md#music-programming)
to make generative music, but this book is about learning how to create
something from scratch.

It's also an experiment, in that the results are uncertain. We can fairly easily
write a program to generate noise, and with a little work even something that
sounds vaguely like music, but can we, with just a web browser, JavaScript, and
the Web Audio API, make something that approaches the qualities of "real" music?

## Principles

To help us focus, the book has a few guiding principles:

- **Fun over rigour:** We'll take inspiration from nature and science, but also
  take some artistic license along the way.

- **Composition over sound design:** The focus will be on creating musical
  structures, with sound generation delegated to instrument samples (i.e.
  working at the note level rather than the sample level).

- **Systems over performance:** We're aiming for music that is self evolving and
  requires no interaction from us or the listener (i.e.
  [procedural music](https://en.wikipedia.org/wiki/Generative_music#Creative/procedural)
  in contrast with [live coding](https://en.wikipedia.org/wiki/Live_coding)).

- **Simple building blocks:** We'll build things from the ground up. As we go
  we'll encapsulate our learning into a set of modules we can plug together to
  make more sophisticated music.

## Structure

### Primers

To help us get started, the book begins with short primers on each of its three
subjects:

1. [**Generative:**](primers/generative) Here we define what we mean by
   "generative", and cover how generative processes can be applied to creating
   art and music.

2. [**Music:**](primers/music) Here we explain the building blocks of music:
   melody, harmony and rhythm.

3. [**JavaScript:**](primers/javascript) Here we cover modern JavaScript, and
   introduce the Web Audio API.

### Elements

Next, we move on to look at how to actually program the building blocks of
music. We'll use the tools we create here throughout the rest of the book so we
can express our ideas more fluently.

1. [**Notes:**](elements/notes) TODO: Summary

2. [**Timing:**](elements/timing) TODO: Summary

3. [**Sequencing:**](elements/sequencing) TODO: Summary

4. [**Architecture:**](elements/architecture) TODO: Summary

### Examples

The core of the book is a series of examples exploring the musical potential of
different generative ideas:

1. [**Walker:**](examples/walker) Taking a random walk around the keyboard.

2. More...

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
