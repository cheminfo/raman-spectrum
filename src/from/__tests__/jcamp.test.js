import { readFileSync } from 'fs';
import { join } from 'path';

import { fromJcamp } from '../..';

test('fromJcamp', () => {
  const path = join(__dirname, '../../../testFiles/adamantan.jdx');

  const jcamp = readFileSync(path, 'utf8');
  const spectrum = fromJcamp(jcamp);
  expect(spectrum.wavelength).toHaveLength(1791);
  expect(spectrum.intensity).toHaveLength(1791);
});
