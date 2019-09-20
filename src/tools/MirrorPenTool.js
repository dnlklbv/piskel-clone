export default class PenTool {
  constructor(ctx, color) {
    this.ctx = ctx;
    this.ctx.fillStyle = color;
  }

  startDraw(x, y) {
    const { ctx } = this;
    const mirroredX = Math.abs(x - ctx.canvas.width + 1);

    this.lastX = x;
    this.lasyMirroredX = mirroredX;
    this.lastY = y;

    ctx.fillRect(x, y, 1, 1);
    ctx.fillRect(mirroredX, y, 1, 1);
  }

  continueDraw(x, y) {
    const { ctx } = this;
    if (y === this.lastY && (x === this.lastX || x === this.lasyMirroredX)) return;

    const mirroredX = Math.abs(x - ctx.canvas.width + 1);

    this.lastX = x;
    this.lasyMirroredX = mirroredX;
    this.lastY = y;

    ctx.fillRect(x, y, 1, 1);
    ctx.fillRect(mirroredX, y, 1, 1);
  }
}
