const { keys, values } = Object

export const program = (props = { model, messages, update, render }) => {
  const context = new AudioContext()

  // -- INIT

  let model = { ...props.model, context }
  props.render(model)

  // -- UPDATE

  if (!props.update) {
    props.update = (model, msg) => {
      return {
        ...model,
        ...msg
      }
    }
  }

  // -- MESSAGES

  const send = msgs => {
    keys(msgs).forEach(key => {
      model = props.update(model, { [key]: msgs[key] })
    })

    props.render(model)
  }

  values(props.messages(model, send)).forEach(fn => fn())
}
