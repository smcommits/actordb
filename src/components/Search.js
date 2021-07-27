import React from 'react';
import SearchItem from './SearchItem';
import { fetchSearch } from '../fetch/movieDB';

const Search = () => {
  const [query, setQuery] = React.useState('');
  const [options, setOptions] = React.useState([]);

  const fetchSearch = async (query) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=fca3a09ec5fa268a31aa58f3449d68be&language=en-US&query=${query}&page=1&include_adult=false`);
    const data = await response.json();
    if (data.results) {
      return data.results.slice(0, 5);
    }
    return [];
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    fetchSearch(query).then((data) => setOptions(data));
  };

  const handleClassChange = () => {
    document.getElementById('nameSelect').classList.toggle('show');
  };

  const optionsList = options.map((option) => (<SearchItem key={option.id} option={option} />));
  console.log(options);

  return (
    <div className="searchBar">
      <input type="text" onChange={handleChange} onFocus={handleClassChange} onBlur={handleClassChange} />
      <ul id="nameSelect" name="name" className="name-list">
        {optionsList}
      </ul>
    </div>
  );
};

export default Search;
