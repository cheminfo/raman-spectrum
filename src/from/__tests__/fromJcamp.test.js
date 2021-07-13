import { readFileSync } from 'fs';
import { join } from 'path';

import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';

import { fromJcamp } from '../fromJcamp';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

describe('fromJcamp', () => {
  it('adamantan', () => {
    let jcamp = readFileSync(
      join(__dirname, 'data/adamantan.jdx'),
      'utf8',
    );

    let result = fromJcamp(jcamp);

    expect(result.spectra).toHaveLength(1);

    let first = result.spectra[0];

    expect(first.variables.x.data).toHaveLength(1791);
    expect(first.variables.y.data).toHaveLength(1791);
    expect(first.variables.a.data).toHaveLength(1791);
    expect(first.variables.t.data).toHaveLength(1791);
    expect(first.variables.x.label).toStrictEqual('Wavenumber / cm-1');
    expect(first.variables.y.label).toStrictEqual('Intensity');
    expect(first.variables.a.label).toStrictEqual('Intensity');
    expect(first.variables.t.label).toStrictEqual('Transmittance (%)');
    expect(first.variables.a.min).toBeDeepCloseTo(1.5053999999999998, 5);
    expect(first.variables.a.max).toBeDeepCloseTo(21726, 5);
    expect(first.variables.t.min).toBeDeepCloseTo(0, 5);
    expect(first.variables.t.max).toBeDeepCloseTo(3.1232014671492143, 5);
  });

});
