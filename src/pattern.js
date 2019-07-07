import _ from 'lodash'

export const take = n => arr => _.take(arr, n)

export const randomize = (min, max) => arr => arr.map(x => _.random(min, max))

export const shuffle = () => arr => _.shuffle(arr)

export const reverse = () => arr => _.reverse(arr)

export const transpose = (step = 1) => arr => arr.map(n => n + step)

export const ring = arr => index =>
  _.isInteger(index) ? arr[index % arr.length] : arr
