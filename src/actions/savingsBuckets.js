import { CREATE_BUCKET, SAVE_TO_BUCKET } from './constants'
import { nextSBid } from '../store/ids'

export function createBucket (name, amount = 0) {
  let newId = nextSBid()
  return {type: CREATE_BUCKET, id: newId, entity: {id: newId, name, amount}}
}

export function saveToBucket (id, amount) {
  return {type: SAVE_TO_BUCKET, id, amount}
}