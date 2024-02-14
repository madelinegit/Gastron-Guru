import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Rating.scss';

const Rating = () => {
  return (
    <div className="rating-container">
      <div className="rating-sidebar">
        <section>
          <h2>Customer reviews</h2>
          <h3>{/* STARS */} 4.3 out of 5</h3>
          <p>432 global ratings</p>

          {/* RATINGS */}

          <div className="sidebar-info">
            <FontAwesomeIcon icon={faChevronDown} size="xs" />
            <p className="blue-text">
              How customer reviews and ratings work
            </p>
          </div>
        </section>

        <section>
          <h2>Review this chef</h2>
          <p>Share your thoughts with other customers</p>
          <button className="button-primary">
            Write a customer review
          </button>
        </section>
      </div>

      <div className="rating-main">
        <main>
          <h2>Customers say</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="carousel">
            <h2>Reviews with images</h2>
            <p>See all photos <FontAwesomeIcon icon={faChevronRight} size="2xs" /></p>
            {/* INSERT IMAGE CAROUSEL */}
          </div>

          {/* INSERT DROPDOWN HERE */}
          <h2>Top reviews from the United States</h2>
          <div className="user-info">
            <img src="https://placekitten.com/200/300" alt="User Avatar" />
            <p>E. Jones</p>
          </div>
          {/* INSERT STAR RATING */} <p>Highly recommend</p>
          <p className="blue-text">Reviewed in the United States on October 26, 2023</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Volutpat maecenas volutpat blandit aliquam. Justo nec ultrices dui sapien eget mi proin sed. Dictum non consectetur a erat nam at lectus urna. Facilisis magna etiam tempor orci eu lobortis. Ornare suspendisse sed nisi lacus sed viverra tellus in hac.
          </p>

          <div className="user-info">
            <img src="https://placekitten.com/200/287" alt="User Avatar" />
            <p>Laura M.</p>
          </div>
          {/* INSERT STAR RATING */} <p>Highly recommend</p>
          <p className="blue-text">Reviewed in the United States on December 18, 2023</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Volutpat maecenas volutpat blandit aliquam. Justo nec ultrices dui sapien eget mi proin sed. Dictum non consectetur a erat nam at lectus urna. Facilisis magna etiam tempor orci eu lobortis. Ornare suspendisse sed nisi lacus sed viverra tellus in hac.
          </p>
        </main>
      </div>
    </div>
  )
}

export default Rating;