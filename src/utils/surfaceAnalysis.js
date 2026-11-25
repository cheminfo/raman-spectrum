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
  const { spectra } = analysis;
  const integrations = new Array(spectra.length);
  const xValues = new Set();
  const yValues = new Set();
  for (let i = 0; i < spectra.length; i++) {
    const spectrum = getNormalizedSpectrum(spectra[i], normalization);
    const integration = {
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
    integrations[i] = integration;
    xValues.add(integration.x);
    yValues.add(integration.y);
  }
  // we should find a way to create a matrix and to find out width and height
  const distinctX = Array.from(xValues);
  distinctX.sort((a, b) => a - b);
  const distinctY = Array.from(yValues);
  distinctY.sort((a, b) => a - b);

  let matrix = new Array(distinctY.length);
  const integrationsMatrix = new Array(distinctY.length);
  for (let row = 0; row < distinctY.length; row++) {
    matrix[row] = new Float64Array(distinctX.length);
    integrationsMatrix[row] = new Array(distinctX.length);
  }

  const xMapping = {};
  for (let i = 0; i < distinctX.length; i++) xMapping[distinctX[i]] = i;
  const yMapping = {};
  for (let i = 0; i < distinctY.length; i++) yMapping[distinctY[i]] = i;

  for (let i = 0; i < integrations.length; i++) {
    const integration = integrations[i];
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
