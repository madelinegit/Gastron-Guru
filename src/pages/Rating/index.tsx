import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './Rating.scss';
import ReviewsData from './reviewsData';
import RatingStars from '../../components/RatingStars';
import RatingText from '../../components/RatingText';
import RatingDistributionList from '../../components/RatingDistributionList';
import TotalRatings from '../../components/TotalRatings';

const Rating = () => {
  const customerReviews = ReviewsData;
  const [open, setOpen] = useState<boolean>(false);

  // TOGGLE DROPDOWN MENU
  const handleOpen = () => setOpen(!open);

  return (
    <div className='rating-container'>
      <div className='rating-sidebar'>
        <section>
          <h2>Customer reviews</h2>
          <div className='customer-reviews'>
            <div className='chef-star-ratings'>
              <RatingStars rating={4.3} />
              <RatingText text={4.3} />
            </div>
            <div className='chef-total-ratings'>
              <TotalRatings total={250} />
            </div>
            <div className='chef-rating-distribution'>
              <RatingDistributionList ratings={[4, 3, 2, 1, 4, 3, 4, 5, 5, 5, 5]} />
            </div>
          </div>

          <div className='sidebar-info'>
            <FontAwesomeIcon icon={faChevronDown} size='xs' />
            <p className='blue-text'>
              How customer reviews and ratings work
            </p>
          </div>
        </section>

        <section className='review-chef'>
          <h2>Review this chef</h2>
          <p>Share your thoughts with other customers</p>
          <button className='button-primary'>
            Write a customer review
          </button>
        </section>
      </div>

      <main className='rating-main'>
        <h2>Customers say</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className='image-carousel'>
          <h2>Reviews with images</h2>
          <a href='#'>See all photos <FontAwesomeIcon icon={faChevronRight} size='2xs' /></a>

          {/* INSERT IMAGE CAROUSEL HERE */}
        </div>

        {/* DROPDOWN MENU */}
        <div className='dropdown'>
          <button onClick={handleOpen} className='dropdown-btn'>
            Top Reviews
            {open ? <FontAwesomeIcon icon={faChevronUp} size='sm' /> : <FontAwesomeIcon icon={faChevronDown} size='sm' />}
          </button>
          {open && (
            <ul className='dropdown-menu'>
              {/* FILLER CONTENT; UPDATE LATER */}
              <li className='menu-item'><button>Most Recent</button></li>
              <li className='menu-item'><button>Oldest</button></li>
              <li className='menu-item'><button>Most Helpful</button></li>
              <li className='menu-item'><button>Highest Rating</button></li>
              <li className='menu-item'><button>Lowest Rating</button></li>
              <li className='menu-item'><button>Least Helpful</button></li>
            </ul>
          )}
        </div>

        <h2>Top reviews from the United States</h2>
        {/* USING HARDCODED MOCK DATA UNTIL CONNECTED TO DATABASE */}
        {customerReviews.map((review) => (
          <article className='reviews'>
            <div className='user-info'>
              <img src={review.avatar} alt={review.username} />
              <p>{review.username}</p>
            </div>

            <div className='user-rating'>
              <RatingStars rating={review.starRating} />
              <strong>{review.reviewTitle}</strong>
            </div>

            <p className='blue-text'>
              Reviewed in {review.country} on {review.date}
            </p>
            <p className='review-text'>
              {review.userReview}
            </p>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Rating;