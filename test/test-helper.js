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
  createOscillator() {}
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
  createBufferSource() {}
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
