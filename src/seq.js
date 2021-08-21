import _ from 'lodash'
import * as ptn from './pattern'

const seq = (notes, { loop = false } = {}) => {
  // const notes = phrases.reduce((prev, curr) => {
  //   return prev.concat(curr)
  // })

  const curriedPluginMethods = seq.plugins.flatMap((m) => {
    return Object.keys(m).flatMap((key) => {
      return {
        [key]: _.partial(m[key], notes),
      }
    })
  })
  const pluginMethods = Object.assign({}, ...curriedPluginMethods)

  let loopCount = 0

  return {
    repeat: (n) => seq(ptn.repeat(notes, n)),
    quantize: (bpm) => seq(ptn.quantize(notes, bpm)),
    transpose: (n) => seq(ptn.transpose(notes, n)),
    loop: () => seq(notes, { loop: true }),
    concat: (other) => seq(notes.concat(other.fold())),
    at: (time) => {
      const window = 1 / 190

      // TODO: cache
      let end
      end = notes.reduce((prev, curr) => {
        return prev + curr[1]
      }, 0)

      if (loop) {
        time = time - end * loopCount

        if (time >= end) {
          loopCount += 1
          time = 0
        }
      }

      // TODO: cache
      const starts = [0]
      notes.map((n, index) => {
        starts[index + 1] = starts[index] + n[1]
      })

      const start = starts.find((s) => {
        return _.inRange(time, s - window, s + window)
      })

      const index = starts.indexOf(start)

      return notes[index]
    },
    fold: () => notes,
    ...pluginMethods,
  }
}

seq.join = (seqs, options) => {
  return seq(
    seqs.flatMap((s) => s.fold()),
    options
  )
}

seq.plugins = []

seq.use = (plugin) => {
  plugin.install()
  Object.entries(plugin.seq.static).map(([key, value]) => {
    seq[key] = value
  })
  seq.plugins.push(plugin.seq.methods)
}

export default seq
