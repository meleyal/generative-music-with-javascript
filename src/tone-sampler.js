import { Sampler } from 'tone'

import samples from './samples'

// console.log(Sampler)

export default (env, inst) => {
  // const sampleMap = samples[inst]
  // console.log(sampleMap)

  const sampler = new Sampler({
    urls: {
      C3: 'cs3.mp3',
      F3: 'f3.mp3',
      A3: 'a3.mp3',
    },
    baseUrl: `${SAMPLES_URL}/piano/`,
    context: env.context,
  })

  return new Promise((resolve) => {
    sampler.onload = () => {
      console.log('onload')
      resolve(sampler)
    }
    // new Sampler({
    //   urls: {
    //     C3: 'cs3.mp3',
    //     F3: 'f3.mp3',
    //     A3: 'a3.mp3',
    //   },
    //   baseUrl: `${SAMPLES_URL}/piano/`,
    //   context: env.context,
    //   onload: function (blarg) {
    //     console.log('loaded', blarg)
    //     resolve(this)
    //   },
    // })
  })
}
