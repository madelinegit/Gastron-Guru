import { ChefDataProps } from '../ChefCard/types';
import ChefCard from '../ChefCard';
import './CardContainer.scss';
interface CardContainerProps {
  cards: ChefDataProps[];
}
const CardContainer = ({ cards }: CardContainerProps) => {
  return (
    <div className="card-container">
      {cards.map(chef => (
        <ChefCard key={chef.name} {...chef} />
      ))}
    </div>
  );
};

export default CardContainer;