import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DownloadButton from './DownloadButton';

const DownloadButtonContainer = (props) => {
  const { frameList, fps } = props;
  return (
    <DownloadButton
      frameList={frameList}
      fps={fps}
    />
  );
};

DownloadButtonContainer.propTypes = {
  frameList: PropTypes.arrayOf(PropTypes.string).isRequired,
  fps: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  frameList: state.frames.frameList,
  fps: state.frames.fps,
});

export default connect(mapStateToProps, null)(DownloadButtonContainer);
