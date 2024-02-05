import { useChefDataSelector } from '../../store/Conventional/selectors'

const tester = () => {
  const chefData = useChefDataSelector()
  console.log(chefData)
  return <div>tester</div>
}
export default tester
