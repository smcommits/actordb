import { combineReducers } from 'redux';
import { actorsReducer } from './actors';

const rootReducer = combineReducers({
  actors: actorsReducer,
});

export default rootReducer;
