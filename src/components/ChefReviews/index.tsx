import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './ChefReviews.scss';
import ReviewsData from './reviewsData';
import RatingStars from '../../components/RatingStars';

const ChefReviews = () => {
  const customerReviews = ReviewsData;
  const [open, setOpen] = useState<boolean>(false);

  // TOGGLE DROPDOWN MENU
  const handleOpen = () => setOpen(!open);

  return (
    <>
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
    </>
  );
};

export default ChefReviews;