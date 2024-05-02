import { Input } from 'antd';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      onSearch(searchQuery.trim());
      setSearchQuery('');
    }
  };

  return (
    <Input
      placeholder="Search tasks..."
      value={searchQuery}
      onChange={handleInputChange}
      onKeyDown={handleSearch}
    />
  );
};

export default SearchBar;