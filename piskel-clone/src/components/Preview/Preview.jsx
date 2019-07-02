import React from 'react';

class Preview extends React.Component {
  constructor(props) {
    super(props);

    this.isFullcreen = false;
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
  }

  toggleFullScreen() {
    if (!this.isFullcreen) {
      this.preview.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    this.isFullcreen = !this.isFullcreen;
  }

  render() {
    return (
      <div className="preview-wrapper">
        <div className="preview" ref={(preview) => { this.preview = preview; }}>
          <button type="button" className="preview__button" onClick={this.toggleFullScreen} />
        </div>
        <div className="preview-control">
          <p>FPS:</p>
          <input className="preview-control__range" type="range" min="1" max="24" />
          <p>12</p>
        </div>
      </div>
    );
  }
}
export default Preview;
