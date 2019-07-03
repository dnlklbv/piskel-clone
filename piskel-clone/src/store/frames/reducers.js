import {
  UPDATE_CURRENT_FRAME, UPDATE_FPS, SELECT_FRAME, ADD_FRAME,
  DELETE_FRAME, DUPLICATE_FRAME, SWAP_FRAMES,
} from './actions';

const defaultState = {
  frameList: [null],
  currentFrameNumber: 0,
  fps: 12,
};

const reducer = (state = defaultState, action) => {
  const frameList = [...state.frameList];
  let { currentFrameNumber } = state;
  switch (action.type) {
    case UPDATE_CURRENT_FRAME:
      frameList[state.currentFrameNumber] = action.payload;
      return { ...state, frameList };
    case ADD_FRAME:
      frameList.push(null);
      return { ...state, frameList, currentFrameNumber: frameList.length - 1 };
    case DELETE_FRAME:
      if (frameList.length < 2) return state;
      frameList.splice(action.payload, 1);
      if (currentFrameNumber >= action.payload && currentFrameNumber > 0) currentFrameNumber -= 1;
      return {
        ...state,
        frameList,
        currentFrameNumber,
      };
    case DUPLICATE_FRAME:
      frameList.splice(action.payload, 0, frameList[action.payload]);
      return { ...state, frameList, currentFrameNumber: action.payload + 1 };
    case SWAP_FRAMES:
      // swap elements of frameList array
      [
        frameList[action.payload.firstFrameNumber], frameList[action.payload.secondFrameNumber],
      ] = [
        frameList[action.payload.secondFrameNumber], frameList[action.payload.firstFrameNumber],
      ];
      return {
        ...state,
        frameList,
        // if second swapping frame is selected,
        // change selected to first swapping frame to avoid frame replacement
        currentFrameNumber: action.payload.secondFrameNumber === state.currentFrameNumber
          ? action.payload.firstFrameNumber : action.payload.secondFrameNumber,
      };
    case UPDATE_FPS:
      return { ...state, fps: action.payload };
    case SELECT_FRAME:
      return { ...state, currentFrameNumber: action.payload };
    default: return state;
  }
};

export default reducer;
