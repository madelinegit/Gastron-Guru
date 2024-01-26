import { Link } from 'react-router-dom';
import './HomeBanner.scss';

const HomeBanner = () => {
  return (
    <section className="home-banner-container">
      <div className="overlay"></div>
      <div className="home">

        <h1>Your Culinary Journey...</h1>
        
        <Link to="/chefs-database">
          <button className="button-primary">Explore</button>
        </Link>

      </div>
    </section>
  );
};

export default HomeBanner;