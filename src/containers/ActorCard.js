import { React, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchActorDetailsRedux } from '../reducers/actorDetails';

const ActorCard = (props) => {
  const { id, getActor, actorDetails } = props;


  useEffect(() => {

  getActor(id);
  }, []);
  
  return (
    <h1>Hey</h1>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  return { actorDetails: state.actorDetails[id] };
};

const mapDispatchToProps = (dispatch) => ({
  getActor: (id) => {
    dispatch(fetchActorDetailsRedux(id));
  },
});

const ActorCardConnected = connect(mapStateToProps, mapDispatchToProps)(ActorCard);

export default ActorCardConnected;
