import React from 'react'
import { bindActionCreators } from 'redux'
import Chart from 'routes/Portfolio/components/Chart'
import { shallow } from 'enzyme'

describe('(Component) Chart', () => {

  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      riskLevel : 1,
      ...bindActionCreators({
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<Chart {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  it('Should render with an <h2> that includes Risk level.', () => {
    expect(_wrapper.find('h2').text()).to.match(/Risk Level/)
  })

  it('Should render props.riskLevel at the end of the Risk Level <h2>.', () => {
    expect(_wrapper.find('h2').text()).to.match(/Risk Level 1$/)
    _wrapper.setProps({ riskLevel: 8 })
    expect(_wrapper.find('h2').text()).to.match(/Risk Level 8$/)
  })

  it('Should render a slider.', () => {
    expect(_wrapper.find('InputRange')).to.have.length(1)
  })
  it('Should render a Doughnut chart.', () => {
    expect(_wrapper.find('Doughnut')).to.have.length(1)
  })
})
