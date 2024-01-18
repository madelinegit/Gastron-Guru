import useChef from '../utils/Api'
import SwitchInput from '../components/Inputs/SwitchInput'
import CheckboxInput from '../components/Inputs/CheckboxInput'

//define ChefsDatabase component
const ChefsDatabase = () => {
  const chefs = useChef()
  const renderChefNames = () => {
    // console.log({ chefs })
    return chefs.map((chef) => <p key={chef.name}>{chef.name}</p>)
  }

  return (
    <>
      <SwitchInput />
      <CheckboxInput />
      {renderChefNames()}
    </>
  )
}

export default ChefsDatabase
