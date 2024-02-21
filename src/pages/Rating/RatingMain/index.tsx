import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './RatingMain.scss';
import SortReviewsDropdown from '../../../components/SortReviewsDropdown';
import ChefReviews from '../../../components/ChefReviews';

const RatingMain = () => {
  return (
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
  );
};

export default RatingMain;