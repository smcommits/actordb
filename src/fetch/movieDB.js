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

const fetchSearch = async (query, cancelToken) => {
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

const fetchActorDetails = async (id) => {
  const response = await axios({
    method: 'GET',
    url: `https://api.themoviedb.org/3/person/${id}`,
    params: {
      ...CONST_PARAMS,
    },
  });

  return response;
};

export { fetchSearch, fetchActors, fetchActorDetails };
