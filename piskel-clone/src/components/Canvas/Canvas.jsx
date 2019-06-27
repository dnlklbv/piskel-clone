import React, { Component } from 'react';

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
  }

  startDraw({ nativeEvent }) {
    this.isPainting = true;

    const { ctx } = this;
    const { offsetX, offsetY } = nativeEvent;
    ctx.fillStyle = '#000000';
    ctx.fillRect(offsetX, offsetY, 1, 1);
  }

  continueDraw({ nativeEvent }) {
    if (!this.isPainting) return;
    const { ctx } = this;
    const { offsetX, offsetY } = nativeEvent;
    ctx.fillStyle = '#000000';
    ctx.fillRect(offsetX, offsetY, 1, 1);
  }

  stopDraw() {
    if (!this.isPainting) return;
    this.isPainting = false;
  }

  render() {
    return (
      <div className="canvas-wrapper">
        <canvas
          className="canvas"
          width="32"
          height="32"
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

export default Canvas;
