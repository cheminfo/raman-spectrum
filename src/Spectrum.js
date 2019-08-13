import min from 'ml-array-min';
import max from 'ml-array-max';

import { getAnnotations } from './jsgraph/getAnnotations';
import { peakPicking } from './spectrum/peakPicking';
import { autoPeakPicking } from './spectrum/autoPeakPicking';

/**
 * Class allowing manipulate one Raman spectrum
 * @class spectrum
 * @param {object} [json={}] - object containing a spectrum
 * @param {Array} [json.wavelength=[]] - wavelength
 * @param {Array} [json.intensity=[]] - intensity values
 */
export class Spectrum {
  constructor(json) {
    this.wavelength = json.wavelength || [];
    this.intensity = json.intensity || [];
    this.peaks = [];
    check(this);
  }

  /**
   *
   * @param {Array} [peaks=[]] array of peaks. Peaks are composed of transmittance, wavelength, kind
   */
  setPeaks(peaks = []) {
    this.peaks = peaks;
  }

  peakPicking(targetWavelength, options = {}) {
    peakPicking(this, targetWavelength, options);
  }

  getData() {
    return { x: this.wavelength, y: this.intensity };
  }
}

Spectrum.prototype.getAnnotations = function(options) {
  return getAnnotations(this, options);
};

Spectrum.prototype.autoPeakPicking = function(options) {
  return autoPeakPicking(this, options);
};

function check(spectrum) {
  if (spectrum.wavelength.length > 0) {
    spectrum.minWavelength = min(spectrum.wavelength);
  }
  if (spectrum.wavelength.length > 0) {
    spectrum.maxWavelength = max(spectrum.wavelength);
  }
  if (spectrum.intensity.length > 0) {
    spectrum.minIntensity = min(spectrum.intensity);
  }
  if (spectrum.intensity.length > 0) {
    spectrum.maxIntensity = max(spectrum.intensity);
  }
}
