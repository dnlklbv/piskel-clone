import ShadeTool from './ShadeTool';

export default class LightShadeTool extends ShadeTool {
  constructor(ctx) {
    super(ctx);
    this.shadeRatio = 15;
  }
}
