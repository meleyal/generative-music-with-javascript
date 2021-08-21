import metronome from './metronome'
import sampler from './sampler'
import { createEnv } from './env'

export default async (model, update, view) => {
  const env = createEnv()
  const _model = await model()
  const _update = await update(_model)
  const _view = await view(_model)
  const metro = metronome(env)({ bpm: _model.bpm })

  metro.on('tick', (time) => {
    const updatedModel = _update(_model, time)
    _view(updatedModel)
  })

  metro.start()
}
