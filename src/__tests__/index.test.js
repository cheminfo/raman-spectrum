import { readFileSync } from 'fs';
import { join } from 'path';

import { fromText } from '..';

import { Spectrum } from '../Spectrum';

test('Test load / save json', () => {
  let text = readFileSync(
    join(__dirname, '../../testFiles/simple.txt'),
    'utf8'
  );
  let spectrum = fromText(text);

  expect(spectrum.getData()).toStrictEqual({
    x: [1, 2, 3],
    y: [2, 3, 2]
  });
});
