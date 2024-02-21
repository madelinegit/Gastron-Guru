import './ChefReviews.scss';
import ReviewsData from './reviewsData';
import RatingStars from '../../components/RatingStars';

const ChefReviews = () => {
  const customerReviews = ReviewsData;

  return (
    <>
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