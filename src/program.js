const { keys, values } = Object

export const program = (props = { model, messages, update, render }) => {
  const context = new AudioContext()

  // -- INIT

  let model = { ...props.model, context }

  // -- UPDATE

  const update = (_, msg) => {
    return {
      ...model,
      ...msg
    }
  }

  props.update = props.update || update

  // -- MESSAGES

  const send = msgs => {
    keys(msgs).forEach(key => {
      model = props.update(model, { [key]: msgs[key] })
    })

    render(model)
  }

  // -- RENDER

  const render = model => {
    try {
      props.render(model)
    } catch (e) {
      // no-op
    }
  }

  render(model)

  values(props.messages(model, send)).forEach(fn => fn())
}
