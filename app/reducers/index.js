import { combineReducers } from 'redux';
import warriors from './warriors';
import notify from './notify';

export default combineReducers({
  warriors,
  notify
});