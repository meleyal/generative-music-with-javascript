import chai from 'chai'
import chaiString from 'chai-string'
import sinonChai from 'sinon-chai'
chai.use(chaiString)
chai.use(sinonChai)

class AudioContext {
  constructor() {
    this.id = Date.now()
  }
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
        exponentialRampToValueAtTime: () => null
      },
      connect: () => null
    }
  }
  createOscillator() {}
  createDynamicsCompressor() {
    return {
      threshold: {
        value: 0
      }
    }
  }
  createBufferSource() {
    return {
      buffer: null,
      playbackRate: { value: 0 },
      connect: () => null,
      start: () => null,
      stop: () => null
    }
  }
  createConvolver() {}
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
