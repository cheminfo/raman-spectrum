import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { expect, test } from 'vitest';

import { fromWDF } from '../..';

test('fromWDF', () => {
  let arrayBuffer = readFileSync(join(import.meta.dirname, './data/6x6.wdf'));
  let analysis = fromWDF(arrayBuffer);

  expect(analysis.spectra).toHaveLength(36);

  let measurement = analysis.getSpectrum();
  let variables = measurement.variables;

  expect(measurement.title).toBe('Simple mapping measurement 1');
  expect(measurement.variables.x.data).toHaveLength(1015);
  expect(Math.min(...variables.x.data)).toBeCloseTo(1218.43359375);
  expect(Math.max(...variables.x.data)).toBeCloseTo(2801.458984375);
  expect(Math.min(...variables.y.data)).toBeCloseTo(1862.2540283203125);
  expect(Math.max(...variables.y.data)).toBeCloseTo(7597.6865234375);
  expect(measurement.variables.y.data).toHaveLength(1015);

  expect(measurement.meta.xPosition).toBeCloseTo(-4501.903563829787);
  expect(measurement.meta.yPosition).toBeCloseTo(-2474.7475);

  expect(analysis.spectra[0].variables.x.data[0]).toBeCloseTo(1218.43359375);
  expect(analysis.spectra[1].variables.x.data[0]).toBeCloseTo(1218.43359375);
  expect(analysis.spectra[0].variables.y.data[0]).toBeCloseTo(
    1870.6690673828125,
  );
  expect(analysis.spectra[1].variables.y.data[0]).toBeCloseTo(2243.3583984375);

  expect(measurement.variables.x.label).toBe('Raman shift');
  expect(measurement.variables.y.label).toBe('Arbitrary Intensity');
});
