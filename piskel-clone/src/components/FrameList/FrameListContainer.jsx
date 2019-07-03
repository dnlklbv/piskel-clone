import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  addFrame, deleteFrame, duplicateFrame, selectFrame, swapFrames,
} from '../../store/frames/actions';

import FrameList from './FrameList';

const FrameListContainer = (props) => {
  const {
    frameList, currentFrameNumber, addFrameConnect, selectFrameConnect,
    deleteFrameConnect, duplicateFrameConnect, swapFramesConnect,
  } = props;
  return (
    <FrameList
      frameList={frameList}
      currentFrameNumber={currentFrameNumber}

      addFrame={addFrameConnect}
      deleteFrame={deleteFrameConnect}
      selectFrame={selectFrameConnect}
      duplicateFrame={duplicateFrameConnect}
      swapFrames={swapFramesConnect}
    />
  );
};

FrameListContainer.propTypes = {
  frameList: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentFrameNumber: PropTypes.number.isRequired,

  addFrameConnect: PropTypes.func.isRequired,
  selectFrameConnect: PropTypes.func.isRequired,
  deleteFrameConnect: PropTypes.func.isRequired,
  duplicateFrameConnect: PropTypes.func.isRequired,
  swapFramesConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  frameList: state.frames.frameList,
  currentFrameNumber: state.frames.currentFrameNumber,
});

const mapDispatchToProps = {
  addFrameConnect: addFrame,
  selectFrameConnect: selectFrame,
  deleteFrameConnect: deleteFrame,
  duplicateFrameConnect: duplicateFrame,
  swapFramesConnect: swapFrames,
};

export default connect(mapStateToProps, mapDispatchToProps)(FrameListContainer);
