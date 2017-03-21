import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();
const middleware = applyMiddleware(loggerMiddleware);
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);
export default store;