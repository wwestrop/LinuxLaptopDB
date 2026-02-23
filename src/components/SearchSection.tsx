import React, { useState, Suspense } from 'react';
import { useNavigate } from 'react-router';
import PopularSearches from './PopularSearches';
import { getPopularSearches } from '../services/searchService';
import styles from './SearchSection.module.css';

const popularSearchesPromise = getPopularSearches().catch(() => []);

interface SearchSectionProps {
  initialQuery?: string;
}

const SearchSection: React.FC<SearchSectionProps> = ({ initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

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
    <section className={styles['search-section']}>
      <div className={styles['search-container']}>
        <input 
          type="text" 
          placeholder="Search laptop model, SKU, or hardware ID..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <Suspense fallback={<div className={styles['popular-searches']}>&nbsp;</div>}>
        <PopularSearches dataPromise={popularSearchesPromise} />
      </Suspense>
    </section>
  );
};

export default SearchSection;
