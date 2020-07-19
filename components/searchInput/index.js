import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Search, ChevronRight, ArrowLeft } from 'react-feather';
import { SearchWrapper, ResultSearch, LabelIcon } from './styled';
import { ContextSearch } from '../../context/SearchContext';
import { ContextMobile } from '../../context/MobileContext';

const Buscador = () => {
  const contextSearch = useContext(ContextSearch);
  const { results, getResultsSearch } = contextSearch;

  const contextMobile = useContext(ContextMobile);
  const { modeMobile } = contextMobile;

  const [searchON, setSearchOn] = useState(modeMobile ? false : true);
  const [textSearch, setTextSearch] = useState('');

  const router = useRouter();

  const handleChange = (e) => {
    const text = e.target.value;
    setTextSearch(text);
    if(text) getResultsSearch(text.toUpperCase());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && textSearch) {
      router.push(`/search?query=${textSearch}`);
      setTextSearch('');
    }
  };

  const handleInput = () => {
    setTextSearch('');
    if(modeMobile) setSearchOn(!searchON)
  };

  function showResultSearch() {
    if(textSearch === '') getResultsSearch('');
    return results.map((result) => (
      <Link
        href={`/producto/[id]`}
        as={`/producto/${result._id}`}
        key={result._id}
      >
        <a arial-label="title product"><ChevronRight size={15} />{result.title}</a>
      </Link>
    ));
  }

  return (
    <>
        <LabelIcon htmlFor="search" onClick={handleInput}>
          <Search />
        </LabelIcon>
        {searchON && (
          <SearchWrapper modeMobile={modeMobile}>
            <ArrowLeft />
            <input
              type="text"
              id="search"
              placeholder="Buscar..."
              value={textSearch}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              onBlur={handleInput}
            />
          </SearchWrapper>
        )}
      {results.length !== 0 && <ResultSearch modeMobile={modeMobile}>{showResultSearch()}</ResultSearch>}
    </>
  );
};

export default Buscador;
