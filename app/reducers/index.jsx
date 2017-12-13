import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  sources: require('./sources.jsx').default
})

export default rootReducer
