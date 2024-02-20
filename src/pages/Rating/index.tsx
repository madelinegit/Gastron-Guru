import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './Rating.scss';
import RatingHistogram from '../../components/RatingHistogram';
import ReviewThisChef from '../../components/ReviewThisChef';
import SortReviewsDropdown from '../../components/SortReviewsDropdown';
import ChefReviews from '../../components/ChefReviews';

const Rating = () => {
  return (
    <div className='rating-container'>
      <div className='rating-sidebar'>
        <section>
          <h2>Customer reviews</h2>
          <RatingHistogram />
          <div className='sidebar-info'>
            <FontAwesomeIcon icon={faChevronDown} size='xs' />
            <p className='blue-text'>
              How customer reviews and ratings work
            </p>
          </div>
        </section>
        <div className='review-chef'>
          <ReviewThisChef />
        </div>
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

        <SortReviewsDropdown
          title='Top Reviews'
          items={['Most Recent', 'Oldest', 'Most Helpful', 'Highest Rating', 'Lowest Rating', 'Least Helpful']}
        />
        <ChefReviews />
      </main>
    </div>
  );
};

export default Rating;