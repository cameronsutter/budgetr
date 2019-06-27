import { uploadBudgetData } from '../util/firebase'

const BLACKLIST = ['']

export default store => next => action => {
  const result = next(action)

  console.log(action.type)

  uploadBudgetData(store.getState())

  return result
}