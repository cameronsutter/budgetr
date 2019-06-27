import { combineReducers } from 'redux'
import savingsBuckets from './savingsBuckets'

const ui = (state = {}, action) => state
const userId = (state = '', action) => state

const entities = combineReducers({
  savingsBuckets,
})

export default combineReducers({
  entities,
  ui,
  userId,
})