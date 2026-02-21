import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import SearchLink from './SearchLink';

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
    <section className="search-section">
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search laptop model, SKU, or hardware ID..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="popular-searches">
        Popular Searches: 
        <SearchLink text="ThinkPad T14" /> | 
        <SearchLink text="XPS 13" /> | 
        <SearchLink text="Framework 13" />
      </div>
    </section>
  );
};

export default SearchSection;
