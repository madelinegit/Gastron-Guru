import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './RatingSidebar.scss';
import RatingHistogram from '../../../components/RatingHistogram';
import ReviewThisChef from '../../../components/ReviewThisChef';

const RatingSidebar = () => {
  return (
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
  );
};

export default RatingSidebar;