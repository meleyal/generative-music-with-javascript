// Properties
// ----------

/**
 * beats per minute
 */
const bpm = 120

/**
 * pulses per quarter note aka 'division' or 'ticks per quarter note'
 * This is the smallest resolution the Transport timing supports.
 */
const ppq = 192

// Methods
// -------

/**
 * Schedule callback at time (repeat)
 */
function on(time, callback) {}

/**
 * Schedule callback at time (once)
 */
function one(time, callback) {}

/**
 * Sync a sequence to the transport
 */
function sync(seq) {}

/**
 * Start playback
 */
function start() {}

/**
 * Stop playback
 */
function stop() {}

// Internals
// ---------

// 1. Start a silent oscillator to pulse at...
//
//      bpm = 60 = 1 beat per second (1 quarter note per second)
//      bpm = 120 = 2 beats per second (2 quarter notes per second)
//      bps = bpm / 60 = beats per second
//
//      pulses (frequency?) = (1 / ppq) * bps = 1 pulse (tick?) every 0.005208333333 seconds

// 2. Sync a sequence
//
// Work out which note(s) need to start (and stop?) playing at the current pulse
//
// Normalize the current time so it starts at 0?
// Convert the duration of each note to the tick value of when it should start
// If the current tick == note.start then trigger play
