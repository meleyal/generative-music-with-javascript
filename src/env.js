export default {
  currentTime: 0,

  context: (() => {
    return new window.AudioContext()
  })(),

  now(time = this.context.currentTime) {
    const latency = 0.02
    if (!this.currentTime) {
      this.currentTime = time
    } else if (time - this.currentTime > latency) {
      this.currentTime = time
    }
    return this.currentTime
  },
}
