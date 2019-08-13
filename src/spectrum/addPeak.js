/**
 *
 * @param {Spectrum} spectrum
 * @param {object} peak
 */

export function addPeak(spectrum, peak = {}) {
  if (!peak.wavelength) {
    throw new Error('addPeak: peak mush have wavelength property');
  }
  const { wavelength, intensity } = peak;

  for (let existing of spectrum.peaks) {
    if (Number(existing.wavelength) === wavelength) return existing;
  }
  spectrum.peaks.push({
    wavelength: wavelength,
    intensity: intensity,
    kind: getPeakKind(intensity, spectrum.minIntensity, spectrum.maxIntensity)
  });
  return peak;
}

function getPeakKind(intensity, minIntensity, maxIntensity) {
  var position = intensity / (maxIntensity - minIntensity);
  if (position < 0.33) {
    return 'w';
  } else if (position < 0.66) {
    return 'm';
  }
  return 'S';
}
