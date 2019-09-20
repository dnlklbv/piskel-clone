import React from 'react';
import PropTypes from 'prop-types';

const CursorCoords = ({ x, y }) => (
  <p className="cursor-coords">{(x !== null && y !== null) ? `x: ${x + 1} y: ${y + 1}` : ''}</p>
);

CursorCoords.defaultProps = {
  x: null,
  y: null,
};

CursorCoords.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};


export default CursorCoords;
