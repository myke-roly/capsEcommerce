import React, { useState, useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchWrapper, ResultSearch } from './styled';
import { ContextSearch } from '../../context/SearchContext';

const Search = () => {
  const [searchON, setSearchOn] = useState(false);
  const [textSearch, setTextSearch] = useState('');

  const contextSearch = useContext(ContextSearch);
  const { results, getResultsSearch } = contextSearch;

  const handleChange = (e) => {
    setTextSearch(e.target.value);
    if(!textSearch) return;
    getResultsSearch(textSearch);
  }
  return (
    <SearchWrapper>
      <label htmlFor="search" onClick={() => setSearchOn(!searchON)}>
        <FaSearch />
      </label>
      {searchON && (
        <input
          type="text"
          id="search"
          placeholder="Buscar..."
          value={textSearch}
          onChange={handleChange}
        />
      )}
      <ResultSearch>
        {results && results.map(result => (
          <h1>{result.title}</h1>
        ))}
      </ResultSearch>
    </SearchWrapper>
  );
};

export default Search;
