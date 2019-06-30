import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CursorCoords from '../CursorCoords';

import toolMap from '../../tools/toolMap';

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

    // get proper tool class from toolMap and create toolObject
    this.toolObject = new toolMap[currentTool](ctx, primaryColor, secondaryColor);
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

    // ignore if toolObject doesn't have a continueDraw method
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
