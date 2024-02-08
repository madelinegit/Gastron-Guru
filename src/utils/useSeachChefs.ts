import { useState } from 'react';
import { ChefDataProps } from '../components/ChefCards/types';

export default function useSearchChefs(chefData: ChefDataProps[]) {
    const [searchResults, setSearchResults] = useState<ChefDataProps[]>([]);
    function handleSearch(query: string) {
        const filteredData = chefData.filter(chef => chef.name && chef.name.includes(query));
        setSearchResults(filteredData);
    }

    return { searchResults, handleSearch };
}