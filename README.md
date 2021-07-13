# raman-spectrum

[![NPM version][npm-image]][npm-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

## Installation

`$ npm install --save raman-spectrum`

## Usage

```js
import RamanSpectrum from 'raman-spectrum';

let analysis = RamanSpectrum.fromJcamp(jcamp);
```

When loading an RamanSpectrum from Jcamp we will systematically add 2 new variables:

- a: containing the absorbance
- t: containing the percent transmittance

In order to calculate those 2 variables we will check the Y label. If it contains
transmittance we calculate absorbance, if it contains absorbance we calculate transmittance.
For transmittance we also check for the presence of a '%' sign.:w

## [API Documentation](https://cheminfo.github.io/raman-spectrum/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/raman-spectrum.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/raman-spectrum
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/raman-spectrum.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/cheminfo/raman-spectrum
[download-image]: https://img.shields.io/npm/dm/raman-spectrum.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/raman-spectrum
