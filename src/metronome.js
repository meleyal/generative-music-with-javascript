import { Observable, Observer } from 'rxjs'
import { filter, map } from 'rxjs/operators'

export const metronome = (context, bpm) => {
  const secondsPerBeat = 60.0 / bpm
  const beatsPerBar = 4

  const wholeNote = secondsPerBeat * beatsPerBar
  const sixtyFourthNote = wholeNote / 64

  const observable = new Observable(subscriber => {
    const tick = (currentTick = 0) => {
      const resolution = sixtyFourthNote
      const now = context.currentTime

      const osc = context.createOscillator()
      // osc.connect(context.destination)
      osc.start()
      osc.stop(now + resolution)

      // if (currentTick % 64 === 0) {
      //   callbacks['tock'](currentTick / 64)
      // }

      // if (currentTick % 16 === 0) {
      //   subscriber.next(`----------${currentTick / 16}`)
      // }
      // if (currentTick % 8 === 0) {
      //   callbacks['tick/8']()
      // }
      // if (currentTick % 4 === 0) {
      //   callbacks['tick/16'](currentTick / 4)
      // }
      // if (currentTick % 2 === 0) {
      //   callbacks['tick/32']()
      // }
      //

      // callbacks['tick/64']()

      // TODO: Also return the length of the tick
      subscriber.next(currentTick)

      osc.onended = () => {
        tick((currentTick += 1))
      }
    }
    tick()
  })

  return observable
}

export const resolution = (metro, res) => {
  return metro.pipe(
    filter(x => {
      return x % 16 === 0
    })
  )
}

// --------------------------------

// Example custom operator
// Src: https://rxviz.com/examples/custom-operator

// const { Observable, interval } = Rx;
//
// const sqrt = source$ => Observable.create(observer =>
//   source$.subscribe(
//     value => {
//       const result = Math.sqrt(value);
//
//       if (typeof value !== 'number' || isNaN(result)) {
//         observer.error(`Square root of ${value} doesn't exist`);
//       } else {
//         observer.next(result);
//       }
//     },
//     err => observer.error(err),
//     () => observer.complete()
//   )
// );
//
// interval(1000).pipe(sqrt)

// --------------------------------

// const context = new AudioContext()
//
// const metro = metronome(context, 60)
//
// // debugger
//
// const myFilter = n => source => {
//   return new Observable(observer => {
//     return source.subscribe(
//       x => {
//         if (x % n === 0) {
//           observer.next(x)
//         }
//       },
//       err => {
//         observer.error(err)
//       },
//       () => {
//         observer.complete()
//       }
//     )
//   })
// }
//
// const myFilter2 = n =>
//   filter(x => {
//     return x % 16 === 0
//   })
//
// const tickFilter = n => {
//   let foo
//
//   switch (n) {
//     case 4:
//       foo = 16
//       break
//     default:
//       foo = 0
//   }
//
//   // return foo
//
//   return filter(x => {
//     return x % foo === 0
//   })
// }

// console.log(tickFilter(4))

// metro.subscribe(x => {
//   console.log('tick')
// })
//
// // const tick4 = metro.pipe(
// //   filter(x => {
// //     return x % 16 === 0
// //   })
// // )
//
// const tick4 = metro.pipe(myFilter2(16))
//
// tick4.subscribe(x => {
//   console.log('tick4')
// })

// const tick4 = metro.pipe(tickFilter(4))
//
// tick4.subscribe(x => {
//   console.log('tick4')
// })
//
// const tick8 = metro.pipe(myFilter(8))
//
// tick8.subscribe(x => {
//   console.log('tick8')
// })

// export const metronome = (context, bpm = 60) => {
//   const secondsPerBeat = 60.0 / bpm
//   const beatsPerBar = 4
//
//   const wholeNote = secondsPerBeat * beatsPerBar
//   const sixtyFourthNote = wholeNote / 64
//
//   const gainNode = context.createGain()
//   gainNode.connect(context.destination)
//   let osc
//
//   const tick = (currentTick = 0) => {
//     const resolution = sixtyFourthNote
//     const now = context.currentTime
//
//     gainNode.gain.value = 0
//     // gainNode.gain.value = 1
//     gainNode.gain.linearRampToValueAtTime(0, now + resolution)
//
//     osc = context.createOscillator()
//     osc.connect(gainNode)
//     osc.start()
//     osc.stop(now + resolution)
//
//     if (currentTick % 16 === 0) {
//       osc.frequency.value = 400
//     } else if (currentTick % 8 === 0) {
//       osc.frequency.value = 800
//     } else if (currentTick % 4 === 0) {
//       osc.frequency.value = 1600
//     } else if (currentTick % 2 === 0) {
//       osc.frequency.value = 3200
//     } else {
//       osc.frequency.value = 6400
//     }
//
//     if (currentTick % 64 === 0) {
//       callbacks['tock'](currentTick / 64)
//     }
//
//     if (currentTick % 16 === 0) {
//       callbacks['tick'](currentTick / 16)
//     }
//     if (currentTick % 8 === 0) {
//       callbacks['tick/8']()
//     }
//     if (currentTick % 4 === 0) {
//       callbacks['tick/16'](currentTick / 4)
//     }
//     if (currentTick % 2 === 0) {
//       callbacks['tick/32']()
//     }
//
//     callbacks['tick/64']()
//
//     osc.onended = () => {
//       tick((currentTick += 1))
//     }
//   }
//
//   const stop = () => {
//     osc.onended = null
//   }
//
//   const callbacks = {
//     tick: () => null,
//     tock: () => null,
//     'tick/4': () => null,
//     'tick/8': () => null,
//     'tick/16': () => null,
//     'tick/32': () => null,
//     'tick/64': () => null
//   }
//
//   const on = (event, fn) => {
//     callbacks[event] = fn
//   }
//
//   return {
//     start: tick,
//     stop,
//     on
//   }
// }
