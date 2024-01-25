import './HomeBanner.scss';

const HomeBanner = () => {
  return (
    <section className="home-banner-container">
      <div className="overlay"></div>
      <div className="home">

        <h1>Your Culinary Journey...</h1>
        
        <a href="/chefs-database">
          <button className="button-primary">Explore</button>
        </a>

      </div>
    </section>
  );
};

export default HomeBanner;