import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import allReducers from './reducers';
import rootSaga from './sagas';

// Initialize the saga middleware
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

export const store = createStore(
  allReducers,
  compose(
    applyMiddleware(sagaMiddleware, logger)
  )
);
sagaMiddleware.run(rootSaga);