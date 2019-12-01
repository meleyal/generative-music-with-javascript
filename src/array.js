// TODO: Does import * increase bundle size?
import * as _ from 'lodash'

export const closest = (arr, n) => {
  return arr.reduce((prev, curr) => {
    return Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev
  })
}

// TODO: Overload range with instrument ranges:
// const notes = range('piano') // => [21...108]
export const range = _.range

export const zip = _.zip
