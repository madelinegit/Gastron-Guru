import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faChevronRight, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import './Rating.scss';

const Rating = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="rating-container">
      <div className="rating-sidebar">
        <section>
          <h2>Customer reviews</h2>
          <div className="customer-reviews">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfStroke} />
            <h3>4.3 out of 5</h3>
          </div>

          <p>432 global ratings</p>

          {/* INSERT ALL RATINGS HERE BASED ON REVIEWS MODAL */}

          <div className="sidebar-info">
            <FontAwesomeIcon icon={faChevronDown} size="xs" />
            <p className="blue-text">
              How customer reviews and ratings work
            </p>
          </div>
        </section>

        <section className="review-chef">
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

          {/* DROPDOWN MENU */}
          <div className="dropdown">
            <button onClick={handleOpen} className="dropdown-btn">
              Top Reviews
              {open ? <FontAwesomeIcon icon={faChevronUp} size="sm" /> : <FontAwesomeIcon icon={faChevronDown} size="sm" />}
            </button>
            {open ? (
              <ul className="dropdown-menu">
                <li className="menu-item"><button>Option 2</button></li>
                <li className="menu-item"><button>Option 3</button></li>
                <li className="menu-item"><button>Option 4</button></li>
              </ul>
            ) : null}
          </div>

          <h2>Top reviews from the United States</h2>
          <article className="reviews">
            <div className="user-info">
              <img src="https://placekitten.com/200/300" alt="User Avatar" />
              <p>E. Jones</p>
            </div>

            {/* USER STAR RATING */}
            <div className="user-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <strong>Highly recommend</strong>
            </div>

            <p className="blue-text">
              Reviewed in the United States on October 26, 2023
            </p>
            <p className="review-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Volutpat maecenas volutpat blandit aliquam. Justo nec ultrices dui sapien eget mi proin sed. Dictum non consectetur a erat nam at lectus urna. Facilisis magna etiam tempor orci eu lobortis. Ornare suspendisse sed nisi lacus sed viverra tellus in hac.
            </p>
          </article>

          <article className="reviews">
            <div className="user-info">
              <img src="https://placekitten.com/200/287" alt="User Avatar" />
              <p>Laura M.</p>
            </div>

            <div className="user-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <strong>Wonderful food and service!</strong>
            </div>

            <p className="blue-text">
              Reviewed in the United States on December 18, 2023
            </p>
            <p className="review-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Volutpat maecenas volutpat blandit aliquam. Justo nec ultrices dui sapien eget mi proin sed. Dictum non consectetur a erat nam at lectus urna. Facilisis magna etiam tempor orci eu lobortis. Ornare suspendisse sed nisi lacus sed viverra tellus in hac.
            </p>
          </article>
        </main>
      </div>
    </div>
  )
}

export default Rating;