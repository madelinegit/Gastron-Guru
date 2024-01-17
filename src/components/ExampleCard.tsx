import { useState } from "react";
import "./ExampleCard.scss";

type CardContainerProps = {
  children: React.ReactNode; //children always have the type of ReactNode, this is something you simply have to remember
};

type ExampleCardProps = {
  title: string; //title prop must be a string the prop is required
  description?: string; //look at the question mark after the description, the description is not required due to the questionmark
  open: boolean; //open prop is a boolean it is required
  distance: string | number; //distance can be a string or a number it is required
};

const CardContainer = ({ children }: CardContainerProps) => {
  return <div>{children}</div>;
};

const ExampleCard = ({
  title,
  description,
  open,
  distance,
}: ExampleCardProps) => {
  //Here we are applying the props
  const [active, setActive] = useState<boolean>(false); //when it comes to useState the type of the value is specified in betfeen the following sign<>

  return (
    <CardContainer>
      <div className="example-card">
        <p>{title}</p>
        <p>{description}</p>
        <p>{open}</p>
        <p>{distance}</p>
      </div>
    </CardContainer>
  );
};

export default ExampleCard;
