import axios from 'axios';

const CONST_PARAMS = {
  api_key: 'fca3a09ec5fa268a31aa58f3449d68be',
  language: 'en-US',
};

const fetchActors = async (page) => {
  const response = await axios({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/person/popular',
    params: {
      ...CONST_PARAMS,
      page,
    },
  });
  return response;
};

const fetchTrendingActors = async (page) => {
  const response = await axios({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/person/day',
    params: {
      ...CONST_PARAMS,
      page,
    },
  });
  return response;
};
const fetchSearch = async (query, cancelToken) => {
  if (!query) return;
  const response = await axios({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/person',
    params: {
      query,
      api_key: 'fca3a09ec5fa268a31aa58f3449d68be',
    },
    cancelToken,
  });

  return response;
};

const fetchActorAwards = async (id) => {
  const response = axios({
    method: 'GET',
    url: `https://data-imdb1.p.rapidapi.com/actor/id/${id}/awards/`,
    headers: {
      'x-rapidapi-key': '2c7b502447msh6d3eaef885e50d5p18fa34jsn1b7cf01be631',
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
    },
  });

  return response;
};

const fetchActorDetails = async (id) => {
  const response = await axios({
    method: 'GET',
    url: `https://api.themoviedb.org/3/person/${id}`,
    params: {
      ...CONST_PARAMS,
      append_to_response: 'movie_credits,tv_credits',
    },
  });

  const actorAwards = await fetchActorAwards(response.data.imdb_id);
  return { ...response.data, ...actorAwards.data };
};

export {
  fetchSearch, fetchActors, fetchActorDetails, fetchTrendingActors,
};
