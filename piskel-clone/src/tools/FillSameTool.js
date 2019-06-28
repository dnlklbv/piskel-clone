import rgbToHex from '../utils/rgbToHex';

export default class FillSameTool {
  constructor(ctx, color) {
    this.ctx = ctx;
    this.fillColor = color;

    this.ctx.fillStyle = this.fillColor;
  }

  startDraw(initialX, initialY) {
    const { ctx } = this;
    const canvasSize = ctx.canvas.width;
    const firstPixelData = ctx.getImageData(initialX, initialY, 1, 1).data;
    const fieldColor = firstPixelData[3] === 0
      ? null
      : rgbToHex(firstPixelData[0], firstPixelData[1], firstPixelData[2]);

    if (fieldColor === this.fillColor) return;

    for (let x = 0; x < canvasSize; x += 1) {
      for (let y = 0; y < canvasSize; y += 1) {
        const pixelData = ctx.getImageData(x, y, 1, 1).data;
        const pixelColor = pixelData[3] === 0
          ? null
          : rgbToHex(pixelData[0], pixelData[1], pixelData[2]);

        if (pixelColor === fieldColor) ctx.fillRect(x, y, 1, 1);
      }
    }
  }
}
