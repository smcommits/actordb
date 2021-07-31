import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../stylesheets/ActorCard.module.scss';

const MovieStats = (props) => {
  const [index, setIndex] = useState(10);
  const { movieStats } = props;
  const showMore = () => {
    setIndex(index + 10);
  };

  const movieStatsFiltered = movieStats.slice(0, index).map((movie) => (
    <tr key={Math.random()} className={styles.table_row}>
      <td>{movie.original_title}</td>
      <td>{movie.character}</td>
      <td>{movie.release_date}</td>
    </tr>
  ));

  return (
    <section className={styles.table_section}>
      <table className={styles.stats_table}>
        <tbody>
          <tr className={styles.table_header}>
            <th>Movie Name</th>
            <th>Character Name</th>
            <th>Release Date</th>
          </tr>
          {movieStatsFiltered}
          {movieStats.length - index > 0 && (
          <tr className={styles.table_row}>
            <td align="center" colSpan="3">
              <button type="button" className={styles.showMore} onClick={showMore}>Show More</button>
            </td>
          </tr>
          )}
        </tbody>
      </table>

    </section>
  );
};

MovieStats.propTypes = {
  movieStats: PropTypes.instanceOf(Array).isRequired,
};
export default MovieStats;
