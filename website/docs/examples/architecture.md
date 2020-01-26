---
title: Architecture
---

This chapter focuses on how to structure our programs. The goal is to provide
some minimal conventions for where to put things, so we can focus on the
interesting parts of our program.

This is not essential, you can certainly structure your program any way that
makes sense to you. What's offered here is one way to do it. Even if you don't
adopt this pattern, it's worth skimming this chapter as the later examples in
the book use it.

The architecture presented here is based on the concept of "one-way data flow",
and is borrowed from
[The Elm Architecture](https://guide.elm-lang.org/architecture/). A `program`
generates `messages` which are sent to an `update` function that updates a data
`model` and passes it to a `render` function. It's as simple as that!

![](/gen/img/architecture/one-way-data-flow.svg)

## Model

The `model` is an object that describes the state of our program. Here, we can
think about the "shape" of the data that our program will need. We can fill in
known values, and provide placeholders for data we need to wait for (e.g.
samples being loaded).

```js
const model = {
  tick: 0,
  bpm: 60,
  samples: []
}
```

## Messages

The `messages()` function describes all the things we want to happen in our
program. It receives the current `model`, and a `send()` function it can use to
update the model. It returns an object describing the things we want to happen
in our program.

```js
const messages = (model, send) => {
  return {
    tick: () => {
      setInterval(() => {
        send({ tick: 1 })
      }, 1000)
    }
  }
}
```

Messages can optionally call other messages:

```js
const messages = (model, send) => {
  const msgs =  {
    tick: () => {
      setInterval(() => {
        const msg = { tick: 1, ...msgs.hello() }
        send(msg)
      }, 1000)
    }

    hello: () => {
      return { hello: 'world' }
    }
  }

  return msgs
}
```

## Update

If your update logic is more complicated, you can provide a custom `update()`
function to `program()`.

The `update()` function receives the current `model`, and a message (or
"action") (`msg`). It updates the model according to the message type and
returns it. While not enforced, you should think of the model as immutable. Each
time we update it we get back a new version or "snapshot" of the current model.
The benefits of immutable model will become more apparent later in the book.

The default implementation just merges the message into the model using the key
and value of the `msg`.

```js
const update = (model, msg) => {
  return {
    ...model,
    ...msg
  }
}

update({ tick: 0 }, { tick: 1 }) // => { tick: 1 }
```

## Render

The `render()` function is where we actually make sounds. It takes our model as
input, and the result is something that outputs audio to our speakers.

> TODO: Example

## Program

These functions don't currently talk to each other, we still need a way to wire
them together.

The `program()` function takes care of calling `init()` to build the initial
model, sends `messages()` to `update()` our model, and automatically calls
`render()` with the updated model, forming a continuous feedback loop.

This example shows how to setup a metronome to continually update the model with
the current beat.

```js
const { program, metronome, resolution } = gen

// -- MODEL

const model = {
  tick: 0
}

// -- MESSAGES

const messages = (model, send) => ({
  const { context } = model

  tick: () => {
    const metro = resolution(metronome(context, 60), 4)

    metro.subscribe(tick => {
      send({ tick })
    })
  }
})

// -- RENDER

const render = model => {
  console.log('render', model.tick)
}

// -- PROGRAM

program({ model, messages, render })
```
