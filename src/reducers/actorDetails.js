import { fetchActorDetails } from '../fetch/movieDB';

const actorDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ('GET_DETAILS'):
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};

const fetchActorDetailsRedux = (id) => {
  const thunkFuntion = async (dispatch, getState) => {
    const response = await fetchActorDetails(id);
    dispatch({ type: 'GET_DETAILS', payload: response.data });
  };

  return thunkFuntion;
};

export { actorDetailsReducer, fetchActorDetailsRedux };
