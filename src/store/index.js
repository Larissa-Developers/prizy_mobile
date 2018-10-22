import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { isDevelopmentEnvironment } from '../environment';
import rootReducer from './reducers';

const logger = createLogger({
  predicate: (getState, action) => isDevelopmentEnvironment(),
  collapsed: true,
  duration: true,
});

const enhancers = [];
const middlewares = [thunk, logger];

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigation'], // navigation will not be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

if (isDevelopmentEnvironment()) {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const configureStore = () => {
  const store = createStore(persistedReducer, composedEnhancers);
  const persistor = persistStore(store);

  if (isDevelopmentEnvironment()) {
    window.store = store;
  }
  return { store, persistor };
};

export default configureStore;
