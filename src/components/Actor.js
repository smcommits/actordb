import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from '../stylesheets/Homepage.module.scss';

const Actor = (props) => {
  const { actor, reference } = props;
  const ref = reference || null;

  const createImageUrl = () => {
    if (!actor.profile_path) {
      return `${process.env.PUBLIC_URL} /image404.png`;
    }
    return `https://image.tmdb.org/t/p/original/${actor.profile_path}`;
  };
  return (
    <Link to={`/actor/${actor.id}`}>
      <div ref={ref} className={styles.actor_wrapper}>
        <figure className={styles.actor_image}>
          <img src={createImageUrl()} alt={actor.name} />
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

Actor.propTypes = {
  actor: PropTypes.instanceOf(Object).isRequired,
  reference: PropTypes.func,
};

Actor.defaultProps = {
  reference: null,
};

export default Actor;
