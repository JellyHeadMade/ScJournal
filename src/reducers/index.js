import { combineReducers } from 'redux';
// import { reducer as form } from 'redux-form';

import postReducer from './postReducer';
import userReducer from './userReducer';
import testPostReducer from './testPostReducer';
import navigationReducer from './navigationReducer';
import scrollingReducer from './scrollingReducer';
import fullScreenImgReducer from './fullScreenImgReducer';

const rootReducer = combineReducers({
  // form,
  postReducer,
  userReducer,
  testPostReducer,
  navigationReducer,
  scrollingReducer,
  fullScreenImgReducer
});

export default rootReducer;