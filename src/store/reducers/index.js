import { combineReducers } from 'redux';
import profileReducer from './profile';
import consultantReducer from './consultant';
import errorReducer from './error';

const rootReducer = combineReducers({
  consultant: consultantReducer,
  profile: profileReducer,
  error: errorReducer,
});

export default rootReducer;
