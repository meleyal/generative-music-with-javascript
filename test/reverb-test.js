import { createEnv } from '../src/env'
import reverb from '../src/reverb'

describe('Reverb', () => {
  it('create', async () => {
    const env = createEnv()
    const verb = await reverb(env)
    expect(typeof verb.buffer.duration).to.eql('number')
    expect(verb.normalize).to.eql(false)
  })
})
