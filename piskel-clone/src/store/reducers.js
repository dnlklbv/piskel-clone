import { combineReducers } from 'redux';

import toolsReducer from './tools/reducers';
import canvasReducer from './canvas/reducers';

export default combineReducers({
  tools: toolsReducer,
  canvas: canvasReducer,
});
