import { pitches } from './constants'

const { REST } = pitches

export class Sample {
  constructor(context, output, note, buffer) {
    this.context = context
    this.output = output
    this.note = note
    this.buffer = buffer
  }

  play(time, callback) {
    const { context, output, note, buffer } = this

    if (note.pitch !== REST) {
      const duration = Math.min(note.duration, buffer.buffer.duration)

      const volume = context.createGain()
      volume.gain.value = note.volume
      volume.connect(output)
      volume.gain.linearRampToValueAtTime(0, duration)

      const source = context.createBufferSource()
      source.buffer = buffer.buffer
      source.playbackRate.value = buffer.playbackRate
      source.connect(volume)
      source.onended = callback
      source.start(time)
      source.stop(time + duration)
    } else {
      const osc = this.context.createOscillator()
      osc.onended = callback
      osc.start(time)
      osc.stop(time + note.duration)
    }
  }
}
