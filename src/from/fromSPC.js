import { parse } from 'spc-parser';

import { Analysis } from '..';

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
