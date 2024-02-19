import { CHANGE_SORT, FILTER_RATINGS, SET_FILTER } from './actionTypes'

//action creator for changing the sort.
export const changeSort = (sort: string) => {
  return {
    type: CHANGE_SORT,
    payload: sort,
  }
}
export const setFilter = (filter: string) => {
  return {
    type: SET_FILTER,
    payload: filter,
  }
}

export const filterRatings = (rating: string) => {
  return {
    type: FILTER_RATINGS,
    payload: rating,
  }
}
