export default notes => {
  const len = notes.length

  return (state, next) => {
    state['note'] = notes[state.tick % len]
    state.tick++
    next()
  }
}
