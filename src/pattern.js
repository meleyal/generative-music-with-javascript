import _ from 'lodash'
// import { now } from './env'
import { midiToPitch } from './music'

class Pattern {
  constructor(context, array) {
    this.uuid = _.uniqueId('p')
    this.context = context
    this.array = array
    this.middleware = []
    this.currentTick = 0
    this.currentNote = 0
    this.start = 0
    this.busy = false
  }

  use(fn) {
    this.middleware.push(fn)
    return this
  }

  play(beatNumber, time) {
    this.tick(beatNumber, time)
    return this
  }

  startAt(n) {
    this.start = n
    return this
  }

  tick(beatNumber, time) {
    // console.log('pattern.tick', tick)
    if (this.busy) return

    const note = this.array[this.currentNote]
    // this.currentTick = beatNumber
    // console.log('currentTick', this.uuid, this.currentTick)

    if (this.middleware.length > 0) {
      this.busy = true

      // console.log(note)

      // TODO: Need to pass on to next() middleware
      this.middleware.map(fn => {
        fn(note, { start: time, uuid: this.uuid }, () => {
          this.currentNote += 1
          // this.currentTick = beatNumber
          this.busy = false
          // this.tick(this.currentNote)
        })
      })
    }
  }

  // tick(tick = 0) {
  //   let scheduled = []
  //   let played = []
  //   let total = 0
  //   let idx = 0
  //   let el
  //
  //   while (total < 4) {
  //     el = this.array[this.currentNote + idx]
  //     total += el[1]
  //     scheduled.push(el)
  //     idx++
  //   }
  //
  //   console.log(scheduled.map(n => n[1]))
  //
  //   const innerTick = () => {
  //     if (scheduled.length > 0) {
  //       if (this.middleware.length > 0) {
  //         // console.log('tick', note, this.middleware)
  //         // TODO: Need to pass on to next() middleware
  //         this.middleware.map(fn => {
  //           let start = 0
  //           let note = scheduled.shift()
  //           let offset = played.reduce((a, b) => a[1] + b[1], 0)
  //           start += offset || 0
  //
  //           // console.log(note, start, offset)
  //           // console.log(midiToPitch(note[0]))
  //           fn(note, { start }, () => {
  //             this.currentNote += 1
  //             played.push(note)
  //             innerTick()
  //             // this.tick(this.currentNote)
  //           })
  //         })
  //       }
  //     }
  //   }
  //
  //   innerTick()
  //
  //   // let prevNotes = scheduled
  //   // let prevDurations
  //   //
  //   // if (prevNotes.length > 0) {
  //   //   prevDurations = prevNotes.reduce((a, b) => {
  //   //     console.log(a, b)
  //   //     return a[1] + b[1]
  //   //   }, 0)
  //   // }
  //   // // let prevDurations = _.without(scheduled, n).reduce(
  //   // //   (a, b) => a[1] + b[1],
  //   // //   0
  //   // // )
  //
  //   // console.log(start)
  //   // console.log(prevNotes)
  //   // console.log(prevDurations)
  //   // }
  //   // const note = this.array[this.currentNote]
  //   //
  // }

  get() {
    return this.array
  }

  fill(n) {
    this.array = _.fill(new Array(n), 0)
    return this
  }

  take(n) {
    this.array = _.take(this.array, n)
    return this
  }

  reverse() {
    this.array = _.reverse(_.cloneDeep(this.array))
    return this
  }

  randomize(min, max) {
    this.array = this.array.map(x => {
      return x.map(n => _.random(min, max))
    })
    return this
  }

  shuffle() {
    this.array = _.shuffle(this.array)
    return this
  }

  transpose(step = 1) {
    this.array = _.cloneDeep(this.array).map(x => {
      x[0] += step
      return x
    })
    return this
  }

  quantize(bpm) {
    const bps = 60.0 / bpm
    this.array = _.cloneDeep(this.array).map(x => {
      x[1] = x[1] * bps
      return x
    })
    return this
  }

  clamp(min, max) {
    this.array = this.array.map(x => {
      x[0] = _.clamp(x[0], min, max)
      return x
    })
    return this
  }

  repeat(n) {
    this.array = _.fill(new Array(n + 1), this.array).flat(1)
    return this
  }

  ring() {
    return index => {
      return _.isInteger(index) ? this.array[index % this.array.length] : this
    }
  }
}

export const pattern = (context, array = []) => {
  return new Pattern(context, array)
}
