import { convert as converter } from 'jcampconverter';
import sortX from 'ml-array-xy-sort-x';

import { Spectrum } from '../Spectrum';

/**
 * Creates a new Chromatogram element based in a JCAMP string
 * @param {string} jcamp - String containing the JCAMP data
 * @return {Spectrum} - New class element with the given data
 */
export function fromJcamp(jcamp) {
  const data = converter(jcamp, { xy: true });
  let spectrum = data.spectra[0].data[0];
  spectrum = sortX(spectrum);
  return new Spectrum({
    wavelength: spectrum.x,
    intensity: spectrum.y
  });
}
