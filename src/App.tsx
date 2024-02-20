// App.tsx
import React, { useState } from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

const App: React.FC = () => {
  const [results, setResults] = useState<any[]>([]);

  const fetchSearchResults = async (query: string) => {
    try {
      const response = await axios.get(
        `https://api.bing.microsoft.com/v7.0/search?q=${query}`,
        {
          headers: {
            'Ocp-Apim-Subscription-Key': 'YOUR_BING_API_KEY',
          },
        }
      );
      setResults(response.data.webPages.value);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Bing Search App</h1>
      <SearchInput onSearch={fetchSearchResults} />
      <SearchResults results={results} />
    </div>
  );
};

export default App;
