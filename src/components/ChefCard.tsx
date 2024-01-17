import "./ChefCard.scss";

// mock data
const rating = 4.5;
const reviewCount = 58;
const distance = 0.4;

// condition to determine whether to display the '|' sign
const showSeparator = reviewCount > 0 && distance !== undefined;

// condition to determine whether to display the parentheses for reviews
const showReviews = reviewCount > 0;

const Card = () => {
  return (
    <div className="chef-card-container">
      <div className="chef-card">
        <div className="thumbnail">
          Thumbnail
        </div>

        <h2>Peter Winston</h2>

        <div className="ratings-container">
          <div>
            <p>
              {rating}
              {showReviews && ` (${reviewCount})`}
              {showSeparator && ' | '}
              {distance !== undefined && `${distance} mi`}
            </p>
          </div>
          <div className="ribbon">
            <p>30% off</p>
          </div>
        </div>

        <div className="tags">
          <ul>
            <li>High-End</li>
            <li>In-House</li>
          </ul>
        </div>

        <div className="buy-btn-container">
          <button>Buy now</button>
        </div>
      </div>
    </div>
  )
};

export default Card;