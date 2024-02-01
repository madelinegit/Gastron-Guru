import { useSelector } from 'react-redux'

const withFiltering = (WrappedComponent: React.ComponentType<any>) => {
  const FilteringComponent = (props: any) => {
    // const dispatch = useDispatch()
    // const filters = useSelector((state: any) => state.filters)

    // const handleFilterChange = (selectedFilters: string[]) => {
    //   dispatch(setFilters(selectedFilters))
    // }

    return (
      <WrappedComponent
        // filters={filters}
        // onFilterChange={handleFilterChange}
        {...props}
      />
    )
  }

  return FilteringComponent
}

export default withFiltering
