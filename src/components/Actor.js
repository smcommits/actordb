import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../stylesheets/Homepage.module.scss';

const Actor = (props) => {
  const { actor, reference } = props;
  const ref = reference || null;
  return (
    <Link to={`/actor/${actor.id}`}>
      <div ref={ref} className={styles.actor_wrapper}>
        <figure className={styles.actor_image}>
          <img src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt="" />
        </figure>
        <figcaption className="actor-caption">
          <h2>{actor.name}</h2>
          <p>
            <strong>Popularity: </strong>
            {actor.popularity}
          </p>
        </figcaption>
      </div>
    </Link>
  );
};

export default Actor;
