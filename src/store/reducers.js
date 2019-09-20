import { combineReducers } from 'redux';

import toolsReducer from './tools/reducers';
import canvasReducer from './canvas/reducers';
import framesReducer from './frames/reducers';

export default combineReducers({
  tools: toolsReducer,
  canvas: canvasReducer,
  frames: framesReducer,
});
