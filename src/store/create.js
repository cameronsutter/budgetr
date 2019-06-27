import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { maxId, setPPid, setTid, setSBid, setCTid, setITid, setPPTid, setCid } from './ids'
import saver from '../middlewares/saver'

let store
export function create (data) {
  store = createStore(rootReducer, data, applyMiddleware(saver))
  return store
}

export function getStore () {
  return store
}

export function setIds (entities) {
  setPPid(maxId(entities.payPeriods.allIds))
  setTid(maxId(entities.transactions.allIds))
  setSBid(maxId(entities.savingsBuckets.allIds))
  setCTid(maxId(entities.categoryTemplates.allIds))
  setITid(maxId(entities.incomeTemplates.allIds))
  setPPTid(maxId(entities.payPeriodTemplates.allIds))
  setCid(maxId(entities.categories.allIds))
}