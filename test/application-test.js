import test from 'tape-await'
import gen from '../src/application'

test('public API', t => {
  const app = gen()

  t.equal(typeof app.on, 'function')
  t.equal(typeof app.play, 'function')
  t.equal(typeof app.stop, 'function')
})
