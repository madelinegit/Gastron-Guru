import ExampleCard from "./ExampleCard";
import "./FeaturedExampleCards.scss";

const FeaturedCards = () => {
  return (
    <div className="featured-cards">
      <ExampleCard title="title" open={false} distance={0.9} />
      <ExampleCard title="title" open={true} distance={0.7} />
      <ExampleCard title="title" open={false} distance={0.9} />
    </div>
  );
};

export default FeaturedCards;
