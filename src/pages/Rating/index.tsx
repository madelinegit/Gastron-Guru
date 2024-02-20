import './Rating.scss';
import RatingMain from './RatingMain';
import RatingSidebar from './RatingSidebar';

const Rating = () => {
  return (
    <div className='rating-container'>
      <RatingSidebar />
      <RatingMain />
    </div>
  );
};

export default Rating;