import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchActorDetailsRedux } from '../reducers/actorDetails';

const ActorPage = (props) => {
  const { getActor } = props;
  const { id } = useParams();
  console.log(props)

  getActor(id);
  return (
    <h1>Hey</h1>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps
  return {actorDetails: state.actorDetails[id]}
}

const mapDispatchToProps = (dispatch) => ({
  getActor: (id) => {
    dispatch(fetchActorDetailsRedux(id));
  },
});

const ActorPageConnected = connect(mapStateToProps, mapDispatchToProps)(ActorPage);

export default ActorPageConnected;
