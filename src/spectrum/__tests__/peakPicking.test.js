import { fromText } from '../..';

let text = `
1 0.5
2 0.6
3 0.7
4 0.6
5 0.5
6 1.0
7 0.4
  `;
describe('Test addPeaks', () => {
  it('default options', () => {
    let spectrum = fromText(text);

    expect(spectrum.peaks).toStrictEqual([]);
    spectrum.peakPicking(3);
    expect(spectrum.peaks).toStrictEqual([
      {
        kind: 'S',
        intensity: 0.7,
        wavelength: 3
      }
    ]);
  });

  it('large range', () => {
    let spectrum = fromText(text);

    spectrum.peaks = [];
    spectrum.peakPicking(3, { range: 10 });
    expect(spectrum.peaks).toStrictEqual([
      {
        intensity: 1.0,
        kind: 'S',
        wavelength: 6
      }
    ]);
  });

  it('small range', () => {
    let spectrum = fromText(text);

    spectrum.peaks = [];
    spectrum.peakPicking(4, { range: 1 });
    expect(spectrum.peaks).toStrictEqual([
      {
        kind: 'S',
        intensity: 0.7,
        wavelength: 3
      }
    ]);
  });

  it('test optimize', () => {
    let spectrum = fromText(text);

    spectrum.peakPicking(7, { optimize: true });
    spectrum.peakPicking(1, { optimize: true });
    expect(spectrum.peaks).toStrictEqual([
      {
        kind: 'S',
        intensity: 1.0,
        wavelength: 6
      },
      {
        kind: 'S',
        intensity: 0.7,
        wavelength: 3
      }
    ]);
  });

  it('test duplicate', () => {
    let spectrum = fromText(text);

    spectrum.peakPicking(3, { range: 1 });
    spectrum.peakPicking(3, { optimize: true });
    expect(spectrum.peaks).toStrictEqual([
      {
        kind: 'S',
        intensity: 0.7,
        wavelength: 3
      }
    ]);
  });
});
