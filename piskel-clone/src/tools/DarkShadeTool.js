import ShadeTool from './ShadeTool';

export default class DarkShadeTool extends ShadeTool {
  constructor(ctx) {
    super(ctx);
    this.shadeRatio = -15;
  }
}
