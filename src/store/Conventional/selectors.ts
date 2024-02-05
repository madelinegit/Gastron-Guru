import { useSelector } from 'react-redux'
import { ChefDataProps } from '../../components/ChefCards/types'

interface RootState {
  sortBy: string
  filter: string[]
  chefData?: ChefDataProps[]
}

export const useSortSelector = () => {
  return useSelector((state: RootState) => state.sortBy)
}
export const useFilterSelector = () => {
  return useSelector((state: RootState) => state.filter)
}
export const useChefDataSelector = () => {
  return useSelector((state: RootState) => state.chefData)
}
