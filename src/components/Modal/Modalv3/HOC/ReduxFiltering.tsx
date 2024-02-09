import { useDispatch } from 'react-redux'
import {
  setFilter,
  filterRatings,
} from '../../../../store/Conventional/actionCreator'

const ReduxFiltering = (WrappedComponent: React.ComponentType<any>) => {
  const FilteringComponent = (props: any) => {
    const dispatch = useDispatch()
    const handleFilterChange = (selectedFilter: string) => {
      dispatch(setFilter(selectedFilter))
    }
    const handleRatingFilterChange = (selectedFilter: string) => {
      dispatch(filterRatings(selectedFilter))
    }
    return (
      <WrappedComponent
        handleFilterChange={handleFilterChange}
        handleRatingFilterChange={handleRatingFilterChange}
        {...props}
      />
    )
  }
  return FilteringComponent
}
export default ReduxFiltering
