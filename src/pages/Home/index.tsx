import Benefits from "../../components/Benefits/index";
import CookiesComponent from "../../components/CookiesComponent/CookiesComponent";
import CuisinesDropdown from "../../components/CuisinesDropdown";
import Featured from "../../components/Featured";
import ForEveryOccasion from "../../components/ForEveryOccasion";
import RelativeSquareBlocks from "../../components/RelativeSquareBlocks";

const Home = () => {
  return (
    <>
      <CuisinesDropdown />
      <Featured />
      <Benefits/>
      <ForEveryOccasion />
      <RelativeSquareBlocks />
      <CookiesComponent />
    </>
  );
};

export default Home;
