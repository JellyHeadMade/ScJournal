import { combineReducers } from 'redux';
// import { reducer as form } from 'redux-form';

import postReducer from './postReducer';
import userReducer from './userReducer';
import testPostReducer from './testPostReducer';
import navigationReducer from './navigationReducer';
import scrollingReducer from './scrollingReducer';

const rootReducer = combineReducers({
  // form,
  postReducer,
  userReducer,
  testPostReducer,
  navigationReducer,
  scrollingReducer
});

export default rootReducer;