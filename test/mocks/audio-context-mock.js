export default class AudioContext {
  get currentTime() {
    return 0
  }

  get destination() {
    return {}
  }

  createGain() {
    return {
      gain: {
        value: 0,
        setValueAtTime: () => null,
        exponentialRampToValueAtTime: () => null,
      },
      connect: () => null,
    }
  }

  createOscillator() {}

  createDynamicsCompressor() {
    return {
      threshold: { value: 0 },
      knee: { value: 0 },
      ratio: { value: 0 },
      attack: { value: 0 },
      release: { value: 0 },
    }
  }

  createBufferSource() {
    return {
      buffer: null,
      playbackRate: { value: 0 },
      connect: () => null,
      start: () => null,
      stop: () => null,
    }
  }

  createConvolver() {
    return {
      buffer: null,
    }
  }

  decodeAudioData() {
    return {
      duration: Math.random(),
    }
  }
}
