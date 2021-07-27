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

const fetchSearch = async (query) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=fca3a09ec5fa268a31aa58f3449d68be&language=en-US&query=${query}&page=1&include_adult=false`);
  const data = await response.json();
  if (data.results) {
    return data.results.slice(0, 5);
  }
  return [];
};

export { fetchSearch, fetchActors };
