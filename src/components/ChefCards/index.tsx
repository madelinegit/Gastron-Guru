import { capitalizeWords } from "../../utils/helpers";
import RatingAndLocation from "../RatingAndLocation";
import Ribbon from "../Ribbon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ChefDataProps } from "./types";
import "./ChefCards.scss";

const ChefCard = ({
  name,
  rating,
  cuisines,
  distance_from_centre,
  labels,
  private: chefPrivate,
  onCardClick,
  activeCard,
  isActive,
  "featured-images": featuredImages,
}: ChefDataProps & { onCardClick: (index: number) => void }) => {
  const handleClick = () => {
    onCardClick(isActive ? activeCard : -1);
  };

  return (
    <div
      onClick={handleClick}
      className={isActive ? "chef-card conditional-border" : "chef-card"}
    >
      <span>
        {cuisines?.map((item) => (
          <button> {item}</button>
        ))}
      </span>

      <div className="thumbnail">
        <img src={featuredImages?.[0]} alt="Chef Restaurant Images" />
      </div>

      <h3>{name}</h3>

      <div className="ratings-container">
        <div className="left">
          <FontAwesomeIcon icon={faStar} />
          <RatingAndLocation
            rating={rating}
            distance_from_centre={distance_from_centre}
          />
        </div>
        <div className="right">
          <Ribbon label={labels?.[0]} />
        </div>
      </div>

      <div className="tags">
        <ul>
          {chefPrivate &&
            chefPrivate.map((item) => (
              <li key={item}>{capitalizeWords(item)}</li>
            ))}
        </ul>
      </div>

      <div className="buy-btn-container">
        <button className="button-primary">Buy now</button>
      </div>
    </div>
  );
};

const ChefCards = ({
  chefData,
  isScrollEnabled,
  onCardClick,
  activeCard,
}: {
  chefData: ChefDataProps[];
  isScrollEnabled: boolean;
  onCardClick: (index: number) => void;
  activeCard: number;
}) => {
  const discountPriority = {
    "2 for 1": 1,
    "30% off": 2,
    "20% off": 3,
    "10% off": 4,
  };

  const getMostValuableDiscount = (chef: ChefDataProps) => {
    const chefDiscounts = chef.labels || [];

    const sortedDiscounts = chefDiscounts.slice().sort((a, b) => {
      return discountPriority[a] - discountPriority[b];
    });

    return sortedDiscounts[0] || "";
  };

  const sortedChefData = chefData.slice().sort((a, b) => {
    const discountA = getMostValuableDiscount(a);
    const discountB = getMostValuableDiscount(b);

    return discountPriority[discountA] - discountPriority[discountB];
  });

  return (
    <div
      className={
        isScrollEnabled
          ? "chef-card-container-scroll"
          : "chef-card-container-grid"
      }
    >
      {sortedChefData.map((chef, index) => {
        const isActive = index === activeCard;
        return (
          <ChefCard
            key={chef.name}
            {...chef}
            isActive={isActive}
            onCardClick={() => onCardClick(index)}
            activeCard={activeCard}
          />
        );
      })}
    </div>
  );
};

export default ChefCards;
