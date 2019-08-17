import test from 'tape'
import { Source } from '../src/source'

test('Source', t => {
  const context = new window.AudioContext()
  const source = new Source(context, {
    buffer: 1,
    output: context.destination
  })

  t.equal(source.output, context.destination, 'sets options')
  t.equal(source.buffer, 1, 'sets options')

  t.end()
})
