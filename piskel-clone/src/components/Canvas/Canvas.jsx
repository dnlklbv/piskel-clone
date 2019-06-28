import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PenTool from '../../tools/PenTool';
import MirrorPenTool from '../../tools/MirrorPenTool';
import FillTool from '../../tools/FillTool';
import EraserTool from '../../tools/EraserTool';

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

    const { primaryColor, currentTool } = this.props;
    const { offsetX, offsetY } = nativeEvent;
    const { ctx } = this;
    const coords = this.getRelativeCoords(offsetX, offsetY);
    const { x, y } = coords;

    switch (currentTool) {
      case 'pen':
        this.toolObject = new PenTool(ctx, primaryColor);
        break;
      case 'mirror-pen':
        this.toolObject = new MirrorPenTool(ctx, primaryColor);
        break;
      case 'fill':
        this.toolObject = new FillTool(ctx, primaryColor);
        break;
      case 'eraser':
        this.toolObject = new EraserTool(ctx);
        break;
      default:
    }

    this.toolObject.startDraw(x, y);
  }

  continueDraw({ nativeEvent }) {
    if (!this.isPainting) return;

    const { offsetX, offsetY } = nativeEvent;
    const coords = this.getRelativeCoords(offsetX, offsetY);
    const { x, y } = coords;

    try {
      this.toolObject.continueDraw(x, y);
    } catch (error) {
      if (error.name !== 'TypeError') throw error;
    }
  }

  stopDraw() {
    if (!this.isPainting) return;
    this.isPainting = false;

    try {
      this.toolObject.stopDraw();
    } catch (error) {
      if (error.name !== 'TypeError') throw error;
    }
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

  currentTool: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
};

export default Canvas;
