import { combineReducers } from 'redux';

import toolsReducer from './tools/reducers';

export default combineReducers({
  tools: toolsReducer,
});
