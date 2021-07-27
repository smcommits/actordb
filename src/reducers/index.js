import { combineReducers } from 'redux';
import { actorsReducer } from './actors';
import { actorDetailsReducer } from './actorDetails';

const rootReducer = combineReducers({
  actors: actorsReducer,
  actorDetails: actorDetailsReducer,
});

export default rootReducer;
