import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import postReducer from './postReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  form,
  postReducer,
  userReducer
});

export default rootReducer;