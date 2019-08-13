import { parseXY } from 'xy-parser';
import sortX from 'ml-array-xy-sort-x';

import { Spectrum } from '../Spectrum';

/**
 * Creates a new Chromatogram element based in a Txt string
 * @param {string} text - String containing the data as CSV or TSV
 * @param {object} [options] - Options object for the parser
 * @param {string} [options.kind] - Absorbance or Transmisstance
 * @return {Spectrum} - New class element with the given data
 */
export function fromText(text, options = {}) {
  options = Object.assign({}, options, { arrayType: 'xxyy' });
  const data = parseXY(text, options);
  let spectrum = sortX({ x: data[0], y: data[1] });

  return new Spectrum({
    wavelength: spectrum.x,
    intensity: spectrum.y
  });
}
