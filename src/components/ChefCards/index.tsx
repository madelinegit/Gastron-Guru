import { capitalizeWords, replaceWords } from "../../utils/helpers";
import RatingAndLocation from "../RatingAndLocation";
import Ribbon from "../Ribbon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ChefDataProps } from "./types";
import "./ChefCards.scss";

const ChefCard = ({
  name,
  rating,
  distance_from_centre,
  labels,
  private: chefPrivate,
}: ChefDataProps) => (
  <div className="chef-card">
    <div className="thumbnail">
      {/* FILLER IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1630445396366-8dea03c85ead?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Peter Winston"
      />
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
            <li key={item}>
              {capitalizeWords(replaceWords(item))}
            </li>
          ))}
      </ul>
    </div>

    <div className="buy-btn-container">
      <button className="button-primary">Buy now</button>
    </div>
  </div>
);

// CREATE SEPARATE COMPONENT..?
const ChefCards = ({ chefData, isScrollEnabled }: { chefData: ChefDataProps[]; isScrollEnabled: boolean }) => {

  return (
    <div className={isScrollEnabled ? `chef-card-container-scroll` : `chef-card-container-grid`}>
      {chefData.map((chef) => (
        <ChefCard key={chef.name} {...chef} />
      ))}
    </div>
  );
};

export default ChefCards;
