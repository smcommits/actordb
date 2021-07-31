import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../stylesheets/ActorCard.module.scss';
import MovieStats from './MovieStats';
import TVStats from './TVStats';
import AwardStats from './AwardStats';

const ActorStats = (props) => {
  const [currentTab, setCurrentTab] = useState('Movies');
  const switchTabs = (e) => {
    setCurrentTab(e.currentTarget.dataset.attribute);
  };

  const { movies, tvCredits, awards } = props;

  const isMovie = currentTab === 'Movies';
  const isTV = currentTab === 'T.V Shows';
  const isAwards = currentTab === 'Awards';

  return (
    <>
      <ul className={styles.stats_tab}>
        <li className={(isMovie && styles.active) || undefined}>
          <button type="button" onClick={switchTabs} data-attribute="Movies" onKeyUp={switchTabs}>
            <strong>Movies</strong>
            <span className={styles.count}>{movies.length}</span>
          </button>
        </li>
        <li className={(isTV && styles.active) || undefined}>
          <button type="button" onClick={switchTabs} data-attribute="T.V Shows" onKeyUp={switchTabs}>
            <strong>T.V Shows</strong>
            <span className={styles.count}>{tvCredits.length}</span>
          </button>
        </li>
        <li className={(isAwards && styles.active) || undefined}>
          <button type="button" onClick={switchTabs} data-attribute="Awards" onKeyUp={switchTabs}>
            <strong>Awards</strong>
            <span className={styles.count}>{awards.length}</span>
          </button>
        </li>
      </ul>

      {isMovie
        && (
        <section className={styles.stats_header}>
          <MovieStats movieStats={movies} />
        </section>
        )}

      {isTV
        && (
        <section className={styles.stats_header}>
          <TVStats tvStats={tvCredits} />
        </section>
        )}

      {isAwards
        && (
        <section className={styles.stats_header}>
          <AwardStats awards={awards} />
        </section>
        )}
    </>
  );
};

ActorStats.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
  tvCredits: PropTypes.instanceOf(Array).isRequired,
  awards: PropTypes.instanceOf(Array).isRequired,
};

export default ActorStats;
