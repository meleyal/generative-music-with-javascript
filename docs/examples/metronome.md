---
title: Metronome
---

```js
const context = new AudioContext()
const bpm = 60.0

// The beat we're currently scheduling
let beatNumber = 0

// When the next beat is due (sec)
let nextBeatTime = 0.0

const play = () => {
  // First beat is due immediately
  nextBeatTime = context.currentTime

  // Kick off scheduler
  scheduler()
}

/**
 * # Scheduler
 *
 * An analogy for understanding the scheduler function is to imagine we're
 * creating the path ahead of us as we're walking.
 *
 * We don't need to know everything that's ahead, we just need to lay enough
 * path to take the next step or two, but not too much in case we want to
 * change direction (or in our case, change bpm).
 *
 * The faster we're moving, the faster we'll need to lay down the path. If we're
 * walking at a slow pace (e.g. at 60 bpm), we have 1 second to look ahead and
 * lay down our next bit of path. If we're running (e.g. at 120 bpm), we have
 * only 0.5 seconds to plan our next step.
 *
 * By using a tiny lookahead (0.00025 of a second), we can theoretically handle
 * up to 4000 bpm given perfect `setTimeout` accuracy. Because `setTimeout` is
 * running in the main thread, it won't be absolutely accurate, as the browser
 * may delay its execution while it's busy with other stuff, but we can still
 * safely handle all practical bpms.
 *
 * ## How it works:
 *
 * The scheduler function slices time into 0.25ms chunks:
 *
 *    | 0.25 | 0.25 | 0.25 | 0.25 | ...
 *
 * `setTimeout` is used to repeatedly call the scheduler roughly every 0.25ms.
 * Accuracy is not important here, just that it's called regularly enough to
 * respond to bpm changes within the next tick.
 *
 * At each tick of the scheduler, we get the current time and look 100ms ahead.
 * This is our scheduling window:
 *
 *    |-- 100ms ----------------|
 *    ^ now
 *
 * If the next beat is inside the schedule window, its scheduled for playing:
 *
 *    <- past   |-- 100ms --------------------|
 *    ----------|---------------------1---------------|
 *              ^ now                 ^ beat due
 *
 * This advances the beat and starts the process over. If the next beat is
 * outside the schedule window, there's nothing to do and it will be
 * scheduled in a future tick:
 *
 *    <- past    |-- 100ms -------------------|
 *    ---1-------|---------------------------------2---------------|
 *               ^ now                             ^ beat due
 *
 */
const scheduler = () => {
  // How long is a beat at current bpm? e.g. 60/60 = 1s per beat
  const secondsPerBeat = 60.0 / bpm

  // How far ahead to schedule audio (sec)
  const lookahead = 0.1

  // console.log('scheduler', nextBeatTime, context.currentTime)

  // Trigger all the beats within the schedule window
  //
  // Example:
  //
  //  Pass #1
  //  -------
  //  nextBeatTime = 0
  //  context.currentTime = 0
  //
  //  0 < 0 + 0.1 => true
  //    beep(0, 0)
  //    nextBeatTime = 0 + 1
  //    beatNumber = 1
  //
  //  Pass #2
  //  -------
  //  nextBeatTime = 1
  //  context.currentTime = 0.058...
  //
  //  1 < 0.158 => false
  //    noop
  //
  //  ---later---
  //
  //  Pass #40
  //  --------
  //  nextBeatTime = 1
  //  context.currentTime = 0.905...
  //
  //  1 < 1.005 => true
  //    beep(1, 1)
  //    nextBeatTime = 1 + 1
  //    beatNumber = 2
  //
  while (nextBeatTime < context.currentTime + lookahead) {
    beep(beatNumber, nextBeatTime)
    nextBeatTime += secondsPerBeat
    beatNumber += 1
  }

  // Repeatedly call the scheduler every 0.25ms
  setTimeout(scheduler, 0.25)
}

const beep = (beat, time) => {
  const beepLength = 0.05 // sec

  const osc = context.createOscillator()
  osc.connect(context.destination)

  if (beat % 16 === 0) {
    osc.frequency.value = 880.0 // beat 0 == low pitch
    console.log('beep:start')
  } else if (beat % 4 === 0) {
    osc.frequency.value = 440.0 // quarter notes = medium pitch
    console.log('beep:bar')
  } else {
    osc.frequency.value = 220.0 // other 16th notes = high pitch
    console.log('beep:beat')
  }

  osc.start(time)
  osc.stop(time + beepLength)
}

play()
```
