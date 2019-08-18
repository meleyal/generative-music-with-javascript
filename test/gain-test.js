import test from 'tape'
import { Gain } from '../src/gain'

test('Gain', t => {
  const context = new window.AudioContext()
  const gain = new Gain(context, context.destination, {
    volume: 2
  })

  t.equal(gain.node.gain.value, 2, 'sets options')

  t.end()
})
