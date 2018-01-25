import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  research: require('./sources.jsx').default
})

export default rootReducer
