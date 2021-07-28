import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomSearchHook from './CustomSearchHook';
import SearchItem from './SearchItem';
import styles from '../stylesheets/Search.module.scss';

const Search = (props) => {
  const { parent } = props;
  const [query, setQuery] = useState('');
  const isParentActor = parent === 'actorPage';

  const { options, loading } = CustomSearchHook(query);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleClassChange = () => {
    document.getElementById('nameSelect').classList.toggle(styles.show);
  };

  const optionsList = options.map((option) => (<SearchItem key={option.id} option={option} />));

  return (
    <div className={styles.search_bar}>
      <div className={`${styles.search_input}`}>
        {isParentActor
        && (
        <Link to="/">
          <i className="las la-angle-left" />
        </Link>
        )}
        <i className={`las la-search ${isParentActor && styles.reverse_search_bar}`} />
        <input className={styles.input} type="text" onChange={handleSearch} onFocus={handleClassChange} onBlur={handleClassChange} />
      </div>
      <ul id="nameSelect" name="name" className={styles.name_list}>
        {optionsList}
        <li>{loading && 'Loading...'}</li>
      </ul>
    </div>
  );
};
export default Search;
