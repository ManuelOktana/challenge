import PortfolioRoute from 'routes/Portfolio'

describe('(Route) Portfolio', () => {
  let _route

  beforeEach(() => {
    _route = PortfolioRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })
})
