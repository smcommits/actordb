import React, { useState } from 'react';
import styles from '../stylesheets/ActorCard.module.scss';

const Biography = (props) => {
  const { text } = props;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={styles.biography_text}>
      {isReadMore ? text.slice(0, 500) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? '...read more' : ' show less'}
      </span>
    </p>
  );
};

export default Biography;
