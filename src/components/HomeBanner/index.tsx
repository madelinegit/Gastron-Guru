import { Link } from 'react-router-dom';
import NarrowContainer from '../NarrowContainer';
import './HomeBanner.scss';

const HomeBanner = () => {
  return (
    <section className="home-banner-container">
      <div className="overlay"></div>
      <NarrowContainer>
        <div className="home">

          <h1>Your Culinary Journey...</h1>
            
          <Link to="/chefs-database">
            <button className="button-primary">Explore</button>
          </Link>
        </div>
      </NarrowContainer>
    </section>
  );
};

export default HomeBanner;