import { SET_FILTER, CHANGE_SORT, CHEF_LOADING } from './actionTypes'

const initialState = {
  sortBy: 'Rating',
  filter: ['All'],
  chefData: {},
}
const ratingFilters: string[] = [
  'All',
  'At least 2 stars',
  'At least 3 stars',
  'At least 4 stars',
]

const isRatingThere: string =
  'All' || 'At least 2 stars' || 'At least 3 stars' || 'At least 4 stars'

const rootReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case CHANGE_SORT:
      return {
        ...state,
        sortBy: payload,
      }
    case SET_FILTER:
      //check if payload is a rating filter
      if (ratingFilters.includes(payload)) {
        //if the filter is not found in the list of filters, remove the old filter (want only one). then add new filter
        if (!state.filter.includes(payload)) {
          const removeOldRating = state.filter.filter(
            (item) => item !== isRatingThere
          )
          return {
            ...state,
            filter: [...removeOldRating, payload],
          }
        }
        //if payload is a rating and already in the filter, escape
        return
      }
      //if payload is not a rating, check if it is in the filter. if it is, remove it. if not, add it
      else if (state.filter.includes(payload)) {
        return {
          ...state,
          filter: state.filter.filter((item) => item !== payload),
        }
      } else {
        return {
          ...state,
          filter: [...state.filter, payload],
        }
      }
    //fetching and seting chefdata based off of thunk api. Might not need this if thunk working
    case CHEF_LOADING:
      return {
        ...state,
        chefData: payload,
      }
    default:
      return state
  }
}

export default rootReducer
