import { createEnv } from '../src/env'
import compressor from '../src/compressor'

describe('Compressor', () => {
  it('create', () => {
    const env = createEnv()
    const comp = compressor(env)
    expect(comp.threshold.value).to.eql(-50)
  })
})
