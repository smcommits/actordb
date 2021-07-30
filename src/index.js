import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './stylesheets/index.scss';
import rootReducer from './reducers/index';
import { fetchActorsStore } from './reducers/actors';
import { fetchActorDetailsRedux } from './reducers/actorDetails';
import { fetchImage } from './fetch/movieDB';
import './global/binaryGenderData';
import App from './components/App';
import {getNonBinary} from './reducers/nonBinary'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, composedEnhancer);
store.dispatch(fetchActorsStore(1));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
