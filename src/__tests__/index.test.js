import { readFileSync } from 'fs';
import { join } from 'path';

import { fromJcamp, autoPeakPicking } from '..';

test('fromJcamp', () => {
  const arrayBuffer = readFileSync(join(__dirname, 'data/adamantan.jdx'));
  const analysis = fromJcamp(arrayBuffer);
  expect(analysis.spectra).toHaveLength(1);
  expect(analysis.spectra[0].variables).toHaveProperty('x');
  expect(analysis.spectra[0].variables).toHaveProperty('y');
  expect(analysis.spectra[0].variables.x.data).toHaveLength(1791);

  const spectrum = analysis.getSpectrum();
  const peaks = autoPeakPicking(spectrum);
  expect(peaks).toHaveLength(38);
});
