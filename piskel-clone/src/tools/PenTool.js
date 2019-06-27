export default class PenTool {
  constructor(ctx, color) {
    this.ctx = ctx;
    this.ctx.fillStyle = color;
  }

  startDraw(x, y) {
    this.lastX = x;
    this.lastY = y;

    this.ctx.fillRect(x, y, 1, 1);
  }

  continueDraw(x, y) {
    if (x === this.lastX && y === this.lastY) return;
    this.lastX = x;
    this.lastY = y;

    this.ctx.fillRect(x, y, 1, 1);
  }
}
