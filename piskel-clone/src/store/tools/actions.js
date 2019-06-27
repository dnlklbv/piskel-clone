export const SELECT_TOOL = 'SELECT_TOOL';
export const SELECT_PRIMARY_COLOR = 'SELECT_PRIMARY_COLOR';
export const SELECT_SECONDARY_COLOR = 'SELECT_SECONDARY_COLOR';
export const SWAP_COLORS = 'SWAP_COLORS';

export const selectTool = tool => ({
  type: SELECT_TOOL,
  payload: tool,
});

export const selectPrimaryColor = color => ({
  type: SELECT_PRIMARY_COLOR,
  payload: color,
});

export const selectSecondaryColor = color => ({
  type: SELECT_SECONDARY_COLOR,
  payload: color,
});

export const swapColors = () => ({
  type: SWAP_COLORS,
});
