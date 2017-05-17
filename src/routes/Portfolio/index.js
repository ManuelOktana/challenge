import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'risk',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const RiskChartContainer = require('./containers/RiskChartContainer').default
      const reducer = require('./modules/portfolio').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'risk', reducer })

      /*  Return getComponent   */
      cb(null, RiskChartContainer)

    /* Webpack named bundle   */
    }, 'risk')
  }
})
