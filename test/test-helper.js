import chai from 'chai'
import sinon from 'sinon'
import chaiString from 'chai-string'
import sinonChai from 'sinon-chai'

import AudioContext from './mocks/audio-context-mock'
import fetch from './mocks/fetch-mock'

chai.use(chaiString)
chai.use(sinonChai)

global.chai = chai
global.expect = chai.expect
global.sinon = sinon

global.window = { AudioContext, fetch }
global.SAMPLES_URL = 'http://example.com'
