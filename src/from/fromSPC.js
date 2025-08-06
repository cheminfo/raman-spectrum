import { Analysis } from 'common-spectrum';
import { parse } from 'spc-parser';

export function fromSPC(arrayBuffer) {
  let analysis = new Analysis();

  const parsed = parse(arrayBuffer);

  for (const spectrum of parsed.spectra) {
    analysis.pushSpectrum(spectrum.variables, {
      dataType: 'Raman',
      meta: { ...parsed.meta, ...spectrum.meta },
    });
  }
  return analysis;
}
