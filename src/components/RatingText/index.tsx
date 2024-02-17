import './RatingText.scss';
type RatingTextProps = {
    text: number;
};

const RatingText = ({ text }: RatingTextProps) => {
    return (
        <p className="rating-text">
            {text} out of 5
        </p>
    );
};

export default RatingText;