import React from 'react';
import styles from '../stylesheets/ActorCard.module.scss';

const Empty = (props) => (
  <section className={styles.empty_content}>
    <h4>
      Wow! It's empty down here.
    </h4>
  </section>
);

export default Empty;
