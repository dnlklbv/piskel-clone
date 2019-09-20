import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateCurrentFrame } from '../../store/frames/actions';

import Canvas from './Canvas';

const CanvasContainer = (props) => {
  const {
    canvasSize,
    currentTool, primaryColor, secondaryColor,
    currentFrameNumber, frameList, updateCurrentFrameConnect,
  } = props;
  return (
    <Canvas
      canvasSize={canvasSize}
      currentFrameNumber={currentFrameNumber}
      frameList={frameList}

      currentTool={currentTool}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}

      updateCurrentFrame={updateCurrentFrameConnect}
    />
  );
};

CanvasContainer.propTypes = {
  canvasSize: PropTypes.number.isRequired,

  currentFrameNumber: PropTypes.number.isRequired,
  frameList: PropTypes.arrayOf(PropTypes.string).isRequired,

  updateCurrentFrameConnect: PropTypes.func.isRequired,

  currentTool: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  canvasSize: state.canvas.canvasSize,

  currentFrameNumber: state.frames.currentFrameNumber,
  frameList: state.frames.frameList,

  currentTool: state.tools.currentTool,
  primaryColor: state.tools.primaryColor,
  secondaryColor: state.tools.secondaryColor,
});

const mapDispatchToProps = {
  updateCurrentFrameConnect: updateCurrentFrame,
};

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer);
