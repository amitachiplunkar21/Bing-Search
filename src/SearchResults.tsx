// SearchResults.tsx
import React from 'react';

interface SearchResult {
  url: string;
  name: string;
}

interface SearchResultsProps {
  results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul className="list-group">
        {results.map((result, index) => (
          <li className="list-group-item" key={index}>
            <a href={result.url}>{result.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
