import {
  IconDefinition,
  faCircleNotch,
  faMartiniGlassCitrus,
  faPizzaSlice,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import NarrowContainer from '../NarrowContainer';
import './LoadingSpinner.scss';

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
    }, 1000);

    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className="spinner-container">
      <NarrowContainer>
        <FontAwesomeIcon
          icon={icons[iconIndex]}
          className={`icon ${
            icons[iconIndex] === faCircleNotch ? 'spinner-circle' : ''
          }`}
          size="10x"
        />
      </NarrowContainer>
    </div>
  );
};
