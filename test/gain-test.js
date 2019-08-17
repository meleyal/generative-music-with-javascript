import test from 'tape'
import { Gain } from '../src/gain'

test('Gain', t => {
  const context = new window.AudioContext()
  const gain = new Gain(context, {
    volume: 2,
    output: context.destination
  })

  t.equal(gain.output, context.destination, 'sets options')
  t.equal(gain.node.gain.value, 2, 'sets options')

  t.end()
})
