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
sounds vaguely like music, but can we make something that approaches the
qualities of "real" music?

To help us focus, the book has a few guiding principles:

- **Fun over rigour:** We'll take inspiration from nature and science, but also
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

## Structure

To help us get started, the book begins with short primers on each of its three
subjects:

1. [**Generative:**](primers/generative) Here we define what we mean by
   "generative", and cover how generative processes can be applied to creating
   art and music.

2. [**Music:**](primers/music) Here we explain the building blocks of music:
   melody, harmony and rhythm.

3. [**JavaScript:**](primers/javascript) Here we cover modern JavaScript,
   introduce the Web Audio API, and explain why programming for the browser is a
   good thing.

With that under our belts, the main part of the book guides us through applying
these ideas to making some noise, and potentially, music! We begin by making
some useful musical building blocks, and progress to explore the musical
potential of different generative ideas:

1. [**Sampler:**](examples/sampler) TODO: Summary

2. [**Metronome:**](examples/metronome) TODO: Summary

3. [**Walker:**](examples/walker) Taking a random walk around the keyboard.

4. [**Matrix:**](examples/matrix) Building a pattern sequencer. Transforming
   patterns.

5. More...

## Requirements

There are a few essentials you'll need to follow along with the examples:

- [A browser that supports the Web Audio API](https://caniuse.com/#feat=audio-api)
- [A code editor](https://en.wikipedia.org/wiki/Source-code_editor#Notable_examples)

## Credits

Check out the [Links](appendix/links) for a list of references that informed
this book.
