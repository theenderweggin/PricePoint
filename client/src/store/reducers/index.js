import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import currentUser from './currentUser';
import results from './results';

export default combineReducers({
  router: routerReducer,
  user: currentUser,
  results
});
