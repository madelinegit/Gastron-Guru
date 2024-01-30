import { useEffect, useState } from 'react';
import './LoadingSpinner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faCircleNotch,
  faMartiniGlassCitrus,
  faPizzaSlice,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import NarrowContainer from '../NarrowContainer';

export const LoadingSpinner = () => {
  const [iconIndex, setIconIndex] = useState<number>(0);

  const icons: IconDefinition[] = [
    faCircleNotch,
    faUtensils,
    faCircleNotch,
    faPizzaSlice,
    faCircleNotch,
    faMartiniGlassCitrus,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prevIconIndex) => (prevIconIndex + 1) % icons.length);
    }, 500);

    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className="spinner-container">
      <NarrowContainer>
        {icons[iconIndex] === faCircleNotch ? (
          <FontAwesomeIcon
            icon={icons[iconIndex]}
            className="spinner-icon"
            size="10x"
            spin
          />
        ) : (
          <FontAwesomeIcon
            icon={icons[iconIndex]}
            className="spinner-icon"
            size="10x"
          />
        )}
      </NarrowContainer>
    </div>
  );
};
