import rgbToHex from '../utils/rgbToHex';

export default class FillTool {
  constructor(ctx, color) {
    this.ctx = ctx;
    this.ctx.fillStyle = color;
  }

  startDraw(x, y) {
    const { ctx } = this;
    const canvasSize = ctx.canvas.width;

    const firstPixelData = ctx.getImageData(x, y, 1, 1).data;
    const fieldColor = firstPixelData[3] === 0
      ? null
      : rgbToHex(firstPixelData[0], firstPixelData[1], firstPixelData[2]);

    if (fieldColor === ctx.fillStyle) return;

    const stack = [];
    const moves = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    let elem = {
      x,
      y,
    };
    stack.push(elem);
    ctx.fillRect(x, y, 1, 1);

    const applyMove = (move) => {
      const newElem = {
        x: elem.x + move[0],
        y: elem.y + move[1],
      };

      if (
        newElem.x < 0 || newElem.x > canvasSize - 1
      || newElem.y < 0 || newElem.y > canvasSize - 1
      ) return;

      const pixelData = ctx.getImageData(newElem.x, newElem.y, 1, 1).data;
      const pixelColor = pixelData[3] === 0
        ? null
        : rgbToHex(pixelData[0], pixelData[1], pixelData[2]);

      if (pixelColor === fieldColor) {
        stack.push(newElem);
        ctx.fillRect(newElem.x, newElem.y, 1, 1);
      }
    };
    while (stack.length > 0) {
      elem = stack.pop();

      moves.forEach(applyMove);
    }
  }
}
