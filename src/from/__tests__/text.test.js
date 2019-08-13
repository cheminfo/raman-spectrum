import { fromText } from '../..';

test('Parse a text', () => {
  const text = `
        1,2
        2,3
        3,4
    `;

  let spectrum = fromText(text);
  expect(spectrum.wavelength).toStrictEqual([1, 2, 3]);
  expect(spectrum.intensity).toStrictEqual([2, 3, 4]);
});
