import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSortBy } from '../../../store/reducers/sortingReducer' // Import your setSortBy action

const withSorting = (WrappedComponent: React.ComponentType<any>) => {
  const WithSortingComponent = (props: any) => {
    const dispatch = useDispatch()
    const sortByGlobal = useSelector((state: any) => state.sorting.sortBy) // Access sortBy from Redux state
    const [sortByLocal, setSortByLocal] = useState(sortByGlobal) // Local state to store sortBy

    const handleSortChange = (option: string) => {
      dispatch(setSortBy(option)) // Dispatch action to update sortBy in Redux state
      setSortByLocal(option) // Update local state
      // console.log('post dispatch')
      // console.log(sortBy)
    }

    return (
      <WrappedComponent
        sortBy={sortByLocal}
        onSortChange={handleSortChange}
        {...props}
      />
    )
  }

  return WithSortingComponent
}

export default withSorting
