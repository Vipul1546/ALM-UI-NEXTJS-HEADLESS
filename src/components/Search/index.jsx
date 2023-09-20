import { useAlmContext } from '@/context/almContext';
import { searchSuggestions } from '@/services/alm';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './search.module.scss';


const Search = () => {
  const { appliedFilters, updateAppliedFilter } = useAlmContext();
  const [suggestions, setSuggestions] = useState([]);
  const [fetch, setFetch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const urlSearchParams = useSearchParams();
  const searchParams = useSearchParams()

  useEffect(() => {
    let timeout = setTimeout(() => {
      const searchInput = async () => {
        setFetch(false);
        if (searchValue !== '') {
          setSuggestions([]);
          const data = await searchSuggestions(searchValue);
          setSuggestions(data.data);
          setFetch(true);
        }
      };
      searchInput();
    }, 200);

    return () => clearTimeout(timeout);
  }, [searchValue]);

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      getSearchResults(event.target.value);
    }
  };

  const getSearchResults = async text => {
    const searchParam = text || searchParams.get('search')
    setSuggestions([]);
    setSearchValue('');
    router.push(`/course-listing?search=${searchParam}`)
    updateAppliedFilter({
      ...appliedFilters,
      isSearch: true,
      searchPhrase: searchParam,
    });
  };

  return (
    <div className={styles['search-group']}>
      <input
        type="text"
        value={searchValue}
        className={styles['form-control']}
        placeholder="Type Something"
        onKeyDown={handleKeyDown}
        onChange={e => setSearchValue(e.target.value)}
      />
      <button className={styles.Iconsearch}></button>
      <ul className={styles['list-group']}>
        {searchValue?.length > 0 ? (
          suggestions?.length > 0 && fetch ? (
            suggestions?.map((suggestion, key) => {
              return (
                <li
                  aria-label="search suggestion"
                  tabindex="0"
                  className={styles.list}
                  onClick={() => getSearchResults(suggestion?.attributes?.text)}
                  key={key}>
                  <a>{suggestion?.attributes?.text}</a>
                </li>
              );
            })
          ) : !fetch ? (
            <li className={`${styles.list} ${styles['list-no-interact']}`}>Loading...</li>
          ) : (
            <li className={`${styles.list} ${styles['list-no-interact']}`}>No Result found! Try other term</li>
          )
        ) : (
          ''
        )}
      </ul>
    </div>
  );
};

export default Search;
