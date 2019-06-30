export default class CircleTool {
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

    const dx = x0 - x1;
    const dy = y0 - y1;
    const radius = Math.floor(
      Math.min(Math.abs(dx), Math.abs(dy))
    / 2,
    );
    const cx = x0 + radius * -Math.sign(dx);
    const cy = y0 + radius * -Math.sign(dy);

    let x = radius;
    let y = 0;
    let radiusError = 1 - x;

    while (x >= y) {
      ctx.fillRect(x + cx, y + cy, 1, 1);
      ctx.fillRect(y + cx, x + cy, 1, 1);
      ctx.fillRect(-x + cx, y + cy, 1, 1);
      ctx.fillRect(-y + cx, x + cy, 1, 1);
      ctx.fillRect(-x + cx, -y + cy, 1, 1);
      ctx.fillRect(-y + cx, -x + cy, 1, 1);
      ctx.fillRect(x + cx, -y + cy, 1, 1);
      ctx.fillRect(y + cx, -x + cy, 1, 1);
      y += 1;

      if (radiusError < 0) {
        radiusError += 2 * y + 1;
      } else {
        x -= 1;
        radiusError += 2 * (y - x + 1);
      }
    }
  }
}
