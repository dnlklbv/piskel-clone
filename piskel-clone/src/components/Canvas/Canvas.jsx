import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.isPainting = false;

    this.startDraw = this.startDraw.bind(this);
    this.continueDraw = this.continueDraw.bind(this);
    this.stopDraw = this.stopDraw.bind(this);
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    const { canvasSize } = this.props;
    this.pixelSize = this.canvas.offsetHeight / canvasSize;
  }

  getRelativeCoords(offsetX, offsetY) {
    const coords = {
      x: Math.floor(offsetX / this.pixelSize),
      y: Math.floor(offsetY / this.pixelSize),
    };
    return coords;
  }

  startDraw({ nativeEvent }) {
    this.isPainting = true;

    const { primaryColor } = this.props;
    const { ctx } = this;
    const { offsetX, offsetY } = nativeEvent;
    const coords = this.getRelativeCoords(offsetX, offsetY);
    ctx.fillStyle = primaryColor;
    ctx.fillRect(coords.x, coords.y, 1, 1);
  }

  continueDraw({ nativeEvent }) {
    if (!this.isPainting) return;

    const { primaryColor } = this.props;
    const { ctx } = this;
    const { offsetX, offsetY } = nativeEvent;
    const coords = this.getRelativeCoords(offsetX, offsetY);
    ctx.fillStyle = primaryColor;
    ctx.fillRect(coords.x, coords.y, 1, 1);
  }

  stopDraw() {
    if (!this.isPainting) return;
    this.isPainting = false;
  }

  render() {
    const { canvasSize } = this.props;

    return (
      <div className="canvas-wrapper">
        <canvas
          className="canvas"
          width={canvasSize}
          height={canvasSize}
          ref={(canvas) => { this.canvas = canvas; }}
          onMouseDown={this.startDraw}
          onMouseMove={this.continueDraw}
          onMouseUp={this.stopDraw}
          onMouseOut={this.stopDraw}
          onBlur={this.stopDraw}
        />
      </div>
    );
  }
}

Canvas.propTypes = {
  canvasSize: PropTypes.number.isRequired,

  primaryColor: PropTypes.string.isRequired,
};

export default Canvas;
