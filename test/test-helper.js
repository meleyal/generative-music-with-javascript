class AudioContext {
  createGain() {}
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
  createConvolver() {
    return {
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
