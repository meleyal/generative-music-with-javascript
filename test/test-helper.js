class AudioContext {
  createGain() {}
  createOscillator() {}
  createDynamicsCompressor() {}
  createBufferSource() {}
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
