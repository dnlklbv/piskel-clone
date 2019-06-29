import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CursorCoords from '../CursorCoords';

import PenTool from '../../tools/PenTool';
import MirrorPenTool from '../../tools/MirrorPenTool';
import FillTool from '../../tools/FillTool';
import EraserTool from '../../tools/EraserTool';
import DitheringTool from '../../tools/DitheringTool';
import FillSameTool from '../../tools/FillSameTool';
import LightenTool from '../../tools/LightShadeTool';
import DarkShadeTool from '../../tools/DarkShadeTool';

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.isPainting = false;

    this.state = {
      currentX: null,
      currentY: null,
    };

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

    const { primaryColor, secondaryColor, currentTool } = this.props;
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
      case 'dithering':
        this.toolObject = new DitheringTool(ctx, primaryColor, secondaryColor);
        break;
      case 'fill-same':
        this.toolObject = new FillSameTool(ctx, primaryColor);
        break;
      case 'lighten':
        this.toolObject = new LightenTool(ctx, primaryColor);
        break;
      case 'darken':
        this.toolObject = new DarkShadeTool(ctx, primaryColor);
        break;
      default:
    }

    this.toolObject.startDraw(x, y);
  }

  continueDraw({ nativeEvent }) {
    const { offsetX, offsetY } = nativeEvent;
    const coords = this.getRelativeCoords(offsetX, offsetY);
    const { x, y } = coords;

    this.setState({
      currentX: x,
      currentY: y,
    });

    if (!this.isPainting) return;

    try {
      this.toolObject.continueDraw(x, y);
    } catch (error) {
      if (error.name !== 'TypeError') throw error;
    }
  }

  stopDraw(event) {
    if (event.type !== 'mouseup') {
      this.setState({
        currentX: null,
        currentY: null,
      });
    }

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
    const { currentX, currentY } = this.state;

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
        <CursorCoords x={currentX} y={currentY} />
      </div>
    );
  }
}

Canvas.propTypes = {
  canvasSize: PropTypes.number.isRequired,

  currentTool: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
};

export default Canvas;
