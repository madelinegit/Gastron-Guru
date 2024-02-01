import { combineReducers } from '@reduxjs/toolkit'
import sortingReducer from './sortingReducer'
import filteringReducer from './filteringReducer'

const rootReducer = combineReducers({
  sorting: sortingReducer,
  filtering: filteringReducer,
})

export default rootReducer
