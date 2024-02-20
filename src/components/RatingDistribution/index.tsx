import './RatingDistribution.scss'

type RatingDistributionProps = {
    stars: number;
    percentage: number;
};

const RatingDistribution = ({ stars, percentage }: RatingDistributionProps) => {
    return (
        <div className='rating-distribution'>
            <span className='rating-progress-label'>{stars} star</span>
            <progress value={percentage / 100} max={1} className='rating-progress-bar'></progress>
            <span className='rating-progress-percentage'>{percentage}%</span>
        </div>
    );
};

export default RatingDistribution;