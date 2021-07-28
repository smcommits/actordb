import { useState } from 'react';
import styles from '../stylesheets/ActorCard.module.scss';

const MovieStats = (props) => {
  const [index, setIndex] = useState(10);
  const { movieStats } = props;

  const showMore = () => {
    setIndex(index + 10);
  };

  const movieStatsFiltered = movieStats.slice(0, index).map((movie) => (
    <tr className={styles.table_row}>
      <td>{movie.original_title}</td>
      <td>{movie.character}</td>
      <td>{movie.release_date}</td>
    </tr>
  ));

  return (
    <section className={styles.table_section}>
    <table className={styles.stats_table}>
      <tr className={styles.table_header}>
        <th>Movie Name</th>
        <th>Character Name</th>
        <th>Release Date</th>
      </tr>
      {movieStatsFiltered}
      <tr className={styles.table_row}>
        <td align='center' colSpan="3">
          <button type="button" className={styles.showMore} onClick={showMore}>Show More</button>
        </td>
      </tr>
    </table>

    </section>
  );
};

export default MovieStats;
