/* eslint-disable no-console */
import Benchmark from 'benchmark';

// Each variant builds the yVariables of fromWDF from an array of spectra.
// The spectra are never read, so their length does not change the result.
//   node benchmark/yVariables.js

const SPECTRUM_LENGTH = 100;
const SIZES = [10_000, 100_000];
const options = { minSamples: 30, maxTime: 10 };
const sink = { value: [] };

function forOfPush(spectra) {
  const yVariables = [];
  for (const spectrum of spectra) {
    yVariables.push({ label: 'Arbitrary Intensity', data: spectrum });
  }
  return yVariables;
}

function arrayFromMap(spectra) {
  return Array.from(spectra, (spectrum) => ({
    label: 'Arbitrary Intensity',
    data: spectrum,
  }));
}

function arrayMap(spectra) {
  return spectra.map((spectrum) => ({
    label: 'Arbitrary Intensity',
    data: spectrum,
  }));
}

function indexedPreallocated(spectra) {
  const yVariables = new Array(spectra.length);
  for (let i = 0; i < spectra.length; i++) {
    yVariables[i] = { label: 'Arbitrary Intensity', data: spectra[i] };
  }
  return yVariables;
}

const variants = { forOfPush, arrayFromMap, arrayMap, indexedPreallocated };

for (const size of SIZES) {
  const spectra = new Array(size);
  for (let i = 0; i < size; i++) {
    spectra[i] = new Float32Array(SPECTRUM_LENGTH);
  }

  for (const [name, implementation] of Object.entries(variants)) {
    const result = implementation(spectra);
    const isSameData =
      result.length === size && result[size - 1].data === spectra[size - 1];
    console.log(`n=${size} ${name}: ${result.length} entries, ${isSameData}`);
  }

  const suite = new Benchmark.Suite();
  for (const [name, implementation] of Object.entries(variants)) {
    suite.add(
      name,
      () => {
        sink.value = implementation(spectra);
      },
      options,
    );
  }
  suite
    .on('cycle', (event) => {
      const { name, hz, stats } = event.target;
      const nsPerSpectrum = 1e9 / hz / size;
      console.log(
        `n=${size} ${name.padEnd(20)} ${nsPerSpectrum.toFixed(2)} ns/spectrum ±${stats.rme.toFixed(1)}% (${stats.sample.length} samples)`,
      );
    })
    .run();
  console.log(`(last result: ${sink.value.length} entries)\n`);
}
