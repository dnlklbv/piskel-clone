import rgbToHex from '../utils/rgbToHex';
import shadeHexColor from '../utils/shadeHexColor';

export default class ShadeTool {
  constructor(ctx) {
    this.ctx = ctx;
    this.shadeRatio = 0;
  }

  startDraw(x, y) {
    this.lastX = x;
    this.lastY = y;

    const { ctx } = this;

    const pixelData = ctx.getImageData(x, y, 1, 1).data;
    if (pixelData[3] === 0) return;

    const initialColor = rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
    const lightenColor = shadeHexColor(initialColor, this.shadeRatio);

    ctx.fillStyle = lightenColor;
    ctx.fillRect(x, y, 1, 1);
  }

  continueDraw(x, y) {
    if (x === this.lastX && y === this.lastY) return;
    this.lastX = x;
    this.lastY = y;

    const { ctx } = this;

    const pixelData = ctx.getImageData(x, y, 1, 1).data;
    if (pixelData[3] === 0) return;

    const initialColor = rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
    const lightenColor = shadeHexColor(initialColor, this.shadeRatio);

    ctx.fillStyle = lightenColor;
    ctx.fillRect(x, y, 1, 1);
  }
}
