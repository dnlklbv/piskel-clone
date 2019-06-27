import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Canvas from './Canvas';

const CanvasContainer = (props) => {
  const {
    canvasSize, currentTool, primaryColor, secondaryColor,
  } = props;
  return (
    <Canvas
      canvasSize={canvasSize}

      currentTool={currentTool}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    />
  );
};

CanvasContainer.propTypes = {
  canvasSize: PropTypes.number.isRequired,

  currentTool: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  canvasSize: state.canvas.canvasSize,

  currentTool: state.tools.currentTool,
  primaryColor: state.tools.primaryColor,
  secondaryColor: state.tools.secondaryColor,
});

export default connect(mapStateToProps, null)(CanvasContainer);
