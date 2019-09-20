export default class DitheringTool {
  constructor(ctx, primaryColor, secondaryColor) {
    this.ctx = ctx;
    this.primaryColor = primaryColor;
    this.secondaryColor = secondaryColor;
  }

  getAppropriateColorByCoords(x, y) {
    const { primaryColor, secondaryColor } = this;
    if (x % 2 ? !(y % 2) : y % 2) {
      return primaryColor;
    }
    return secondaryColor;
  }

  startDraw(x, y) {
    this.lastX = x;
    this.lastY = y;

    this.ctx.fillStyle = this.getAppropriateColorByCoords(x, y);
    this.ctx.fillRect(x, y, 1, 1);
  }

  continueDraw(x, y) {
    if (x === this.lastX && y === this.lastY) return;

    this.lastX = x;
    this.lastY = y;

    this.ctx.fillStyle = this.getAppropriateColorByCoords(x, y);
    this.ctx.fillRect(x, y, 1, 1);
  }
}
