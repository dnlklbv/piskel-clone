export default class RectangleTool {
  constructor(ctx, color) {
    this.ctx = ctx;
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = color;
    this.canvasSize = ctx.canvas.width;
  }

  startDraw(x0, y0) {
    const { ctx, canvasSize } = this;
    this.lastX = x0;
    this.lastY = y0;

    this.x0 = x0;
    this.y0 = y0;

    ctx.fillRect(x0, y0, 1, 1);
    this.initialCanvasImage = ctx.getImageData(0, 0, canvasSize, canvasSize);
  }

  continueDraw(x1, y1) {
    if (x1 === this.lastX && y1 === this.lastY) return;
    this.lastX = x1;
    this.lastY = y1;

    const {
      ctx, x0, y0, initialCanvasImage,
    } = this;

    ctx.putImageData(initialCanvasImage, 0, 0);

    const dx = x1 - x0;
    const dy = y1 - y0;

    ctx.strokeRect(x0 + 0.5, y0 + 0.5, dx, dy);
    if (dx === 0 || dy === 0) ctx.fillRect(x1, y1, 1, 1);
  }
}
