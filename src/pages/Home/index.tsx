import Benefits from "../../components/Benefits/Index";
import Featured from "../../components/Featured";
import ForEveryOccasion from "../../components/ForEveryOccasion";
import PopUpModal from "../../components/PopUpModal";
import RelativeSquareBlocks from "../../components/RelativeSquareBlocks";

const Home = () => {
  return (
    <><PopUpModal/>
      <Featured />
      <Benefits/>
      <ForEveryOccasion />
      <RelativeSquareBlocks />
    </>
  );
};

export default Home;
