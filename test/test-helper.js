class AudioContext {
  get currentTime() {
    return 0
  }

  createGain() {}

  createOscillator() {
    const that = this
    return {
      start: function() {},
      stop: function() {
        this.onended()
      }
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
