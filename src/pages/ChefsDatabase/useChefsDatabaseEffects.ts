import { useEffect } from 'react';
import { ChefDataProps } from '../../components/ChefCards/types';

interface UseChefsDatabaseEffectsProps {
  chefData: ChefDataProps[];
  setSortChefCards: (value: ChefDataProps[]) => void;
}

const useChefsDatabaseEffects = ({ chefData, setSortChefCards }: UseChefsDatabaseEffectsProps) => {
    // sort chef cards based on ratings (desc order) upon initial page load
    useEffect(() => {
      const sortedByRating = chefData.sort((a, b) => {
        const ratingA = a.rating?.value || 0;
        const ratingB = b.rating?.value || 0;
  
        return ratingB - ratingA;
      });
      setSortChefCards(sortedByRating);
    }, [chefData]);
}

export default useChefsDatabaseEffects;