import React from 'react';

import PropTypes from 'prop-types';

class Preview extends React.Component {
  constructor(props) {
    super(props);

    this.isFullcreen = false;
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
    this.updateFPS = this.updateFPS.bind(this);
  }

  componentDidUpdate() {
    const { fps, frameList } = this.props;
    let i = 0;
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      i += 1;
      if (i === frameList.length) i = 0;
      this.preview.style.backgroundImage = `url(${frameList[i]})`;
    }, Math.round(1000 / fps));
  }

  toggleFullScreen() {
    if (!this.isFullcreen) {
      this.preview.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    this.isFullcreen = !this.isFullcreen;
  }

  updateFPS(event) {
    const { updateFPS } = this.props;
    updateFPS(+event.target.value);
  }

  render() {
    const { fps } = this.props;
    return (
      <div className="preview-wrapper">
        <div className="preview" ref={(preview) => { this.preview = preview; }}>
          <button type="button" className="preview__button" onClick={this.toggleFullScreen} />
        </div>
        <div className="preview-control">
          <p>FPS:</p>
          <input className="preview-control__range" type="range" min="1" max="24" value={fps} onChange={this.updateFPS} />
          <p>{fps}</p>
        </div>
      </div>
    );
  }
}

Preview.propTypes = {
  fps: PropTypes.number.isRequired,

  frameList: PropTypes.arrayOf(PropTypes.string).isRequired,

  updateFPS: PropTypes.func.isRequired,
};

export default Preview;
