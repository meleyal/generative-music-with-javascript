import { expect } from 'chai'
import sinon from 'sinon'
import { createEnv } from '../src/env'
import compressor from '../src/compressor'

describe('Compressor', () => {
  it.skip('create', () => {
    const env = createEnv()
    const comp = compressor(env)
    console.log(comp)
    // expect(comp.threshold.value).to.eql(-50)
  })
})
