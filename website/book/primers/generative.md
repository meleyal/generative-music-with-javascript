---
title: Generative
---

> I make art about what confuses me.
>
> – [Lauren McCarthy](https://lauren-mccarthy.com/)

In this chapter, we'll attempt to pin down what we mean by the elusive term
"generative", and what it means in the context of creating music.

## Definition

We probably have an intuitive sense of what "generative" means, which we might
loosely define as "a process or system that produces something." We can refine
this further with a trip to the dictionary:

> **Generative** – Having the power of generating, originating, producing, or
> reproducing.
>
> [– Merriam Webster Dictionary](https://www.merriam-webster.com/dictionary/generative)

This suggests that something "generative" is able to create things, possibly
with some degree of autonomy. The "things" produced may be copies, versions, or
something entirely new.

:::note IMG

Process producing something

:::

In the context of this book, we can be more specific and say that:

- "Generative" is shorthand for _generative system_, a process that generates a
  result.

- Our generative system will be a computer program, written in JavaScript, that
  runs in a web browser.

- The result (or output) of our system will be music, and we're primarily
  interested in originating _new_ music.

With these in mind, our working definition of "generative" expands to:

> **Generative music system** – A program that creates new music.

:::note IMG

Code in browser producing music

:::

As a side note, it's worth mentioning that you may also hear the terms
_algorithmic music_, or _procedural music_. These are essentially the same
thing. Generative music is preferred here as it emphasises _what_ is happening
rather than _how_ it's implemented.

## Concepts

With this definition in hand, let's examine some of the concepts it encapsulates
in more detail.

### Creativity

Creativity is obviously a key ingredient in making any kind of art. In the
context of generative art, the creative process is a collaboration between
yourself and the computer. We play both the creator, defining the rules of the
game, and the curator, evaluating the result.

Unlike most programming tasks, there are no real "correct" answers here. We're
constantly evaluating and making choices about the results, and tweaking the
program to nudge it closer to what we desire, or confound it to produce
something unexpected.

One way to think about this is the idea of exploring a "possiblity space".
Without any rules, the possiblities are infinite (i.e. chaos). By defining rules
and heuristics, we can constrain and expore this space. In the time it takes us
to draw a single circle, the computer can draw many millions. In this way, the
computer can "explore" the possiblity space much more quickly, guided by our
selection / curation in a continuous feedback loop.

:::note IMG

Infinity vs. contrained space

:::

Exploring is a worthy goal in and of itself, but part of our process might be to
try and express the internal logic of our programs, or the data we're working
with, making it possible to understand or connect with on a deeper level. How we
evaluate our work is entirely up to us. Is the process important, or just the
result?

This interplay is both the draw and the value of generative art, exploring the
unknown, and hopefully finding something illuminating along the way.

### Process

A generative system implies some kind of driving process.

In an ideal (or dystopian?) world, we could click a button and the computer
would generate our desired outcome, or some unkown outcome that surprises or
delights us.

In the real world, we need to give computers explicit instructions to tell them
what to create (machine learning is changing this somewhat, but we're getting
ahead of ourselves!) These procedures are known as _algorithms_, a sequence of
steps for the computer to perform, similar to a cooking recipe.

:::note IMG

Algorithm

:::

As we write our program, we can define _variables_ that influence how the
program behaves (e.g. the likelihood of performing a given step). These
variables give us a set of values we can tweak to influence the output of our
program.

The rules and values we choose define our system. We may choose intuitively, use
a rigorous set of mathematical rules, or model an existing system such as those
found in nature (memesis / biomimicry). We may define a starting state, run our
program, and see what emerges. Or we may specify a desired outcome, and task our
program with creating solutions to achieve that outcome.

In programming, we usually aim to solve a problem in the most precise,
effecient, and reproducible way. In a generative system, on the other hand, it
can be helpful to think of it as a more organic process. How can we inject
chance, autonomy, or interactions to breath life into our programs? This need
not seem daunting, as we'll see, simple rules can produce surprising complexity.

### Music

The output of a generative music system can take many forms, but generally
depends on if we're working at the "sample" or "note" level. At the sample
level, we're dealing with sound itself: signals, frequencies, and actual audio
waveforms. At the note level, we're concerned more with structure, composition,
and symbolic representations of music (e.g. MIDI). We can of course combine
these approaches and they often overlap, but it's a useful distinction to think
in terms of music at the micro or macro level.

:::note IMG

Audio vs. notes

:::

The use of generative / algorithmic processes in music (and art generally) is
nothing new. As far back as the
[Micrologus](https://en.wikipedia.org/wiki/Micrologus) in 1026, people have used
rule-based systems to aid in the composition process. More recently, movements
such as Serialism, Minimalism, and Stochastic music have explored new ground
with similar techniques.

Music could itself be seen as a generative process, with the score as the
algorithm, and the interpretation and skill of the performer as variables. Less
restrictive rules such as those of jazz or improv provide more freedom for
exploration and self expression.

:::note IMG

Bach vs. Cardew

:::

The rules of what constitutes "music" are constantly evolving. While there are
well-established conventions for how music is constructed (which we'll cover in
the next chapter), they should be seen as just that, rules we can accept,
subvert, or reject in pursuit of something that sounds like music to us.

## Conclusion

Hopefully this chapter has given you a feel for what a generative system is, and
how it might be applied to music. In the next chapter, we'll take a tour of
music theory to understand the building blocks and how they combine to form
musical works.

## Further Reading

- [Generative Systems - Wikipedia](https://en.wikipedia.org/wiki/Generative_systems)
- [The Nature of Code – Daniel Shiffman](https://natureofcode.com/)
- [Why Love Generative Art? – Artnome](https://www.artnome.com/news/2018/8/8/why-love-generative-art)
- [Algorithmic Composition – Gerhard Nierhaus](https://www.springer.com/gp/book/9783211755396)
- [The Machine as Art/ The Machine as Artist](https://www.mdpi.com/books/pdfview/selection/3013)
- [The Artist in the Machine](https://www.amazon.co.uk/Artist-Machine-World-AI-Powered-Creativity-ebook/dp/B08BSZQ2SX)
