import React, { useState } from 'react';
import CustomSearchHook from './CustomSearchHook';
import SearchItem from './SearchItem';

export default function Search() {
  const [query, setQuery] = useState('');

  const { options, loading } = CustomSearchHook(query);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleClassChange = () => {
    document.getElementById('nameSelect').classList.toggle('show');
  };

  const optionsList = options.map((option) => (<SearchItem key={option.id} option={option} />));

  return (
    <div className="searchBar">
      <input type="text" onChange={handleSearch} onFocus={handleClassChange} onBlur={handleClassChange} />
      <ul id="nameSelect" name="name" className="name-list">
        {optionsList}
        <li>{loading && 'Loading...'}</li>
      </ul>
    </div>
  );
}
