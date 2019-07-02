import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { updateFPS } from '../../store/frames/actions';

import Preview from './Preview';

const PreviewContainer = (props) => {
  const { fps, updateFPSConnect } = props;
  return (
    <Preview
      fps={fps}
      updateFPS={updateFPSConnect}
    />
  );
};

PreviewContainer.propTypes = {
  fps: PropTypes.number.isRequired,

  updateFPSConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  fps: state.frames.fps,
});

const mapDispatchToProps = {
  updateFPSConnect: updateFPS,
};


export default connect(mapStateToProps, mapDispatchToProps)(PreviewContainer);
