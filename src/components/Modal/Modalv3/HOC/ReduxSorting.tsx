import { changeSort } from '../../../../store/Conventional/actionCreator'
import { useDispatch } from 'react-redux'

const ReduxSorting = (WrappedComponent: React.ComponentType<any>) => {
  const SortingComponent = (props: any) => {
    const dispatch = useDispatch()
    const handleSortChange = (selectedSort: string) => {
      dispatch(changeSort(selectedSort))
    }
    return <WrappedComponent handleSortChange={handleSortChange} {...props} />
  }
  return SortingComponent
}
export default ReduxSorting
