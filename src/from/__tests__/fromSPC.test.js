import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { expect, test } from 'vitest';

import { fromSPC } from '../..';

test('fromSPC', () => {
  let arrayBuffer = readFileSync(join(import.meta.dirname, './data/raman.spc'));
  let analysis = fromSPC(arrayBuffer);

  let measurement = analysis.getSpectrum();
  let variables = measurement.variables;

  expect(measurement.variables.x.data).toHaveLength(3632);
  expect(Math.min(...variables.x.data)).toBeCloseTo(-3005.9560546875);
  expect(Math.max(...variables.x.data)).toBeCloseTo(3996.8232421875);
  expect(Math.min(...variables.y.data)).toBeCloseTo(0.0004763603210449219);
  expect(Math.max(...variables.y.data)).toBeCloseTo(137.45338439941406);
  expect(measurement.variables.y.data).toHaveLength(3632);

  expect(measurement.variables.x.label).toBe('Raman Shift');
  expect(measurement.variables.y.label).toBe('Arbitrary Intensity');
});
