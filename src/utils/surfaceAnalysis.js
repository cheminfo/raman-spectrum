import { getNormalizedSpectrum } from 'common-spectrum';
import { matrixZRescale, xyIntegration } from 'ml-spectra-processing';
/**
 * We integrate the spectra from 'from' to 'to' and create a matrix
 * @param {object} analysis
 * @param {object} [options={}]
 * @param {number} [options.from] - from Raman shift
 * @param {number} [options.to] - to Raman shift
 * @param {object} [options.rescale={}]
 * @param {number} [options.rescale.min]
 * @param {number} [options.rescale.max]
 * @param {object} [options.normalization]
 * @returns {object}
 */
export function surfaceAnalysis(analysis, options = {}) {
  const { from, to, rescale = {}, normalization = {} } = options;
  const integrations = analysis.spectra.map((spectrum) => {
    spectrum = getNormalizedSpectrum(spectrum, normalization);
    return {
      x: spectrum.meta.xPosition,
      y: spectrum.meta.yPosition,
      spectrum,
      value: xyIntegration(
        {
          x: spectrum.variables.x.data,
          y: spectrum.variables.y.data,
        },
        { from, to },
      ),
    };
  });
  // we should find a way to create a matrix and to find out width and height
  const distinctX = [
    ...new Set(integrations.map((integration) => integration.x)),
  ].sort((a, b) => a - b);
  const distinctY = [
    ...new Set(integrations.map((integration) => integration.y)),
  ].sort((a, b) => a - b);

  let matrix = new Array(distinctY.length)
    .fill(0)
    .map(() => new Float64Array(distinctX.length));

  const integrationsMatrix = new Array(distinctY.length)
    .fill(0)
    .map(() => new Array(distinctX.length));

  const xMapping = {};
  for (const [index, x] of distinctX.entries()) xMapping[x] = index;
  const yMapping = {};
  for (const [index, y] of distinctY.entries()) yMapping[y] = index;

  for (let integration of integrations) {
    integration.xPixel = xMapping[integration.x];
    integration.yPixel = yMapping[integration.y];
    matrix[integration.yPixel][integration.xPixel] = integration.value;
    integrationsMatrix[integration.yPixel][integration.xPixel] = integration;
  }

  const { min, max } = rescale;
  if (min !== undefined || max !== undefined) {
    matrix = matrixZRescale(matrix, { min, max });
  }
  return {
    integrations,
    matrix,
    integrationsMatrix,
  };
}
