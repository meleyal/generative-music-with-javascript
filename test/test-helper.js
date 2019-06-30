class AudioContext {
  createGain() {}

  createOscillator() {
    return {
      start: () => null,
      stop: () => null
    }
  }
}

global.window = { AudioContext }
