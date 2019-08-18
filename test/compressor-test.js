import test from 'tape'
import { Compressor } from '../src/compressor'

test('Compressor', t => {
  const context = new window.AudioContext()
  const compressor = new Compressor(context, context.destination, {
    threshold: 100
  })

  t.equal(compressor.node.threshold.value, 100, 'sets options')
  t.equal(compressor.node.knee.value, 40, 'sets defaults')

  t.end()
})
