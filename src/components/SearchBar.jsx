import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

 
  const handleSearch = () => {
    if (input.trim() !== '') {
      onSearch(input); 
    }
  };

  return (
    <div className="flex gap-2 items-center justify-center mt-10">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter GitHub username"
        className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        onClick={handleSearch}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
