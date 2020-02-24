import chai from 'chai'
import chaiString from 'chai-string'
import sinonChai from 'sinon-chai'
chai.use(chaiString)
chai.use(sinonChai)

class AudioContext {
  get id() {
    return Date.now() // test memoize
  }
  get currentTime() {
    return 0
  }
  get destination() {}
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
  createDynamicsCompressor() {}
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
