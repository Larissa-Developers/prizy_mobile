import { combineReducers } from 'redux';
import account from './account';
import events from './events-reducer';

export default combineReducers({
  account,
  events,
});
