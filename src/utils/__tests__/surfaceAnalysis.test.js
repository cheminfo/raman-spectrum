import { readFileSync } from 'fs';
import { join } from 'path';

import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';

import { fromWDF } from '../../index.js';
import { surfaceAnalysis } from '../surfaceAnalysis.js';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

describe('surfaceAnalysis', () => {
  const analysis = fromWDF(
    readFileSync(join(__dirname, '../../from/__tests__/data/6x6.wdf')),
  );

  it('create matrix from analyses', () => {
    let result = surfaceAnalysis(analysis);
    expect(result.integrations[35]).toBeDeepCloseTo({
      x: -4471.903563829787,
      y: -2444.7475,
      value: 7871281.272382498,
      xPixel: 5,
      yPixel: 5,
    });
    expect(result.matrix[0][0]).toBeCloseTo(6204479.569795251);
  });

  it('create matrix from analyses with from/to', () => {
    let result = surfaceAnalysis(analysis, { from: 1800, to: 2000 });
    expect(result.integrations[35]).toBeDeepCloseTo({
      x: -4471.903563829787,
      y: -2444.7475,
      value: 1088478.7574925423,
      xPixel: 5,
      yPixel: 5,
    });
    expect(result.matrix[0][0]).toBeCloseTo(735767.4637436867);
  });
  it('create matrix from analyses with rescale', () => {
    let result = surfaceAnalysis(analysis, { rescale: { min: 0, max: 255 } });
    expect(result.integrations[35]).toBeDeepCloseTo({
      x: -4471.903563829787,
      y: -2444.7475,
      value: 7871281.272382498,
      xPixel: 5,
      yPixel: 5,
    });
    expect(result.matrix[0][0]).toBeCloseTo(148.55265166787322);
  });
});
