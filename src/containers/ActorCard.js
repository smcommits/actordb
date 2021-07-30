import { React, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchActorDetailsRedux } from '../reducers/actorDetails';
import Loader from '../components/Loader';
import Biography from '../components/Biography';
import ActorStats from '../components/ActorStats';
import styles from '../stylesheets/ActorCard.module.scss';
import Search from '../components/Search';

const ActorCard = (props) => {
  const {
    id, getActor, actorDetails, loading,
  } = props;

  const {
    name, biography, movie_credits: movieCredits, tv_credits: tvCredits, profile_path: profilePath, Awards: awards,
  } = actorDetails || {};
  useEffect(() => {
    getActor(id);
  }, []);

  const loaderStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  console.log(actorDetails);
  return (
    <section className={styles.main}>
      <Loader loading={loading} absoluteStyle={loaderStyle} />
      {actorDetails && (
        <>
          <Search parent="actorPage" />
          <section className="actor-section">
            <section className={styles.image_details}>
              <figure className={styles.actor_image}>
                <img src={`https://image.tmdb.org/t/p/w780/${profilePath}`} alt={name} />
              </figure>
              <section className={styles.about_section}>
                <h1>{name}</h1>
                <Biography text={biography} />
              </section>
            </section>
            <ActorStats movies={movieCredits.cast} tvCredits={tvCredits.cast} awards={awards} />
          </section>
        </>
      )}
    </section>
  );
};

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
