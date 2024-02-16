import { capitalizeWords } from "../../utils/helpers";
import RatingAndLocation from "../RatingAndLocation";
import Ribbon from "../Ribbon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ChefDataProps } from "./types";
import ImageSlider from "../ImageSlider";
import "./ChefCards.scss";

const ChefCard = ({
  name,
  rating,
  distance_from_centre,
  labels,
  corporate,
  private: chefPrivate,
  cuisines: chefCuisines,
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
      <div className="thumbnail">
      <div className="tags thumbtags">
          {chefCuisines &&
                chefCuisines.map((item) => (
                  <li key={item}>{capitalizeWords(item)}</li>
                ))}
        </div>
        <ImageSlider parentWidth={200} slides={featuredImages} />
        {/* {slides.map()<ImageSlider slides={slides} parentWidth={100} />} */}
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
          {corporate===true &&
            <li key={"corporate"}>Corporate</li>
          }
        </ul>
      </div>

      <div className="buy-btn-container">
        <button className="button-primary">Buy now</button>
      </div>
    </div>
  );
};

// CREATE SEPARATE COMPONENT..?
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
  return (
    <div
      className={
        isScrollEnabled
          ? `chef-card-container-scroll`
          : `chef-card-container-grid`
      }
    >
      {chefData.map((chef, index) => {
        const isActive = index === activeCard;
        return (
          <>
            <ChefCard
              key={chef.name}
              {...chef}
              isActive={isActive}
              onCardClick={() => onCardClick(index)}
              activeCard={activeCard}
            />
          </>
        );
      })}
    </div>
  );
};

export default ChefCards;
