import { combineReducers } from '@reduxjs/toolkit'
import sortingReducer from './sortingReducer'
// import discountReducer from './discountReducer'
// import ratingReducer from './ratingReducer'
// import cuisinesReducer from './cuisinesReducer'
// import tagsReducer from './tagsReducer'
import filterReducer from './filterReducer'
const rootReducer = combineReducers({
  sorting: sortingReducer,
  // discounts: discountReducer,
  // rating: ratingReducer,
  // cuisines: cuisinesReducer,
  // tags: tagsReducer,
  filters: filterReducer,
})

export default rootReducer
