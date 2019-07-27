import _ from 'lodash'

class Pattern {
  constructor(array) {
    this.array = array
  }

  get() {
    return this.array
  }

  fill(n) {
    return new Pattern(_.fill(new Array(n), 0))
  }

  take(n) {
    return new Pattern(_.take(this.array, n))
  }

  reverse() {
    return new Pattern(_.reverse(this.array))
  }

  randomize(min, max) {
    return new Pattern(this.array.map(x => _.random(min, max)))
  }

  shuffle() {
    return new Pattern(_.shuffle(this.array))
  }

  transpose(step = 1) {
    return new Pattern(this.array.map(x => x + step))
  }

  clamp(min, max) {
    return new Pattern(this.array.map(x => _.clamp(x, min, max)))
  }

  ring() {
    return index => {
      return _.isInteger(index) ? this.array[index % this.array.length] : this
    }
  }
}

export const pattern = array => {
  return new Pattern(array)
}
