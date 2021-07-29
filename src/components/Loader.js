import React from 'react';
import styles from '../stylesheets/Loader.module.scss';

const Loader = (props) => {
  const { loading, absoluteStyle } = props;

  if (!loading) return null;

  return (
    <div className={styles.loading} style={absoluteStyle || {}}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  );
};

export default Loader;
