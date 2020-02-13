---
title: Generative
---

> I make art about what confuses me.
>
> – [Lauren McCarthy](https://lauren-mccarthy.com/)

In this chapter, we'll attempt to pin down what we mean by the elusive term
"generative", and specifically what it means in the context of creating music.

## Definition

We probably have an intuitive sense of what "generative" means, which we might
phrase as follows:

> **Generative** – A process or system that produces something.

We can refine this further with a trip to the dictionary:

> **Generative** – Having the power of generating, originating, producing, or
> reproducing.

This suggests that something "generative" is able to create things, possibly
with some degree of autonomy. The "things" produced may be copies, versions, or
something entirely new.

In the context of this book, we can be more specific and say that:

- "Generative" is shorthand for _generative system_, a process that generates a
  result.

- Our generative system will be a computer program, written in JavaScript, that
  runs in a web browser.

- The result (or output) of our system will be music, and we're primarily
  interested in originating _new_ music.

With these in mind, our working definition of "generative" expands to:

> **Generative music system** – A program that creates new music.

## Concepts

With this working definition in hand, let's examine some of the concepts it
encapsulates in more detail.

Let's imagine we've written a program that plays _Happy Birthday_.

In programming, we call the the "thing" produced by a program its _output_.

In that sense, we could say that a program that plays _Happy Birthday_ every
time you run it, is generative.

But something's missing. In a creative context, generative implies creative,
some complex process that results in something novel or surprising.

In an ideal (or dystopian?) world, we could click a button and the computer
would give us (or generate) our desired outcome, or some unkown outcome that
surprises or delights us.

But, in the real world, we need to give computers rules, or procedures (machine
learning is changing this, but we're getting ahead of ourselves) to tell them
what we want to create. These procedures are known as algorithms, which is just
a term to describe a sequence of steps we want the computer to perform, not
dissimilar to a cooking recipe. Extracting variables from our code gives us a
set of values (or heuristics) we can tweak to influence the output or satisfy
some set of contraints.

You might also come across the terms algorithmic music, or procedural music.
These are essentially the same thing, though generative music is perhaps more
expressive as it emphasises what is happening rather than how it's implemented.

- the imitation of nature (mimesis), or Biomimicry

Define Generative vs. algorithmic vs. procedural

Generative: relating to or capable of production or reproduction. Having the
power or function of generating, originating, producing, or reproducing.
Denoting an approach to any field of linguistics that involves applying a finite
set of rules to linguistic input in order to produce all and only the
well-formed items of a language.

Algorithmic: expressed as or using an algorithm or computational procedure. A
set of rules for solving a problem in a finite number of steps. A sequence of
instructions, typically to solve a class of problems or perform a computation.

> Algorithmic composition is the process of designing an algorithm (or
> heuristic) for generating music.

> Another typical approach to algorithmic composition is to specify some
> constraints on the solution space and then generate lots of solutions that
> satisfy those constraints.

> – The Haskell School of Music: From Signals to Symphonies

For our purposes / working definition: A (predetermined?) process/rules we
define to create, outcome is unknown?

Different forms:

- the imitation of nature (mimesis), or Biomimicry
- Rules (e.g. Reas rules:
  https://drive.google.com/file/d/0B9h469--G5OwOGVfVmUxZUQ5VzA/view)

Genetic algorithms as a particular class of evolutionary algorithms, i.e.
strategies modeled on natural systems, are stochastic search techniques.

Artificial neural networks are used in numerous applications; depending on the
type of ANN, they are often applied in pattern recognition, prediction,
optimization and automatic classification.

## In Music

Musician as generator: The score is the rules, the performance is generative
with infinite range of variables. Less restrictive rules = more options to
explore the possiblity space.

Not new!

- Micrologus, 1026 –https://en.wikipedia.org/wiki/Micrologus
- Ars Magna, 1305 – https://en.wikipedia.org/wiki/Ramon_Llull#Ars_Magna

Processes

> In general, procedures of algorithmic composition may be divided into
> knowledge-based and non-knowledge-based methods. Knowledge-based approaches
> generate their outputs often on the basis of a rule-based system which is
> formulated by if then conditions and/or constraints. Non-knowledge-based
> methods are able to autonomously derive rules from an underlying corpus and
> produce outputs that, in supervised learning, are additionally evaluated by a
> superior instance.

- Minimalism: Minimalist music usually employs repetition and layering of simple
  musical patterns to generating intricate musical textures and structures.

- Chance music, also known as aleatoric music, is a compositional technique that
  introduces elements of randomness (or indeterminism) into the compositional
  process.

- Serialism: Serialism involves using deterministic rules to control choices
  within the compositional process.

- Stochastic music refers to music whose various aspects are guided by
  probability.

Minimalism: Minimalist music usually employs repetition and layering of simple
musical patterns to generating intricate musical textures and structures.

Chance music, also known as aleatoric music, is a compositional technique that
introduces elements of randomness (or indeterminism) into the compositional
process. Essential parts of chaos theory include the behavior of complex
systems, their attractors as well as different forms of self-similar structures,
above all of fractals. In a mathematical and physical context, particular states
of a system that are difficult to predict are called “chaotic.”

Serialism: Serialism involves using deterministic rules to control choices
within the compositional process.

Stochastic music refers to music whose various aspects are guided by
probability. The field of stochastics comprises probability calculus and
statistics. Stochastic processes are used to describe a sequence of random
events dependent on the time parameter (t).

## Evaluating

It's worth taking a moment to think about how to evaluate the output of
generative systems. What makes good generative art? Is the process important, or
just the result? If we can generate something at the push of a button, what
value does it have?

Unlike most programs, there are no real 'correct' answers if we're making art.
We're constantly evaluating and making choices about the results, and tweaking
the program to nudge it closer to what we desire, or confound it to produce
something unexpected.

One way to think about this is the idea of exploring a 'possiblity space'.
Without any rules, the possiblities are infinite (i.e. chaos). By defining rules
(heuristics), we can constrain and expore this space. A computer can draw many
millions of circles in the time it takes us to draw one. In this way, the
computer can 'explore' the possiblity space much faster, guided by our
selection/curation in a feedback loop.

This seeking is a worthy goal in and of itself, but part of our process might be
to try and express the internal logic of our programs, or the data we're working
with, making it possible to understand and connect with on a deeper level.

In the end, this is both the draw and the value of generative art, exploring the
unknown, and hopefully finding something illuminating along the way.

## Further Reading

- [Generative Systems - Wikipedia](https://en.wikipedia.org/wiki/Generative_systems)
- [The Nature of Code – Daniel Shiffman](https://natureofcode.com/)
- [Why Love Generative Art? – Artnome](https://www.artnome.com/news/2018/8/8/why-love-generative-art)
- [Algorithmic Composition – Gerhard Nierhaus](https://www.springer.com/gp/book/9783211755396)
