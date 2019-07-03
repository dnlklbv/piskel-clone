import React from 'react';
import PropTypes from 'prop-types';

import GIF from '../../utils/gif';

const DownloadButton = (props) => {
  const { frameList, fps } = props;
  const exportGif = () => {
    const delay = Math.round(1000 / fps);
    const gif = new GIF({
      workers: 1,
      quality: 5,
    });

    frameList.forEach((frame) => {
      const img = new Image();
      // paste empty image in case frame is empty
      img.src = frame || ' ';
      gif.addFrame(img, { delay });
    });

    gif.on('finished', (blob) => {
      window.open(URL.createObjectURL(blob));
    });

    gif.render();
  };

  return (
    <button type="button" className="download-button" onClick={() => { exportGif(); }} />
  );
};

DownloadButton.propTypes = {
  frameList: PropTypes.arrayOf(PropTypes.string).isRequired,
  fps: PropTypes.number.isRequired,
};

export default DownloadButton;
