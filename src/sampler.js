import * as env from './env'
import { samples } from './samples'

export const sampler = async inst => {
  const context = env.context()
  const sampleMap = samples[inst]
  const buffers = {}

  // console.log(Object.keys(sampleMap))
  // console.log(sampleMap)

  await Promise.all(
    Object.keys(sampleMap).map(pitch =>
      window
        .fetch(sampleMap[pitch].path)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
        .then(buffer => {
          buffers[pitch] = {
            buffer,
            ...sampleMap[pitch]
          }
        })
    )
  )

  console.log(buffers)

  // return () => {
  //   console.log('woo')
  // }
}
