import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { updateFPS } from '../../store/frames/actions';

import Preview from './Preview';

const PreviewContainer = (props) => {
  const { fps, frameList, updateFPSConnect } = props;
  return (
    <Preview
      fps={fps}
      frameList={frameList}
      updateFPS={updateFPSConnect}
    />
  );
};

PreviewContainer.propTypes = {
  fps: PropTypes.number.isRequired,

  frameList: PropTypes.arrayOf(PropTypes.string).isRequired,

  updateFPSConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  fps: state.frames.fps,
  frameList: state.frames.frameList,
});

const mapDispatchToProps = {
  updateFPSConnect: updateFPS,
};


export default connect(mapStateToProps, mapDispatchToProps)(PreviewContainer);
