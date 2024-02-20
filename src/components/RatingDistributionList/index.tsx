import RatingDistribution from '../RatingDistribution';

type RatingDistributionListProps = { 
   ratings: number[] 
}
const RatingDistributionList = ({ ratings }: RatingDistributionListProps) => {
    const allRatings = [1, 2, 3, 4, 5]
    const initialCounts = allRatings.reduce((acc, rating) => {
        acc[rating] = 0;
        return acc;
    }, {} as { [key: number]: number });

    const counts = ratings.reduce((acc, rating) => {
        acc[rating] = (acc[rating] || 0) + 1;
        return acc;
    }, initialCounts);
    const totalRatings = ratings.length;
    const percentages = Object.entries(counts).map(([stars, count]) => ({
        stars: parseInt(stars),
        percentage: Math.floor((count / totalRatings) * 100),
    })).reverse();
    return (
        <>
            {percentages.map((rating) => (
                <RatingDistribution stars={rating.stars} percentage={rating.percentage} />
            ))}
        </>
    );
};

export default RatingDistributionList;