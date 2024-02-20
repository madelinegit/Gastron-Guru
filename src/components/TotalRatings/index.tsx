import './TotalRatings.scss'
type TotalRatingsProps = {
    total: number;
};
const TotalRatings = ({ total }: TotalRatingsProps) => {
    return (
        <div className='total-ratings'>
            {total} global ratings
        </div>
    );
};
export default TotalRatings;