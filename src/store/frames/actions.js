export const UPDATE_CURRENT_FRAME = 'UPDATE_CURRENT_FRAME';
export const ADD_FRAME = 'ADD_FRAME';
export const UPDATE_FPS = 'UPDATE_FPS';
export const SELECT_FRAME = 'SELECT_FRAME';
export const DELETE_FRAME = 'DELETE_FRAME';
export const DUPLICATE_FRAME = 'DUPLICATE_FRAME';
export const SWAP_FRAMES = 'SWAP_FRAMES';

export const updateCurrentFrame = frame => ({
  type: UPDATE_CURRENT_FRAME,
  payload: frame,
});

export const updateFPS = fps => ({
  type: UPDATE_FPS,
  payload: fps,
});

export const selectFrame = number => ({
  type: SELECT_FRAME,
  payload: number,
});

export const addFrame = () => ({
  type: ADD_FRAME,
});

export const deleteFrame = number => ({
  type: DELETE_FRAME,
  payload: number,
});

export const duplicateFrame = number => ({
  type: DUPLICATE_FRAME,
  payload: number,
});

export const swapFrames = numbers => ({
  type: SWAP_FRAMES,
  payload: numbers,
});
