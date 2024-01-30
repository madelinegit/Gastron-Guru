import { capitalizeWords } from "../../utils/helpers";
import "../Ribbon/Ribbon.scss";
import "./ChefDetail.scss";
import "../ChefCards/ChefCards.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useChef from "../../utils/Api";

const ChefDetail = ({ activeCard }: { activeCard: number }) => {
  const chefData = useChef();
  const chef = chefData[activeCard];
  const rating = chef?.rating;
  const private_ = chef?.private;
  const labels = chef?.labels;
  const name = chef?.name;
  const image = chef?.["featured-images"];
  const description = chef?.description;

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
            <b className="cd-icon">
              <FontAwesomeIcon icon={faStar} />
            </b>
            {rating?.value}
            {rating &&
              rating?.number_of_ratings > 0 &&
              ` (${rating.number_of_ratings})`}
            {rating?.value &&
              rating?.number_of_ratings &&
              chef?.distance_from_centre &&
              " | "}
            {chef?.distance_from_centre !== undefined &&
              `${(
                Math.ceil(Number(chef?.distance_from_centre) * 100) / 100
              ).toFixed(1)} mi`}
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
          <div className="cd-ribbon-container">
            <p>{labels?.[0]}</p>
          </div>
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
