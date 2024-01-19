import "./RatingAndLocation.scss";

interface RatingAndLocationProps {
  rating: {
    value: number;
    number_of_ratings: number;
  } | undefined;
  distance_from_centre: string | undefined;
}

const RatingAndLocation = ({ rating, distance_from_centre }: RatingAndLocationProps) => {
  return (
    <div>
      <p>
        {rating?.value}
        {rating && rating.number_of_ratings > 0 && ` (${rating.number_of_ratings})`}
        {rating?.value && rating.number_of_ratings && distance_from_centre && ' | '}
        {distance_from_centre !== undefined && `${(Math.ceil(Number(distance_from_centre) * 100) / 100).toFixed(1)} mi`}
      </p>
    </div>
  )
};

export default RatingAndLocation;