import useChef from "../utils/Api";
import "./ChefCard.scss";

const Card = () => {
  const chefsData = useChef();

  return (
    <div className="chef-card-container">
      {chefsData.map((chef) => (
        <div className="chef-card">
          <div className="thumbnail">
            {/* FILLER IMAGE */}
            <img src="https://images.unsplash.com/photo-1630445396366-8dea03c85ead?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Peter Winston" />
          </div>

          <h2>{chef.name}</h2>

          <div className="ratings-container">
            <div>
              <p>
                {chef.rating?.value}
                {chef.rating && chef.rating.number_of_ratings > 0 && ` (${chef.rating.number_of_ratings})`}
                {chef.rating?.value && chef.rating.number_of_ratings && chef.distance_from_centre && ' | '}
                {chef.distance_from_centre !== undefined && `${(Math.ceil(Number(chef.distance_from_centre) * 100) / 100).toFixed(1)} mi`}
              </p>
            </div>
            <div className="ribbon">
              <p>{chef.labels[0]}</p>
            </div>
          </div>

          <div className="tags">
            <ul>
              {chef.private && chef.private.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>

          <div className="buy-btn-container">
            <button>Buy now</button>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Card;