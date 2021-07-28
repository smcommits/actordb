import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../stylesheets/Search.module.scss';

const SearchItem = (props) => {
  const { option, getActor } = props;

  return (
    <li className={styles.search_list_item}>
      <Link to={`/actor/${option.id}`}>
        <div className={styles.search_item}>
          {option.name}
          <figure>
            <img src={`https://image.tmdb.org/t/p/w200/${option.profile_path}`} alt="" />
          </figure>
        </div>
      </Link>
    </li>
  );
};

export default SearchItem;
