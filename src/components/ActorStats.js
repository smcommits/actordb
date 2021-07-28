import { useState } from 'react';
import styles from '../stylesheets/ActorCard.module.scss';
import MovieStats from './MovieStats';
import TVStats from './TVStats';
import AwardStats from './AwardStats';

const ActorStats = (props) => {
  const [currentTab, setCurrentTab] = useState('Movies');
  const switchTabs = (e) => {
    setCurrentTab(e.target.textContent);
  };

  const { movies, tvCredits, awards } = props;

  const isMovie = currentTab === 'Movies';
  const isTV = currentTab === 'T.V Shows';
  const isAwards = currentTab === 'Awards';

  return (
    <>
      <ul className={styles.stats_tab}>
        <li onClick={switchTabs} className={isMovie && styles.active}>Movies</li>
        <li onClick={switchTabs} className={isTV && styles.active}>T.V Shows</li>
        <li onClick={switchTabs} className={isAwards && styles.active}>Awards</li>
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

export default ActorStats;
