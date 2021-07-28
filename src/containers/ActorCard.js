import { React, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchActorDetailsRedux } from '../reducers/actorDetails';
import Loader from '../components/Loader';

const ActorCard = (props) => {
  const {
    id, getActor, actorDetails, loading,
  } = props;
  console.log(actorDetails)
  useEffect(() => {
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <section className="actor-section">
        <h1>{actorDetails.name}</h1>
      </section>
    </>
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
