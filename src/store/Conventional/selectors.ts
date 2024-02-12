import { useSelector } from 'react-redux'
import { InitialState } from './reducer'

export const useSortSelector = () => {
  return useSelector((state: InitialState) => state.sortBy)
}
export const useFilterSelector = () => {
  return useSelector((state: InitialState) => state.filter)
}
export const useChefDataSelector = () => {
  return useSelector((state: InitialState) => state.chefData)
}
export const useFilterRatingSelector = () => {
  return useSelector((state: InitialState) => state.filterRating)
}
