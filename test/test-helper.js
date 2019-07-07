class AudioContext {
  createGain() {}

  createOscillator() {
    return {
      start: () => null,
      stop: () => null
    }
  }

  createBufferSource() {
    return {}
  }

  decodeAudioData() {
    return [1, 2, 3]
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
