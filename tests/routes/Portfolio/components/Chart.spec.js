import React from 'react'
import { bindActionCreators } from 'redux'
import { Chart } from 'routes/Portfolio/components/Chart'
import { shallow } from 'enzyme'

describe('(Component) Chart', () => {

  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      riskLevel : 1,
      ...bindActionCreators({
        doubleAsync : (_spies.doubleAsync = sinon.spy()),
        increment   : (_spies.increment = sinon.spy())
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
/*
  describe('An increment button...', () => {
    let _button

    beforeEach(() => {
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'Increment')
    })

    it('has bootstrap classes', () => {
      expect(_button.hasClass('btn btn-default')).to.be.true
    })

    it('Should dispatch a `increment` action when clicked', () => {
      _spies.dispatch.should.have.not.been.called

      _button.simulate('click')

      _spies.dispatch.should.have.been.called
      _spies.increment.should.have.been.called
    })
  })

*/
})
