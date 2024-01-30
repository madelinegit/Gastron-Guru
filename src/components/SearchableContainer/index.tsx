import { useState } from 'react';
import SearchBar from '../SearchBar';
import { ChefDataProps } from '../ChefCard/types';
import CardContainer from '../../components/CardContainer';
import useChef from '../../utils/Api';

export default function SearchableContainer() {
  const [results, setResults] = useState<ChefDataProps[]>([]);
  const chefData = useChef();
  function handleSearch(query: string) {
    const filteredData = chefData.filter(chef =>
      chef.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredData);
  }

  return (
    <div className="searchable-container">
      <SearchBar onSubmit={handleSearch} />
      {results.length === 0 ? (
        <CardContainer cards={chefData} />
      ) : (
        <CardContainer cards={results} />
      )}
    </div>
  );
}