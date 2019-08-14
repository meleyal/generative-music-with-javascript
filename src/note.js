/**
 * Note is a single musical event. It consists of a pitch, duration, and an
 * optional velocity.
 */
export class Note {
  constructor(pitch, duration, velocity = 80) {
    this.pitch = pitch // pitch of note
    this.duration = duration // length of note
    this.velocity = velocity // how strong the note is played
  }

  /**
   * Adjust the duration of the note for a given bpm.
   */
  quantize(bpm) {
    const bps = 60.0 / bpm // how many beats are in 1 second?
    this.duration = this.duration * bps
    return this
  }

  /**
   * Raise or lower note pitch by a given interval.
   */
  transpose(num) {
    this.pitch = this.pitch + num
    return this
  }
}
