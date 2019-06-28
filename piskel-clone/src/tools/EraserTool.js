export default class EraserTool {
  constructor(ctx) {
    this.ctx = ctx;
  }

  startDraw(x, y) {
    const { ctx } = this;
    this.lastX = x;
    this.lastY = y;

    ctx.clearRect(x, y, 1, 1);
  }

  continueDraw(x, y) {
    if (x === this.lastX && y === this.lastY) return;
    const { ctx } = this;

    this.lastX = x;
    this.lastY = y;

    ctx.clearRect(x, y, 1, 1);
  }
}
