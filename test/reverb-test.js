import test from 'tape'
import { Reverb } from '../src/reverb'

test('Reverb', t => {
  const context = new window.AudioContext()
  const reverb = new Reverb(context, context.destination)

  t.equal(reverb.output, context.destination, 'sets options')
  t.assert(reverb.impulse.endsWith('flat.wav'), 'sets defaults')

  t.end()
})
