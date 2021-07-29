import { fetchActors } from '../fetch/movieDB';

function removeDuplicates(data, key) {
  return [
    ...new Map(data.map((item) => [key(item), item])).values(),
  ];
}

const actorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_ACTORS':
      return removeDuplicates([...state, ...action.payload], (item) => item.id);
    default:
      return state;
  }
};

const fetchActorsStore = (page) => {
  const fetchActorsRedux = async (dispatch, getState) => {
    dispatch({ type: 'SHOW_LOADER' });
    fetchActors(page)
      .then((response) => {
        dispatch({ type: 'ALL_ACTORS', payload: response.data.results });
        dispatch({ type: 'HIDE_LOADER' });
      });
  };
  return fetchActorsRedux;
};

export { actorsReducer, fetchActorsStore };
