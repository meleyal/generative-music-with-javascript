import { memoize } from 'lodash'

export const context = memoize(global => {
  return new (global || window).AudioContext()
})
