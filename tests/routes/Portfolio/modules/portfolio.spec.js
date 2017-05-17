import {
  CHANGE_RISK_LEVEL,
  changeRiskLevel,
  default as profileReducer
} from 'routes/Portfolio/modules/portfolio'

import portfolioProfiles from 'routes/Portfolio/portfolioProfiles'

describe('(Redux Module) Portfolio', () => {
  it('Should export a constant CHANGE_RISK_LEVEL.', () => {
    expect(CHANGE_RISK_LEVEL).to.equal('CHANGE_RISK_LEVEL')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(changeRiskLevel).to.be.a('function')
    })

    it('Should initialize with a selected Risk 1 and all profiles.', () => {
      const initialState = {
        selectedRisk: 1,
        profiles: portfolioProfiles
      }
      expect(profileReducer(undefined, {})).to.eql(initialState)
    })

    it('Should return the previous state if an action was not matched.', () => {
      const initialState = {
        selectedRisk: 1,
        profiles: portfolioProfiles
      }
      let state = profileReducer(undefined, {})
      expect(state).to.eql(initialState)
      state = profileReducer(state, {type: '@@@@@@@'})
      expect(state).to.eql(initialState)
    })
  })

  describe('(Action Creator) changeRiskLevel', () => {
    it('Should be exported as a function.', () => {
      expect(changeRiskLevel).to.be.a('function')
    })

    it('Should return an action with type "CHANGE_RISK_LEVEL".', () => {
      expect(changeRiskLevel()).to.have.property('type', CHANGE_RISK_LEVEL)
    })

    it('Should assign the first argument to the "payload" property.', () => {
      expect(changeRiskLevel(5)).to.have.property('payload', 5)
    })

    it('Should default the "payload" property to 1 if not provided.', () => {
      expect(changeRiskLevel()).to.have.property('payload', 1)
    })
  })
  describe('(Action Handler) CHANGE_RISK_LEVEL', () => {
    it('Should set the selected risk as expected.', () => {
      const initialState = {
        selectedRisk: 1,
        profiles: portfolioProfiles
      }
      let state = profileReducer(undefined, {})
      expect(state).to.eql(initialState)
      state = profileReducer(state, { type: CHANGE_RISK_LEVEL, payload: { value: 3 } })
      expect(state).to.eql({
        selectedRisk: 3,
        profiles: portfolioProfiles
      })
    })
  })
})
