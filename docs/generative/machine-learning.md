---
title: Machine Learning
---

> "001100 010010 011110 100001"
>
> [Bender, Futurama](https://futurama.fandom.com/wiki/Time_Code)

TODO

- Neural networks
- Recurrent neural networks (RNN)
- Convolutional neural networks (CNN)
- Generative adversarial networks (GAN)
- Variational Auto Encoders (VAE)
- https://magenta.tensorflow.org/
- https://paperswithcode.com/
- https://arxiv.org/archive/cs
- https://www.kaggle.com/
- https://www.youtube.com/watch?v=HKRJuz6o2uY

In this chapter we're going to look at how to use Machine Learning (ML) to
generate music. So far, we've defined our own rules for what we want to make.
With ML, we'll see how we can instead teach a system to learn and extrapolate
it's own rules, by learning from existing data.

## Theory

ML is a huge topic, but at its core is a simple objective: to teach a program to
model a set of data. This model can then be used to understand (or generate) new
data that the program has never seen before.

We won't delve too deep here, as we'll see we can go a long way without much
theory, but it's useful to have a rough idea of how ML works in order to
evaluate different models and what they're capable of.

It's worth noting that we're using the term ML loosely to cover neural networks,
deep learning, and more specifically for the purposes of this chapter,
generative deep learning.

### How ML "learns"

The gist of the learning process is as follows:

- We first define a model, which is a series of "layers" of "neurons" that
  perform calculations on the data as it passes through them. The type and
  number of layers and neurons depend on the type of the data and the task we're
  trying to accomplish. The layers and their arrangement, without any learned
  weights (see next point) is also called a "network".

- We initialize the model with a set of random "weights" (random floating point
  numbers) for each layer in the network. These weights define how data passes
  between the layers/neurons and are where the actual "learning" is stored.

- We train the model by showing it data that includes the correct answer for the
  task. If we're training a model to identify photos of cats, our training data
  would consist of lots of photos labeled 'cat' or 'not cat'.

- We repeat this process for all of the examples in our training data, and for
  multiple iterations ("epochs"). As it goes, the model is constantly adjusting
  the weights between neurons to try and get it's final output to match the
  correct answer. In this way, the model learns which pattern of neurons signify
  a correct answer. If the data passing through triggers those neurons, it must
  be a cat! In other words, it's finding the optimal set of weights that model
  image data that is 'cat' and 'not cat'.

This is a very (very) simplified view of what's happening in a neural network,
and there are many variations on this process. It's also rather abstract, so a
musical example may help.

### Musical example

- Suppose we train a model by showing it MIDI files of all of Bach's works. The
  network might learn that given an A, the next note is often a G#, with a
  corresponding C note in the bass. The more it sees that pattern, the more
  certain it becomes (i.e. that neural path becomes stronger). As it sees other
  examples, it may begin to learn more generally that the next note is often two
  steps up from the first, and the bass note is 5 steps down.

- Now, when we give our model a note, and ask it to predict a next note and a
  bass note, it might predict the pattern it has learned. The likelihood of it
  predicting this pattern corresponds to how certain it is, which is a product
  of how many times it has seen the pattern in comparison with others.

- In this way, we can see how the model's learning is highly dependent on the
  type and amount of data it was trained on. A model trained on Bach would be
  useless at generating 12-bar blues. Similarly a model trained on a few
  examples would only be able to reproduce patterns found in those examples.

### Definitions

As with any scientific discipline, ML comes with an array of acronyms and lingo
that can be overwhelming to the uninitiated. Just a handful of these terms are
enough to navigate this chapter:

- **Network** – The specific arrangement of layers used to create the model.
  These often have 3-letter acronyms that define the type and purpose of the
  network e.g. RNN (Recurrent Neural Network), CNN (Convolutional Neural
  Network), (GAN) Generative Adversarial Network, VAE (Variational Auto
  Encoder), etc.

Gist: Optimize a loss function = find optimal set of weights to model the data

- Init with random weights
- Model takes in data as input (training data with labels, supervised vs.
  unsupervised?)
- At each pass over the data, it compares it's output to the actual data (i.e.
  error)
- It nudges all the weights and tries again
- If the error rate decreases, it knows it's going in the right direction
- In this way, the network learns to model the data (training the model, the
  learning in machine learning)
- Now we have a trained model, it can infer a result given new data it has never
  seen

* Different models for different tasks
* ML, Deep Learning, AI
* Model vs network (names, versions)
* Training
* Prediction/inference
* Pre-built models
* Pre-trained models, checkpoints

## Magenta

### MusicRNN

```js
music_rnn = new mm.MusicRNN(
  'https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/basic_rnn'
)
music_rnn.initialize()

const { createEnv, fx, inst, seq, music } = tuplet
const { c4, d4, e4, f4, g4, c5, rest } = music.pitches
const { wn, qn, den, sn, hn, ent } = music.durations

const notes = [
  [c4, qn],
  [c4, qn],
  [c4, den],
  [d4, sn],
  [e4, qn],
]

console.log(notes)
```

- MusicVAE
