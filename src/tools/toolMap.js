import PenTool from './PenTool';
import MirrorPenTool from './MirrorPenTool';
import FillTool from './FillTool';
import EraserTool from './EraserTool';
import DitheringTool from './DitheringTool';
import FillSameTool from './FillSameTool';
import LightShadeTool from './LightShadeTool';
import DarkShadeTool from './DarkShadeTool';
import RectangleTool from './RectangleTool';
import LineTool from './LineTool';
import CircleTool from './CircleTool';

export default {
  pen: PenTool,
  'mirror-pen': MirrorPenTool,
  fill: FillTool,
  eraser: EraserTool,
  dithering: DitheringTool,
  'fill-same': FillSameTool,
  lighten: LightShadeTool,
  darken: DarkShadeTool,
  rectangle: RectangleTool,
  line: LineTool,
  circle: CircleTool,
};
