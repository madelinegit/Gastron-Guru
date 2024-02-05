import { useSelector, useDispatch } from 'react-redux'
import { setFilters } from '../../../../store/reducers/filterReducer'
// import { useState } from 'react'

const withFiltering = (WrappedComponent: React.ComponentType<any>) => {
  const FilteringComponent = (props: any) => {
    const dispatch = useDispatch()
    const filtersGlobal = useSelector((state: any) => state.filters)
    // const [filtersLocal, setFilterLocal] = useState<string[]>(
    //   filtersGlobal.filters
    // )
    // console.log('from withFiltering')
    // console.log(filtersLocal)
    // console.log('end from withFiltering')
    const ratingFilters = [
      'All',
      'At least 2 stars',
      'At least 3 stars',
      'At least 4 stars',
    ]
    const handleFilterChange = (selectedFilters: string) => {
      filtersLocal.includes(selectedFilters)
        ? setFilterLocal(
            filtersLocal.filter((filter) => filter !== selectedFilters)
          )
        : setFilterLocal((prevFilters) => [...prevFilters, selectedFilters])
      dispatch(setFilters(filtersLocal))
    }

    return (
      <WrappedComponent
        filters={filtersLocal}
        onFilterChange={handleFilterChange}
        {...props}
      />
    )
  }

  return FilteringComponent
}

export default withFiltering
