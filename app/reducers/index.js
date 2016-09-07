import { combineReducers } from 'redux';
import warriors from './warriors';
import notifications from './notifications';

export default combineReducers({
  warriors,
  notifications
});