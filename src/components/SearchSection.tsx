import React from 'react';

const SearchSection = () => {
  return (
    <section className="search-section">
      <div className="search-container">
        <input type="text" placeholder="Search laptop model, SKU, or hardware ID..." />
        <button>Search</button>
      </div>
      <div className="popular-searches">
        Popular Searches: 
        <a href="#">ThinkPad T14</a> | 
        <a href="#">XPS 13</a> | 
        <a href="#">Framework 13</a>
      </div>
    </section>
  );
};

export default SearchSection;
