import "./Card.scss";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="thumbnail">
          Thumbnail
        </div>

        <h2>Peter Winston</h2>

        <div className="ratings-container">
          <div>
            <p>4.5 (58) | 0.4 mi</p>
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