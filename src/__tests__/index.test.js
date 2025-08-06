import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { expect, test } from 'vitest';

import { autoPeakPicking, fromJcamp } from '../index.js';

test('fromJcamp', () => {
  const arrayBuffer = readFileSync(
    join(import.meta.dirname, 'data/adamantan.jdx'),
  );
  const analysis = fromJcamp(arrayBuffer);

  expect(analysis.spectra).toHaveLength(1);
  expect(analysis.spectra[0].variables).toHaveProperty('x');
  expect(analysis.spectra[0].variables).toHaveProperty('y');
  expect(analysis.spectra[0].variables.x.data).toHaveLength(1791);

  const spectrum = analysis.getSpectrum();
  const peaks = autoPeakPicking(spectrum);

  expect(peaks).toHaveLength(38);
});
