import portfolioProfiles from '../portfolioProfiles'
// ------------------------------------
// Constants
// ------------------------------------
export const CHANGE_RISK_LEVEL = 'CHANGE_RISK_LEVEL'

// ------------------------------------
// Actions
// ------------------------------------
export function changeRiskLevel (value = 1) {
  return {
    type    : CHANGE_RISK_LEVEL,
    payload : value
  }
}

export const actions = {
  changeRiskLevel
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHANGE_RISK_LEVEL] : (state, action) => {
    return { ...state, selectedRisk: action.payload.value }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  selectedRisk: 1,
  profiles: portfolioProfiles
}

export default function portfolioReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
