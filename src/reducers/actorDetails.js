/* eslint-disable no-unused-vars */

import { fetchActorDetails } from '../fetch/movieDB';

const actorDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ('GET_DETAILS'):
      return {
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};

const fetchActorDetailsRedux = (id) => {
  const thunkFuntion = async (dispatch, getState) => {
    dispatch({ type: 'SHOW_LOADER' });
    fetchActorDetails(id)
      .then((response) => {
        dispatch({ type: 'GET_DETAILS', payload: response });
        dispatch({ type: 'HIDE_LOADER' });
      });
  };

  return thunkFuntion;
};

export { actorDetailsReducer, fetchActorDetailsRedux };
