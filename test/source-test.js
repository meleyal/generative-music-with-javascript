import test from 'tape'
import { Source } from '../src/source'

test('Source', t => {
  const context = new window.AudioContext()
  const source = new Source(context, context.destination, {
    buffer: 1
  })

  t.equal(source.buffer, 1, 'sets options')

  t.end()
})
