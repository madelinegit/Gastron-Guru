/* import { useState } from "react";
import ChefCard from "../ChefCards";
import { ChefDataProps } from "../ChefCards/types";
import "./BorderContainer.scss";

type BorderContainerProps = {
  cards: ChefDataProps[];
  onCardClick: (index: number) => void;
};
const BorderContainer = ({ cards, onCardClick }: BorderContainerProps) => {
  console.log(cards);
  return (
    <div className="border-container">
      {cards.map((card, index) => (
        <>
          <ChefCard
            chefData={[]}
            isScrollEnabled={false}
            {...card}
            onCardClick={onCardClick}
          />
        </>
      ))}
    </div>
  );
};
export default BorderContainer; */
