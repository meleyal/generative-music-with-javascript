import metronome from './metronome'
import sampler from './sampler'
import { createEnv } from './env'

export default async (model, update, view) => {
  const env = createEnv()
  const metro = metronome(env)({ bpm: model.bpm })
  const _update = update(model)
  const _view = await view(model)

  metro.on('tick', (time) => {
    const updatedModel = _update(model, time)
    _view(updatedModel)
  })

  metro.start()
}
