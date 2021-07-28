import { combineReducers } from 'redux';
import { actorsReducer } from './actors';
import { actorDetailsReducer } from './actorDetails';
import loaderReducer from './loader';

const rootReducer = combineReducers({
  actors: actorsReducer,
  actorDetails: actorDetailsReducer,
  loading: loaderReducer,
});

export default rootReducer;
