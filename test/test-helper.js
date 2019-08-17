import sinon from 'sinon'

class AudioContext {
  createGain() {
    return {
      gain: {
        value: 0,
        linearRampToValueAtTime: () => null
      },
      connect: () => null
    }
  }
  createOscillator() {
    return {
      connect: () => null,
      start: () => null,
      stop: () => null
    }
  }
  createDynamicsCompressor() {
    return {
      threshold: { value: 0 },
      knee: { value: 0 },
      ratio: { value: 0 },
      attack: { value: 0 },
      release: { value: 0 },
      connect: () => null
    }
  }
  createBufferSource() {
    return {
      buffer: null,
      connect: () => null,
      start: () => null,
      stop: () => null
    }
  }
  createConvolver() {
    return {
      buffer: null,
      connect: () => null
    }
  }
  decodeAudioData() {
    return {
      duration: Math.random()
    }
  }
}

const fetch = url => {
  return Promise.resolve(
    Promise.resolve({
      arrayBuffer: () => new ArrayBuffer()
    })
  )
}

global.window = { AudioContext, fetch }
