import { capitalizeWords } from "../../utils/helpers";
import "../Ribbon/Ribbon.scss";
import "./ChefDetail.scss";
import "../ChefCards/ChefCards.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Ribbon from "../Ribbon";
import RatingAndLocation from "../RatingAndLocation";
import { ChefDataProps } from "../ChefCards/types";

type ChefDetailProps = {
  activeChef: ChefDataProps;
};

const ChefDetail = ({ activeChef }: ChefDetailProps) => {
  const {
    rating,
    private: private_,
    labels,
    name,
    description,
    distance_from_centre,
    ["featured-images"]: image,
  } = activeChef || {};

  return (
    <main className="main-detail">
      <article className="cd">
        <section className="cd-img">
          {image?.[1] ? (
            <img src={image?.[1]} />
          ) : image?.[0] ? (
            <img src={image?.[0]} />
          ) : (
            ""
          )}
        </section>
        <section
          className="cd-miscal"
          style={image ? { gridArea: "miscal" } : { gridArea: "img" }}
        >
          <p>
            <div className="cd-rating-location">
              <FontAwesomeIcon icon={faStar} />
              <RatingAndLocation
                rating={rating}
                distance_from_centre={distance_from_centre}
              />
            </div>
          </p>
          <p className="cd-tags">
            <ul>
              {private_ &&
                private_.map((item) => (
                  <li key={item}>{capitalizeWords(item)}</li>
                ))}
            </ul>
          </p>
          <div className="cd-btn-container">
            <button className="cd-btn">Buy now</button>
          </div>
        </section>
        <section className="cd-ribbon">
          <Ribbon label={labels?.[0]} />
        </section>
        <section className="cd-info">
          <h3>{name}</h3>
          <p>{description}</p>
        </section>
      </article>
    </main>
  );
};

export default ChefDetail;
