import { useState } from 'react';
import styles from '../stylesheets/ActorCard.module.scss';

const TVStats = (props) => {
  const [index, setIndex] = useState(10);
  const { tvStats } = props;
  const showMore = () => {
    setIndex(index + 10);
  };

  const tvStatsFiltered = tvStats.slice(0, index).map((tv) => (
    <tr className={styles.table_row}>
      <td>{tv.original_name}</td>
      <td>{tv.character}</td>
      <td>{tv.first_air_date}</td>
    </tr>
  ));

  return (
    <section className={styles.table_section}>
      <table className={styles.stats_table}>
        <tr className={styles.table_header}>
          <th>Show Name</th>
          <th>Character Name</th>
          <th>First Air</th>
        </tr>
        {tvStatsFiltered}
        {tvStats.length - index > 0 && (
        <tr className={styles.table_row}>
          <td align="center" colSpan="3">
            <button type="button" className={styles.showMore} onClick={showMore}>Show More</button>
          </td>
        </tr>
        )}
      </table>

    </section>
  );
};

export default TVStats;
