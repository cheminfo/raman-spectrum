# raman-spectrum

[![NPM version][npm-image]][npm-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Read, process and display Raman spectra from JCAMP-DX, SPC and WDF files.

## Installation

`$ npm i raman-spectrum`

## Usage

### Read a file

Each reader returns an `Analysis` from [common-spectrum](https://github.com/cheminfo/common-spectrum).
They accept the file content as an `ArrayBuffer`, a typed array or a Node.js `Buffer`.

```js
import { readFileSync } from 'node:fs';

import { fromJcamp, fromSPC, fromWDF } from 'raman-spectrum';

const analysis = fromSPC(readFileSync('raman.spc'));
const spectrum = analysis.getSpectrum();

spectrum.variables.x.label; // 'Raman Shift'
spectrum.variables.x.units; // 'cm-1'
spectrum.variables.y.label; // 'Arbitrary Intensity'
```

- `fromJcamp(data)` reads a JCAMP-DX file.
- `fromSPC(data)` reads a Galactic SPC file, one spectrum per subfile.
- `fromWDF(data)` reads a Renishaw WDF file. A mapping file gives one spectrum
  per point, and each spectrum carries its position in `meta.xPosition` and
  `meta.yPosition`.

### Pick peaks

```js
import { autoPeakPicking } from 'raman-spectrum';

const peaks = autoPeakPicking(spectrum); // [{ x, y, width }, …]
```

`peakPicking`, `toJcamp`, `toJcamps`, `Analysis` and `AnalysesManager` are
re-exported from common-spectrum as well.

### Map a surface

`surfaceAnalysis` integrates every spectrum of a mapping and arranges the
integrals in a matrix: one row per distinct `yPosition`, one column per
distinct `xPosition`.

```js
import { readFileSync } from 'node:fs';

import { fromWDF, surfaceAnalysis } from 'raman-spectrum';

const analysis = fromWDF(readFileSync('6x6.wdf'));
const { matrix, integrations, integrationsMatrix } = surfaceAnalysis(analysis, {
  from: 1800,
  to: 2000,
  rescale: { min: 0, max: 255 },
});

matrix.length; // 6 rows
matrix[0].length; // 6 columns
```

| Option          | Default             | Meaning                                                     |
| --------------- | ------------------- | ----------------------------------------------------------- |
| `from`          | first point         | Raman shift where the integration starts                    |
| `to`            | last point          | Raman shift where the integration ends                      |
| `rescale.min`   | `0` if `max` is set | rescales the matrix so its smallest value becomes `min`     |
| `rescale.max`   | `1` if `min` is set | rescales the matrix so its largest value becomes `max`      |
| `normalization` | `{}`                | applied to each spectrum first, see `getNormalizedSpectrum` |

Each entry of `integrations` holds `x`, `y`, `value`, the normalized `spectrum`,
and its place in the matrix, `xPixel` and `yPixel`. `integrationsMatrix` holds
the same entries at their matrix positions.

### Display peaks in jsgraph

`JSGraph.getAnnotations(peaks, options)` turns peaks of the shape
`{ wavenumber, intensity, kind, assignment }` into jsgraph annotations.

| Option            | Default   | Meaning                                             |
| ----------------- | --------- | --------------------------------------------------- |
| `fillColor`       | `'green'` | fill of the peak marker                             |
| `strokeColor`     | `'red'`   | stroke of the peak marker                           |
| `showKind`        | `true`    | label each peak with its kind (`'m'`, `'w'`, `'S'`) |
| `showAssignment`  | `true`    | label each peak with its assignment                 |
| `assignmentAngle` | `-45`     | angle of the assignment label, in degrees           |
| `creationFct`     | —         | `(annotation, peak) => {}`, to add properties       |

## [API Documentation](https://cheminfo.github.io/raman-spectrum/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/raman-spectrum.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/raman-spectrum
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/raman-spectrum.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/cheminfo/raman-spectrum
[download-image]: https://img.shields.io/npm/dm/raman-spectrum.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/raman-spectrum
