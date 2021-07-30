import { combineReducers } from 'redux';
import { actorsReducer } from './actors';
import { actorDetailsReducer } from './actorDetails';
import loaderReducer from './loader';
import filterReducer from './filter';
import { trendingActorsReducer } from './trending';
import { nonBinary } from './nonBinary';

const rootReducer = combineReducers({
  actors: actorsReducer,
  actorDetails: actorDetailsReducer,
  loading: loaderReducer,
  filter: filterReducer,
  trending: trendingActorsReducer,
  nonBinary,
});

export default rootReducer;
