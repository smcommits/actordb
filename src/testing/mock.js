/* eslint-disable no-unused-vars */
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { createStore, applyMiddleware } from 'redux';
import { render as libraryRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

const composedEnhancer = applyMiddleware(thunkMiddleware);

const render = (
  ui,
  {
    store = createStore(rootReducer, composedEnhancer),
    ...renderOptions
  } = {},
) => {
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

  return libraryRender(ui, { wrapper: Wrapper, ...renderOptions });
};

function intersectionObserverMock({
  root = null,
  rootMargin = '',
  thresholds = [],
  disconnect = () => null,
  observe = () => null,
  takeRecords = () => [],
  unobserve = () => null,
} = {}) {
  class MockIntersectionObserver {
    constructor() {
      this.root = root;
      this.rootMargin = rootMargin;
      this.thresholds = thresholds;
      this.disconnect = disconnect;
      this.observe = observe;
      this.takeRecords = takeRecords;
      this.unobserve = unobserve;
    }
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });

  Object.defineProperty(global, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
}
export {
  render,
  intersectionObserverMock,
};
