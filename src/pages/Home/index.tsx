import Benefits from "../../components/Benefits/index";
import CookiesComponent from "../../components/CookiesComponent/CookiesComponent";
import Featured from "../../components/Featured";
import ForEveryOccasion from "../../components/ForEveryOccasion";
import RelativeSquareBlocks from "../../components/RelativeSquareBlocks";

const Home = () => {
  return (
    <>
      <Featured />
      <Benefits/>
      <ForEveryOccasion />
      <RelativeSquareBlocks />
      <CookiesComponent />
    </>
  );
};

export default Home;
