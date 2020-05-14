import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useLayoutEffect,
} from 'react';
import { useRouter } from 'next/router';
import { FaSearch } from 'react-icons/fa';
import { Search, ChevronRight } from 'react-feather';
import { SearchWrapper, ResultSearch, ModalSearch } from './styled';
import { ContextSearch } from '../../context/SearchContext';
import Link from 'next/link';

const Buscador = () => {
  const [searchON, setSearchOn] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const inputRef = useRef();

  const contextSearch = useContext(ContextSearch);
  const { results, getResultsSearch } = contextSearch;

  const router = useRouter();

  useLayoutEffect(() => {
    if (textSearch.length < 1) {
      getResultsSearch(null);
    } else {
      getResultsSearch(textSearch);
    }
  }, [textSearch]);

  const handleChange = (e) => {
    const text = e.target.value;
    setTextSearch(text);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && textSearch) {
      router.push(`/search?query=${textSearch}`);
    }
  };

  const handleBlur = () => {
    setSearchOn(false);
    setTextSearch('');
  };

  return (
    <>
      <SearchWrapper>
        <label htmlFor="search" onClick={() => setSearchOn(!searchON)}>
          <Search size={18} />
        </label>
        {searchON && (
          <input
            ref={inputRef}
            type="text"
            id="search"
            placeholder="Buscar..."
            value={textSearch}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            onBlur={handleBlur}
          />
        )}
      </SearchWrapper>
      {results && (
        <ResultSearch>
          {results && results.map(result => (
            <Link href={`/producto/[id]/`} as={`/producto/${result._id}`} key={result._id}>
                <a><ChevronRight size={15} />{result.title}</a>
              </Link>
          ))}
        </ResultSearch>
      )}
    </>
  );
};

export default Buscador;
