import React from "react";
import HomeBanner from "../../components/HomeBanner";
import Benefits from "../../components/Benefits/index";
import CookiesComponent from "../../components/CookiesComponent/CookiesComponent";
import Featured from "../../components/Featured";
import ForEveryOccasion from "../../components/ForEveryOccasion";
import RelativeSquareBlocks from "../../components/RelativeSquareBlocks";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Featured />
      <Benefits/>
      <ForEveryOccasion />
      <RelativeSquareBlocks />
      <CookiesComponent />
    </>
  );
};

export default Home;
