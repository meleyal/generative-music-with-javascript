import Metronome from './metronome'

class App {
  constructor(context, metro) {
    this.context = context
    this.metro = metro
  }

  on(event, callback) {
    this.metro.on(event, callback)
    return this
  }

  play(bpm = 90.0) {
    this.metro.bpm = bpm
    this.metro.start()
  }

  stop() {
    this.metro.stop()
  }
}

export default context => {
  return new App(context, new Metronome(context))
}
