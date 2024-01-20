import { useEffect, useState } from "react";
import useChef from "../../utils/Api";
import ChefCards from "../ChefCards";
import "./Featured.scss";

const Featured = () => {
  const chefData = useChef();
  const [numberOfCards, setNumberOfCards] = useState(getNumberOfCards());

  // determine the number of cards according to screen size
  function getNumberOfCards() {
    return window.innerWidth >= 768 ? 4 : 3;
  }

  useEffect(() => {
    function handleResize() {
      setNumberOfCards(getNumberOfCards());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // shuffle the array of chefs
  const shuffleChefCards = (chefs: any[]) =>
    chefs.sort(() => Math.random() - 0.5);

  // filter chefs with discounts
  const chefsWithDiscounts = chefData.filter(
    (chef) => chef.labels && chef.labels.length > 0
  );

  // shuffle chefs with discounts
  const shuffleChefs = shuffleChefCards(chefsWithDiscounts);

  // slice shuffled array to display correct number of chef cards on desktop/mobile
  const featuredChefs = shuffleChefs.slice(0, numberOfCards);

  return (
    <div className="featured-container">
      <h2>Featured</h2>

      <div className="featured-cards">
        <ChefCards chefData={featuredChefs} />
      </div>
    </div>
  );
};

export default Featured;
