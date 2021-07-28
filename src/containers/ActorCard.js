import { React, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchActorDetailsRedux } from '../reducers/actorDetails';
import Loader from '../components/Loader';
import Biography from '../components/Biography';
import ActorStats from '../components/ActorStats';
import styles from '../stylesheets/ActorCard.module.scss';

const ActorCard = (props) => {
  const {
    id, getActor, actorDetails, loading,
  } = props;

  const {
    name, biography, movie_credits: movieCredits, tv_credits, profile_path: profilePath, Awards: awards,
  } = actorDetails || {};
  useEffect(() => {
    getActor(id);
  }, []);
  console.log(actorDetails);
  return (
    <>
      <Loader loading={loading} />
      {actorDetails && (
        <section className="actor-section">
          <figure className={styles.actor_image}>
            <img src={`https://image.tmdb.org/t/p/w780/${profilePath}`} alt={name} />
          </figure>

          <section className={styles.about_section}>
            <h1>{name}</h1>
            <Biography text={biography} />
            <ActorStats />
          </section>
        </section>
      )}

    </>
  );
};
// <p className="total-movies">{movieCredits.cast.length + movieCredits.crew.length}</p>
// <p className="total-awards">{awards.length}</p>
// <p className="total-tv">{tv_credits.cast.length}</p>

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  return {
    actorDetails: state.actorDetails[id],
    loading: state.loading.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getActor: (id) => {
    dispatch(fetchActorDetailsRedux(id));
  },
});

const ActorCardConnected = connect(mapStateToProps, mapDispatchToProps)(ActorCard);

export default ActorCardConnected;
