// SearchInput.tsx
import React, { useState } from 'react';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Enter your search query..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary mt-2">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
