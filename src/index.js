import { JSGraph as OriginalJSGraph } from 'common-spectrum';

import { getAnnotations } from './jsgraph/getAnnotations.js';

export {
  AnalysesManager,
  Analysis,
  autoPeakPicking,
  fromJcamp,
  peakPicking,
  toJcamp,
  toJcamps,
} from 'common-spectrum';

export const JSGraph = { ...OriginalJSGraph, getAnnotations };

export * from './utils/surfaceAnalysis.js';
export * from './from/fromSPC.js';
export * from './from/fromWDF.js';
