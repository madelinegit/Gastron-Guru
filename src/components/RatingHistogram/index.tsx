import './RatingHistogram.scss';
import RatingStars from '../../components/RatingStars';
import RatingText from '../../components/RatingText';
import RatingDistributionList from '../../components/RatingDistributionList';
import TotalRatings from '../../components/TotalRatings';

const RatingHistogram = () => {
  return (
    <div className='chef-ratings-histogram'>
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
  );
};

export default RatingHistogram;