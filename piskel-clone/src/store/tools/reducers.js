import {
  SELECT_TOOL, SELECT_PRIMARY_COLOR, SELECT_SECONDARY_COLOR, SWAP_COLORS,
} from './actions';

const defaultState = {
  currentTool: 'pen',
  primaryColor: '#000000',
  secondaryColor: '#ffffff',
};

const reducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case SELECT_TOOL:
      return {
        ...state, currentTool: action.payload,
      };
    case SELECT_PRIMARY_COLOR:
      return {
        ...state, primaryColor: action.payload,
      };
    case SELECT_SECONDARY_COLOR:
      return {
        ...state, secondaryColor: action.payload,
      };
    case SWAP_COLORS:
      newState = { ...state };
      newState.primaryColor = state.secondaryColor;
      newState.secondaryColor = state.primaryColor;
      return newState;
    default: return state;
  }
};

export default reducer;
