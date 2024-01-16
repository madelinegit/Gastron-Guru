import useChef from '../utils/Api'

//define ChefsDatabase component
const ChefsDatabase = () => {
  const chefs = useChef()
  const renderChefNames = () => {
    // console.log({ chefs })
    return chefs.map((chef) => <p key={chef.name}>{chef.name}</p>)
  }

  return <>{renderChefNames()}</>
}

export default ChefsDatabase
