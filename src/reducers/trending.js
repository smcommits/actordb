import { fetchTrendingActors } from '../fetch/movieDB';

function removeDuplicates(data, key) {
  return [
    ...new Map(data.map((item) => [key(item), item])).values(),
  ];
}

const trendingActorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'TRENDING_ACTORS':
      return removeDuplicates([...state, ...action.payload], (item) => item.id);
    default:
      return state;
  }
};

const fetchTrendingActorsStore = (page) => {
  const fetchActorsRedux = async (dispatch, getState) => {
    const response = await fetchTrendingActors(page);
    dispatch({ type: 'TRENDING_ACTORS', payload: response.data.results });
  };
  return fetchActorsRedux;
};

export { trendingActorsReducer, fetchTrendingActorsStore };
