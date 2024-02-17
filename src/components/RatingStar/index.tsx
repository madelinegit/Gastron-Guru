import './RatingStar.scss';
type RatingStarProps = {
    fill: 'full' | 'half' | 'empty';
};
const RatingStar = ({ fill }: RatingStarProps) => {
    let star;
    switch (fill) {
        case 'full':
            star = 'fa-solid fa-star'; // filled star
            break;
        case 'half':
            star = 'fa-solid fa-star-half-stroke'; // half-filled star
            break;
        default:
            star = 'fa-regular fa-star'; // empty star
            break;
    }

    return (
        <i className={`${star} star`}></i>
    );
};
export default RatingStar;