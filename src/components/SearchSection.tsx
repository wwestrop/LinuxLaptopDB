import React, { useState, Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router';
import PopularSearches from './PopularSearches';
import { getPopularSearches } from '../services/searchService';
import * as styles from './SearchSection.module.css';

const popularSearchesPromise = getPopularSearches().catch(() => []);

interface SearchSectionProps {
  initialQuery?: string;
}

const SearchSection: React.FC<SearchSectionProps> = ({ initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className={styles.searchSection}>
      <div className={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="Search laptop model, SKU, or hardware ID..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className={styles.popularSearches}>
        <Suspense fallback="&nbsp;">
          <PopularSearches dataPromise={popularSearchesPromise} />
        </Suspense>
      </div>
    </section>
  );
};

export default SearchSection;
