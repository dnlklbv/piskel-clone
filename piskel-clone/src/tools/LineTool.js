export default class LineTool {
  constructor(ctx, color) {
    this.ctx = ctx;
    this.ctx.fillStyle = color;
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
    const {
      ctx, x0, y0,
    } = this;
    this.lastX = x1;
    this.lastY = y1;

    ctx.putImageData(this.initialCanvasImage, 0, 0);

    ctx.fillRect(x1, y1, 1, 1);

    // Calculate line deltas
    const dx = x1 - x0;
    const dy = y1 - y0;

    // Create a positive copy of deltas (makes iterating easier)
    const dx1 = Math.abs(dx);
    const dy1 = Math.abs(dy);

    // Calculate error intervals for both axis
    let px = 2 * dy1 - dx1;
    let py = 2 * dx1 - dy1;

    // The line is X-axis dominant
    let x;
    let y;
    let xe;
    let ye;
    if (dy1 <= dx1) {
      // Line is drawn left to right
      if (dx >= 0) {
        x = x0; y = y0; xe = x1;
      } else { // Line is drawn right to left (swap ends)
        x = x1; y = y1; xe = x0;
      }

      // Rasterize the line
      for (let i = 0; x < xe; i += 1) {
        x += 1;

        // Deal with octants
        if (px < 0) {
          px += 2 * dy1;
        } else {
          if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
            y += 1;
          } else {
            y -= 1;
          }
          px += 2 * (dy1 - dx1);
        }

        // Draw pixel from line span at currently rasterized position
        ctx.fillRect(x, y, 1, 1);
      }
    } else { // The line is Y-axis dominant
      // Line is drawn bottom to top
      if (dy >= 0) {
        x = x0; y = y0; ye = y1;
      } else { // Line is drawn top to bottom
        x = x1; y = y1; ye = y0;
      }

      // Rasterize the line
      for (let i = 0; y < ye; i += 1) {
        y += 1;

        // Deal with octants...
        if (py <= 0) {
          py += 2 * dx1;
        } else {
          if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
            x += 1;
          } else {
            x -= 1;
          }
          py += 2 * (dx1 - dy1);
        }

        // Draw pixel from line span at currently rasterized position
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }
}
