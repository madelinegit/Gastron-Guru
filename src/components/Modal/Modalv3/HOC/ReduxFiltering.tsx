import { useDispatch } from 'react-redux'
// import { useFilterSelector } from '../../../../store/Conventional/selectors'
import { setFilter } from '../../../../store/Conventional/actionCreator'

const ReduxFiltering = (WrappedComponent: React.ComponentType<any>) => {
  const FilteringComponent = (props: any) => {
    const dispatch = useDispatch()
    //const filtersGlobal = useFilterSelector()
    //I don't think i want to do this here and drill down. Test out of putting useFilterSelector within the checked={useFilterSelector().includes(filter)}
    const handleFilterChange = (selectedFilter: string) => {
      dispatch(setFilter(selectedFilter))
    }
    return (
      <WrappedComponent handleFilterChange={handleFilterChange} {...props} />
    )
  }
  return FilteringComponent
}
export default ReduxFiltering
