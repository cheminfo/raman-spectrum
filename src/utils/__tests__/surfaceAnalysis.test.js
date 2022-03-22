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

  it('check min / max of first X / Y', () => {
    const firstXs = analysis.spectra.map(
      (spectrum) => spectrum.variables.x.data[0],
    );
    const firstYs = analysis.spectra.map(
      (spectrum) => spectrum.variables.y.data[0],
    );
    const lastXs = analysis.spectra.map(
      (spectrum) =>
        spectrum.variables.x.data[spectrum.variables.x.data.length - 1],
    );
    const lastYs = analysis.spectra.map(
      (spectrum) =>
        spectrum.variables.y.data[spectrum.variables.y.data.length - 1],
    );
    expect(Math.min(...firstXs)).toBeCloseTo(1218.43359375);
    expect(Math.max(...firstXs)).toBeCloseTo(1218.43359375);
    expect(Math.min(...lastXs)).toBeCloseTo(2801.458984375);
    expect(Math.max(...lastXs)).toBeCloseTo(2801.458984375);
    expect(Math.min(...firstYs)).toBeCloseTo(1015.5060424804688);
    expect(Math.max(...firstYs)).toBeCloseTo(2790.8359375);
    expect(Math.min(...lastYs)).toBeCloseTo(2935.5703125);
    expect(Math.max(...lastYs)).toBeCloseTo(8373.9140625);
  });

  it('create matrix from analyses', () => {
    let result = surfaceAnalysis(analysis);
    expect(result.integrations[35]).toBeDeepCloseTo({
      x: -4471.903563829787,
      y: -2444.7475,
      value: 7643478.975417376,
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
      value: 923130.1215815544,
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
      value: 7643478.975417376,
      xPixel: 5,
      yPixel: 5,
    });
    expect(result.matrix[0][0]).toBeCloseTo(160.6947321956272);
  });
});
