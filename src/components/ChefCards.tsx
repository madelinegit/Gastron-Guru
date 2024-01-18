import useChef, { Chef } from "../utils/Api";
import { ChefData } from "../types";
import "./ChefCards.scss";

type Props = {
  data: ChefData
}

const ChefCard: React.FC<Chef> = ({ name, rating, distance_from_centre, labels, private: chefPrivate }) => (
  <div className="chef-card">
    <div className="thumbnail">
      {/* FILLER IMAGE */}
      <img src="https://images.unsplash.com/photo-1630445396366-8dea03c85ead?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Peter Winston" />
    </div>

    <h2>{name}</h2>

    <div className="ratings-container">
      <div>
        <p>
          {rating?.value}
          {rating && rating.number_of_ratings > 0 && ` (${rating.number_of_ratings})`}
          {rating?.value && rating.number_of_ratings && distance_from_centre && ' | '}
          {distance_from_centre !== undefined && `${(Math.ceil(Number(distance_from_centre) * 100) / 100).toFixed(1)} mi`}
        </p>
      </div>
      <div className="ribbon">
        {/* GRAB FIRST INDEX FROM ARRAY TO DISPLAY DISCOUNT */}
        <p>{labels?.[0]}</p>
      </div>
    </div>

    <div className="tags">
      <ul>
        {chefPrivate && chefPrivate.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>

    <div className="buy-btn-container">
      <button>Buy now</button>
    </div>
  </div>
);

const ChefCards: React.FC<Props> = () => {
  const chefData = useChef();

  return (
    <div className="chef-card-container">
      {chefData.map(chef => (
        <ChefCard key={chef.name} {...chef} />
      ))}
    </div>
  )
};

export default ChefCards;