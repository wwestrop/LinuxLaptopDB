import React from 'react';
import { useNavigate } from 'react-router';

interface SearchLinkProps {
  text: string;
}

const SearchLink: React.FC<SearchLinkProps> = ({ text }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(text.trim())}`);
  };

  return (
    <a href={`/search?q=${encodeURIComponent(text.trim())}`} onClick={handleClick}>
      {text}
    </a>
  );
};

export default SearchLink;
