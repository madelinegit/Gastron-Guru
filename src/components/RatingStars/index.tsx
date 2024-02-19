import RatingStar from '../RatingStar';
import './RatingStars.scss';
type RatingStarsProps = {
  rating: number;
};
const RatingStars= ({ rating }: RatingStarsProps) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let fill: 'full' | 'half' | 'empty';
    if (i <= Math.floor(rating)) {
      fill = 'full';
    } else if (i - 0.5 <= rating) {
      fill = 'half';
    } else {
      fill = 'empty';
    }
    stars.push(<RatingStar key={i} fill={fill} />);
  }

  return (
    <div className='rating-stars'>
      {stars}
    </div>
  );
};
export default RatingStars;