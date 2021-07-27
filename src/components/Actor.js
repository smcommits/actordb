import React from 'react';

const Actor = (props) => {
  const { actor, reference } = props;
  const ref = reference || null;
  return (
    <div ref={ref} className="actor-wrapper">
      <figure className="actor">
        <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt="" />
      </figure>
      <figcaption className="actor-caption">
        <h2>{actor.name}</h2>
        <p>
          <strong>Popularity: </strong>
          {actor.popularity}
        </p>
        <p>
          {actor.id}
        </p>
      </figcaption>
    </div>
  );
};

export default Actor;
