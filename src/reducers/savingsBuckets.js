import { combineReducers } from 'redux'
import { updateObject } from './functions'
import { CREATE_BUCKET, SAVE_TO_BUCKET } from '../actions/constants'

const defaultState = {
  "sb1": {
    "id": "sb1",
    "name": "Savings Bucket",
    "amount": 0
  }
}

function byId (state = defaultState, action) {
  switch (action.type) {
    case CREATE_BUCKET:
      return {
        ...state,
        [action.id]: action.entity,
      }
    case SAVE_TO_BUCKET:
      const bucket = state[action.id]
      return {
        ...state,
        [action.id]: updateObject(bucket, {amount: action.amount}),
      }
    default:
      return state
  }
}

function allIds (state = ["sb1"], action) {
  switch (action.type) {
    case CREATE_BUCKET:
      return state.concat(action.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  allIds,
})

///////////////
// Selectors //
///////////////

export const selectName = state => state.name
export const selectAmount = state => state.amount
export const selectBucket = (state, id) => state.byId[id]
export const selectOrderArray = state => state.allIds