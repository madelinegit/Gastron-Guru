import {
  SET_FILTER,
  CHANGE_SORT,
  CHEF_LOADING,
  FILTER_RATINGS,
} from './actionTypes'

export interface InitialState {
  sortBy: string
  filter: string[]
  chefData: any[]
  filterRating: string
}

const initialState: InitialState = {
  sortBy: 'Rating',
  filter: [],
  chefData: [],
  filterRating: 'All',
}
interface ActionReducerObject {
  type: string
  payload: string
}
const filterRatingOptions: string[] = [
  'All',
  'At least 2 stars',
  'At least 3 stars',
  'At least 4 stars',
]

const rootReducer = (
  state = initialState,
  { type, payload }: ActionReducerObject
) => {
  switch (type) {
    case CHANGE_SORT:
      return {
        ...state,
        sortBy: payload,
      }
    case SET_FILTER:
      //check if payload is in the filter. if it is, remove it. if not, add it
      if (state.filter.includes(payload)) {
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
    case FILTER_RATINGS:
      return {
        ...state,
        filterRating: payload,
      }
    default:
      return state
  }
}

export default rootReducer
