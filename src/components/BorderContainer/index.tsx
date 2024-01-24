import { useState } from 'react';
import ChefCard from '../ChefCards';
import { ChefDataProps } from '../ChefCards/types';
import './BorderContainer.scss';

type BorderContainerProps = {
  cards: ChefDataProps[];
};
const BorderContainer = ({ cards }: BorderContainerProps) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  function handleClick(i: number) {
    setActiveCardIndex(i);
  }
  console.log(cards);
  return (
    <div className="border-container">
      {cards.map((card, index) => (
        <ChefCard
          {...card}
          onCardClick={() => handleClick(index)}
          isActive={index === activeCardIndex}
        />
      ))}
    </div>
  );
};
export default BorderContainer;
