import { JSGraph as OriginalJSGraph } from 'common-spectrum';

import { getAnnotations } from './jsgraph/getAnnotations';

export {
  Analysis,
  AnalysesManager,
  toJcamp,
  toJcamps,
  peakPicking,
  autoPeakPicking,
  fromJcamp,
} from 'common-spectrum';

export const JSGraph = { ...OriginalJSGraph, getAnnotations };

export * from './utils/surfaceAnalysis.js';
export * from './from/fromSPC.js';
export * from './from/fromWDF.js';
