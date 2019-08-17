import test from 'tape'
import { Oscillator } from '../src/oscillator'

test('Oscillator', t => {
  const context = new window.AudioContext()
  const onended = () => null
  const oscillator = new Oscillator(context, {
    onended
  })

  t.equal(oscillator.onended, onended, 'sets options')

  t.end()
})
