import seq from '../src/seq'

describe('Seq', () => {
  it('concat', () => {
    const exp = [1, 2, 3, 4, 5, 6]
    const a = seq([1, 2])
    const b = seq([3, 4])
    const c = seq([5, 6])
    const act = seq.concat(a, b, c).fold()
    expect(exp).to.eql(act)
  })

  it('play', async () => {
    const spy = sinon.stub()
    const ptn = seq([1, 2])
    await seq.play(ptn, spy)
    expect(spy).to.have.been.calledWith(1)
    expect(spy).to.have.been.calledWith(2)
  })
})
