import React from 'react';
import PropTypes from 'prop-types';
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

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  absoluteStyle: PropTypes.instanceOf(Object),
};

Loader.defaultProps = {
  absoluteStyle: {},
};

export default Loader;
