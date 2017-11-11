import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const identity = x => x;

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunk, __DEV__ ? logger : identity)(createStore);

export default () => createStoreWithMiddleware(rootReducer);