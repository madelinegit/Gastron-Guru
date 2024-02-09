import Benefits from '../../components/Benefits/index'
import CookiesComponent from '../../components/CookiesComponent/CookiesComponent'
import Featured from '../../components/Featured'
import ForEveryOccasion from '../../components/ForEveryOccasion'
import RelativeSquareBlocks from '../../components/RelativeSquareBlocks'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Link to="/chefs-database">Chefs</Link>
      <Featured />
      <Benefits />
      <ForEveryOccasion />
      <RelativeSquareBlocks />
      <CookiesComponent />
    </>
  )
}

export default Home
