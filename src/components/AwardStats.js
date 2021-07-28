import { useState } from 'react';
import styles from '../stylesheets/ActorCard.module.scss';

const AwardStats = (props) => {
  const [index, setIndex] = useState(10);
  const { awards } = props;
  const showMore = () => {
    setIndex(index + 10);
  };

  const awardsStatsFiltered = awards.slice(0, index).map((award) => (
    <tr className={styles.table_row}>
      <td colSpan="2">{award.award}</td>
      <td>{award.event_name}</td>
      {award.movie && (
      <td>
        Movie:
        {' '}
        <br />
        {award.movie.title}
      </td>
      )}
      {award.series && (
      <td>
        TV:
        {' '}
        <br />
        {award.series.title}
      </td>
      )}
      <td>{award.type}</td>
    </tr>
  ));

  return (
    <section className={styles.table_section}>
      <table className={styles.stats_table}>
        <tr className={styles.table_header}>
          <th colSpan="2">Award</th>
          <th>Event</th>
          <th>Movie/TV</th>
          <th>Result</th>
        </tr>
        {awardsStatsFiltered}
        {awards.length - index > 0 && (
        <tr className={styles.table_row}>
          <td align="center" colSpan="4">
            <button type="button" className={styles.showMore} onClick={showMore}>Show More</button>
          </td>
        </tr>
        )}
      </table>

    </section>
  );
};

export default AwardStats;
