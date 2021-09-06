import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import postReducer from './postReducer';

const rootReducer = combineReducers({
  form,
  postReducer
});

export default rootReducer;