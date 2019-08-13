/**
 * raman-spectrum
 * @version v0.1.1
 * @link https://github.com/cheminfo/raman-spectrum#readme
 * @license MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.RamanSpectrum = {}));
}(this, function (exports) { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	const toString = Object.prototype.toString;

	function isAnyArray(object) {
	  return toString.call(object).endsWith('Array]');
	}

	var src = isAnyArray;

	/**
	 * Computes the minimum of the given values
	 * @param {Array<number>} input
	 * @return {number}
	 */

	function min(input) {
	  if (!src(input)) {
	    throw new TypeError('input must be an array');
	  }

	  if (input.length === 0) {
	    throw new TypeError('input must not be empty');
	  }

	  var min = input[0];

	  for (var i = 1; i < input.length; i++) {
	    if (input[i] < min) min = input[i];
	  }

	  return min;
	}

	/**
	 * Computes the maximum of the given values
	 * @param {Array<number>} input
	 * @return {number}
	 */

	function max(input) {
	  if (!src(input)) {
	    throw new TypeError('input must be an array');
	  }

	  if (input.length === 0) {
	    throw new TypeError('input must not be empty');
	  }

	  var max = input[0];

	  for (var i = 1; i < input.length; i++) {
	    if (input[i] > max) max = input[i];
	  }

	  return max;
	}

	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var defineProperty = Object.defineProperty;
	var gOPD = Object.getOwnPropertyDescriptor;

	var isArray = function isArray(arr) {
	  if (typeof Array.isArray === 'function') {
	    return Array.isArray(arr);
	  }

	  return toStr.call(arr) === '[object Array]';
	};

	var isPlainObject = function isPlainObject(obj) {
	  if (!obj || toStr.call(obj) !== '[object Object]') {
	    return false;
	  }

	  var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	  var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf'); // Not own constructor property must be Object

	  if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
	    return false;
	  } // Own properties are enumerated firstly, so to speed up,
	  // if last one is own, then all properties are own.


	  var key;

	  for (key in obj) {
	    /**/
	  }

	  return typeof key === 'undefined' || hasOwn.call(obj, key);
	}; // If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target


	var setProperty = function setProperty(target, options) {
	  if (defineProperty && options.name === '__proto__') {
	    defineProperty(target, options.name, {
	      enumerable: true,
	      configurable: true,
	      value: options.newValue,
	      writable: true
	    });
	  } else {
	    target[options.name] = options.newValue;
	  }
	}; // Return undefined instead of __proto__ if '__proto__' is not an own property


	var getProperty = function getProperty(obj, name) {
	  if (name === '__proto__') {
	    if (!hasOwn.call(obj, name)) {
	      return void 0;
	    } else if (gOPD) {
	      // In early versions of node, obj['__proto__'] is buggy when obj has
	      // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
	      return gOPD(obj, name).value;
	    }
	  }

	  return obj[name];
	};

	var extend = function extend() {
	  var options, name, src, copy, copyIsArray, clone;
	  var target = arguments[0];
	  var i = 1;
	  var length = arguments.length;
	  var deep = false; // Handle a deep copy situation

	  if (typeof target === 'boolean') {
	    deep = target;
	    target = arguments[1] || {}; // skip the boolean and the target

	    i = 2;
	  }

	  if (target == null || typeof target !== 'object' && typeof target !== 'function') {
	    target = {};
	  }

	  for (; i < length; ++i) {
	    options = arguments[i]; // Only deal with non-null/undefined values

	    if (options != null) {
	      // Extend the base object
	      for (name in options) {
	        src = getProperty(target, name);
	        copy = getProperty(options, name); // Prevent never-ending loop

	        if (target !== copy) {
	          // Recurse if we're merging plain objects or arrays
	          if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
	            if (copyIsArray) {
	              copyIsArray = false;
	              clone = src && isArray(src) ? src : [];
	            } else {
	              clone = src && isPlainObject(src) ? src : {};
	            } // Never move original objects, clone them


	            setProperty(target, {
	              name: name,
	              newValue: extend(deep, clone, copy)
	            }); // Don't bring in undefined values
	          } else if (typeof copy !== 'undefined') {
	            setProperty(target, {
	              name: name,
	              newValue: copy
	            });
	          }
	        }
	      }
	    }
	  } // Return the modified object


	  return target;
	};

	var array = createCommonjsModule(function (module, exports) {

	  function compareNumbers(a, b) {
	    return a - b;
	  }
	  /**
	   * Computes the sum of the given values
	   * @param {Array} values
	   * @returns {number}
	   */


	  exports.sum = function sum(values) {
	    var sum = 0;

	    for (var i = 0; i < values.length; i++) {
	      sum += values[i];
	    }

	    return sum;
	  };
	  /**
	   * Computes the maximum of the given values
	   * @param {Array} values
	   * @returns {number}
	   */


	  exports.max = function max(values) {
	    var max = -Infinity;
	    var l = values.length;

	    for (var i = 0; i < l; i++) {
	      if (values[i] > max) max = values[i];
	    }

	    return max;
	  };
	  /**
	   * Computes the minimum of the given values
	   * @param {Array} values
	   * @returns {number}
	   */


	  exports.min = function min(values) {
	    var min = Infinity;
	    var l = values.length;

	    for (var i = 0; i < l; i++) {
	      if (values[i] < min) min = values[i];
	    }

	    return min;
	  };
	  /**
	   * Computes the min and max of the given values
	   * @param {Array} values
	   * @returns {{min: number, max: number}}
	   */


	  exports.minMax = function minMax(values) {
	    var min = Infinity;
	    var max = -Infinity;
	    var l = values.length;

	    for (var i = 0; i < l; i++) {
	      if (values[i] < min) min = values[i];
	      if (values[i] > max) max = values[i];
	    }

	    return {
	      min: min,
	      max: max
	    };
	  };
	  /**
	   * Computes the arithmetic mean of the given values
	   * @param {Array} values
	   * @returns {number}
	   */


	  exports.arithmeticMean = function arithmeticMean(values) {
	    var sum = 0;
	    var l = values.length;

	    for (var i = 0; i < l; i++) {
	      sum += values[i];
	    }

	    return sum / l;
	  };
	  /**
	   * {@link arithmeticMean}
	   */


	  exports.mean = exports.arithmeticMean;
	  /**
	   * Computes the geometric mean of the given values
	   * @param {Array} values
	   * @returns {number}
	   */

	  exports.geometricMean = function geometricMean(values) {
	    var mul = 1;
	    var l = values.length;

	    for (var i = 0; i < l; i++) {
	      mul *= values[i];
	    }

	    return Math.pow(mul, 1 / l);
	  };
	  /**
	   * Computes the mean of the log of the given values
	   * If the return value is exponentiated, it gives the same result as the
	   * geometric mean.
	   * @param {Array} values
	   * @returns {number}
	   */


	  exports.logMean = function logMean(values) {
	    var lnsum = 0;
	    var l = values.length;

	    for (var i = 0; i < l; i++) {
	      lnsum += Math.log(values[i]);
	    }

	    return lnsum / l;
	  };
	  /**
	   * Computes the weighted grand mean for a list of means and sample sizes
	   * @param {Array} means - Mean values for each set of samples
	   * @param {Array} samples - Number of original values for each set of samples
	   * @returns {number}
	   */


	  exports.grandMean = function grandMean(means, samples) {
	    var sum = 0;
	    var n = 0;
	    var l = means.length;

	    for (var i = 0; i < l; i++) {
	      sum += samples[i] * means[i];
	      n += samples[i];
	    }

	    return sum / n;
	  };
	  /**
	   * Computes the truncated mean of the given values using a given percentage
	   * @param {Array} values
	   * @param {number} percent - The percentage of values to keep (range: [0,1])
	   * @param {boolean} [alreadySorted=false]
	   * @returns {number}
	   */


	  exports.truncatedMean = function truncatedMean(values, percent, alreadySorted) {
	    if (alreadySorted === undefined) alreadySorted = false;

	    if (!alreadySorted) {
	      values = values.slice().sort(compareNumbers);
	    }

	    var l = values.length;
	    var k = Math.floor(l * percent);
	    var sum = 0;

	    for (var i = k; i < l - k; i++) {
	      sum += values[i];
	    }

	    return sum / (l - 2 * k);
	  };
	  /**
	   * Computes the harmonic mean of the given values
	   * @param {Array} values
	   * @returns {number}
	   */


	  exports.harmonicMean = function harmonicMean(values) {
	    var sum = 0;
	    var l = values.length;

	    for (var i = 0; i < l; i++) {
	      if (values[i] === 0) {
	        throw new RangeError('value at index ' + i + 'is zero');
	      }

	      sum += 1 / values[i];
	    }

	    return l / sum;
	  };
	  /**
	   * Computes the contraharmonic mean of the given values
	   * @param {Array} values
	   * @returns {number}
	   */


	  exports.contraHarmonicMean = function contraHarmonicMean(values) {
	    var r1 = 0;
	    var r2 = 0;
	    var l = values.length;

	    for (var i = 0; i < l; i++) {
	      r1 += values[i] * values[i];
	      r2 += values[i];
	    }

	    if (r2 < 0) {
	      throw new RangeError('sum of values is negative');
	    }

	    return r1 / r2;
	  };
	  /**
	   * Computes the median of the given values
	   * @param {Array} values
	   * @param {boolean} [alreadySorted=false]
	   * @returns {number}
	   */


	  exports.median = function median(values, alreadySorted) {
	    if (alreadySorted === undefined) alreadySorted = false;

	    if (!alreadySorted) {
	      values = values.slice().sort(compareNumbers);
	    }

	    var l = values.length;
	    var half = Math.floor(l / 2);

	    if (l % 2 === 0) {
	      return (values[half - 1] + values[half]) * 0.5;
	    } else {
	      return values[half];
	    }
	  };
	  /**
	   * Computes the variance of the given values
	   * @param {Array} values
	   * @param {boolean} [unbiased=true] - if true, divide by (n-1); if false, divide by n.
	   * @returns {number}
	   */


	  exports.variance = function variance(values, unbiased) {
	    if (unbiased === undefined) unbiased = true;
	    var theMean = exports.mean(values);
	    var theVariance = 0;
	    var l = values.length;

	    for (var i = 0; i < l; i++) {
	      var x = values[i] - theMean;
	      theVariance += x * x;
	    }

	    if (unbiased) {
	      return theVariance / (l - 1);
	    } else {
	      return theVariance / l;
	    }
	  };
	  /**
	   * Computes the standard deviation of the given values
	   * @param {Array} values
	   * @param {boolean} [unbiased=true] - if true, divide by (n-1); if false, divide by n.
	   * @returns {number}
	   */


	  exports.standardDeviation = function standardDeviation(values, unbiased) {
	    return Math.sqrt(exports.variance(values, unbiased));
	  };

	  exports.standardError = function standardError(values) {
	    return exports.standardDeviation(values) / Math.sqrt(values.length);
	  };

	  exports.quartiles = function quartiles(values, alreadySorted) {
	    if (typeof alreadySorted === 'undefined') alreadySorted = false;

	    if (!alreadySorted) {
	      values = values.slice();
	      values.sort(compareNumbers);
	    }

	    var quart = values.length / 4;
	    var q1 = values[Math.ceil(quart) - 1];
	    var q2 = exports.median(values, true);
	    var q3 = values[Math.ceil(quart * 3) - 1];
	    return {
	      q1: q1,
	      q2: q2,
	      q3: q3
	    };
	  };

	  exports.pooledStandardDeviation = function pooledStandardDeviation(samples, unbiased) {
	    return Math.sqrt(exports.pooledVariance(samples, unbiased));
	  };

	  exports.pooledVariance = function pooledVariance(samples, unbiased) {
	    if (typeof unbiased === 'undefined') unbiased = true;
	    var sum = 0;
	    var length = 0,
	        l = samples.length;

	    for (var i = 0; i < l; i++) {
	      var values = samples[i];
	      var vari = exports.variance(values);
	      sum += (values.length - 1) * vari;
	      if (unbiased) length += values.length - 1;else length += values.length;
	    }

	    return sum / length;
	  };

	  exports.mode = function mode(values) {
	    var l = values.length,
	        itemCount = new Array(l),
	        i;

	    for (i = 0; i < l; i++) {
	      itemCount[i] = 0;
	    }

	    var itemArray = new Array(l);
	    var count = 0;

	    for (i = 0; i < l; i++) {
	      var index = itemArray.indexOf(values[i]);
	      if (index >= 0) itemCount[index]++;else {
	        itemArray[count] = values[i];
	        itemCount[count] = 1;
	        count++;
	      }
	    }

	    var maxValue = 0,
	        maxIndex = 0;

	    for (i = 0; i < count; i++) {
	      if (itemCount[i] > maxValue) {
	        maxValue = itemCount[i];
	        maxIndex = i;
	      }
	    }

	    return itemArray[maxIndex];
	  };

	  exports.covariance = function covariance(vector1, vector2, unbiased) {
	    if (typeof unbiased === 'undefined') unbiased = true;
	    var mean1 = exports.mean(vector1);
	    var mean2 = exports.mean(vector2);
	    if (vector1.length !== vector2.length) throw "Vectors do not have the same dimensions";
	    var cov = 0,
	        l = vector1.length;

	    for (var i = 0; i < l; i++) {
	      var x = vector1[i] - mean1;
	      var y = vector2[i] - mean2;
	      cov += x * y;
	    }

	    if (unbiased) return cov / (l - 1);else return cov / l;
	  };

	  exports.skewness = function skewness(values, unbiased) {
	    if (typeof unbiased === 'undefined') unbiased = true;
	    var theMean = exports.mean(values);
	    var s2 = 0,
	        s3 = 0,
	        l = values.length;

	    for (var i = 0; i < l; i++) {
	      var dev = values[i] - theMean;
	      s2 += dev * dev;
	      s3 += dev * dev * dev;
	    }

	    var m2 = s2 / l;
	    var m3 = s3 / l;
	    var g = m3 / Math.pow(m2, 3 / 2.0);

	    if (unbiased) {
	      var a = Math.sqrt(l * (l - 1));
	      var b = l - 2;
	      return a / b * g;
	    } else {
	      return g;
	    }
	  };

	  exports.kurtosis = function kurtosis(values, unbiased) {
	    if (typeof unbiased === 'undefined') unbiased = true;
	    var theMean = exports.mean(values);
	    var n = values.length,
	        s2 = 0,
	        s4 = 0;

	    for (var i = 0; i < n; i++) {
	      var dev = values[i] - theMean;
	      s2 += dev * dev;
	      s4 += dev * dev * dev * dev;
	    }

	    var m2 = s2 / n;
	    var m4 = s4 / n;

	    if (unbiased) {
	      var v = s2 / (n - 1);
	      var a = n * (n + 1) / ((n - 1) * (n - 2) * (n - 3));
	      var b = s4 / (v * v);
	      var c = (n - 1) * (n - 1) / ((n - 2) * (n - 3));
	      return a * b - 3 * c;
	    } else {
	      return m4 / (m2 * m2) - 3;
	    }
	  };

	  exports.entropy = function entropy(values, eps) {
	    if (typeof eps === 'undefined') eps = 0;
	    var sum = 0,
	        l = values.length;

	    for (var i = 0; i < l; i++) sum += values[i] * Math.log(values[i] + eps);

	    return -sum;
	  };

	  exports.weightedMean = function weightedMean(values, weights) {
	    var sum = 0,
	        l = values.length;

	    for (var i = 0; i < l; i++) sum += values[i] * weights[i];

	    return sum;
	  };

	  exports.weightedStandardDeviation = function weightedStandardDeviation(values, weights) {
	    return Math.sqrt(exports.weightedVariance(values, weights));
	  };

	  exports.weightedVariance = function weightedVariance(values, weights) {
	    var theMean = exports.weightedMean(values, weights);
	    var vari = 0,
	        l = values.length;
	    var a = 0,
	        b = 0;

	    for (var i = 0; i < l; i++) {
	      var z = values[i] - theMean;
	      var w = weights[i];
	      vari += w * (z * z);
	      b += w;
	      a += w * w;
	    }

	    return vari * (b / (b * b - a));
	  };

	  exports.center = function center(values, inPlace) {
	    if (typeof inPlace === 'undefined') inPlace = false;
	    var result = values;
	    if (!inPlace) result = values.slice();
	    var theMean = exports.mean(result),
	        l = result.length;

	    for (var i = 0; i < l; i++) result[i] -= theMean;
	  };

	  exports.standardize = function standardize(values, standardDev, inPlace) {
	    if (typeof standardDev === 'undefined') standardDev = exports.standardDeviation(values);
	    if (typeof inPlace === 'undefined') inPlace = false;
	    var l = values.length;
	    var result = inPlace ? values : new Array(l);

	    for (var i = 0; i < l; i++) result[i] = values[i] / standardDev;

	    return result;
	  };

	  exports.cumulativeSum = function cumulativeSum(array) {
	    var l = array.length;
	    var result = new Array(l);
	    result[0] = array[0];

	    for (var i = 1; i < l; i++) result[i] = result[i - 1] + array[i];

	    return result;
	  };
	});
	var array_1 = array.sum;
	var array_2 = array.max;
	var array_3 = array.min;
	var array_4 = array.minMax;
	var array_5 = array.arithmeticMean;
	var array_6 = array.mean;
	var array_7 = array.geometricMean;
	var array_8 = array.logMean;
	var array_9 = array.grandMean;
	var array_10 = array.truncatedMean;
	var array_11 = array.harmonicMean;
	var array_12 = array.contraHarmonicMean;
	var array_13 = array.median;
	var array_14 = array.variance;
	var array_15 = array.standardDeviation;
	var array_16 = array.standardError;
	var array_17 = array.quartiles;
	var array_18 = array.pooledStandardDeviation;
	var array_19 = array.pooledVariance;
	var array_20 = array.mode;
	var array_21 = array.covariance;
	var array_22 = array.skewness;
	var array_23 = array.kurtosis;
	var array_24 = array.entropy;
	var array_25 = array.weightedMean;
	var array_26 = array.weightedStandardDeviation;
	var array_27 = array.weightedVariance;
	var array_28 = array.center;
	var array_29 = array.standardize;
	var array_30 = array.cumulativeSum;

	var defaultOptions = {
	  windowSize: 9,
	  derivative: 0,
	  polynomial: 3
	};

	function SavitzkyGolay(data, h, options) {
	  options = extend({}, defaultOptions, options);
	  if (options.windowSize % 2 === 0 || options.windowSize < 5 || !Number.isInteger(options.windowSize)) throw new RangeError('Invalid window size (should be odd and at least 5 integer number)');
	  if (options.windowSize > data.length) throw new RangeError('Window size is higher than the data length ' + options.windowSize + ">" + data.length);
	  if (options.derivative < 0 || !Number.isInteger(options.derivative)) throw new RangeError('Derivative should be a positive integer');
	  if (options.polynomial < 1 || !Number.isInteger(options.polynomial)) throw new RangeError('Polynomial should be a positive integer');
	  if (options.polynomial >= 6) console.warn('You should not use polynomial grade higher than 5 if you are' + ' not sure that your data arises from such a model. Possible polynomial oscillation problems');
	  var windowSize = options.windowSize;
	  var half = Math.floor(windowSize / 2);
	  var np = data.length;
	  var ans = new Array(np);
	  var weights = fullWeights(windowSize, options.polynomial, options.derivative);
	  var hs = 0;
	  var constantH = true;

	  if (Object.prototype.toString.call(h) === '[object Array]') {
	    constantH = false;
	  } else {
	    hs = Math.pow(h, options.derivative);
	  } //console.log("Constant h: "+constantH);
	  //For the borders


	  for (var i = 0; i < half; i++) {
	    var wg1 = weights[half - i - 1];
	    var wg2 = weights[half + i + 1];
	    var d1 = 0,
	        d2 = 0;

	    for (var l = 0; l < windowSize; l++) {
	      d1 += wg1[l] * data[l];
	      d2 += wg2[l] * data[np - windowSize + l - 1];
	    }

	    if (constantH) {
	      ans[half - i - 1] = d1 / hs;
	      ans[np - half + i] = d2 / hs;
	    } else {
	      hs = getHs(h, half - i - 1, half, options.derivative);
	      ans[half - i - 1] = d1 / hs;
	      hs = getHs(h, np - half + i, half, options.derivative);
	      ans[np - half + i] = d2 / hs;
	    }
	  } //For the internal points


	  var wg = weights[half];

	  for (var i = windowSize; i < np + 1; i++) {
	    var d = 0;

	    for (var l = 0; l < windowSize; l++) d += wg[l] * data[l + i - windowSize];

	    if (!constantH) hs = getHs(h, i - half - 1, half, options.derivative);
	    ans[i - half - 1] = d / hs;
	  }

	  return ans;
	}

	function getHs(h, center, half, derivative) {
	  var hs = 0;
	  var count = 0;

	  for (var i = center - half; i < center + half; i++) {
	    if (i >= 0 && i < h.length - 1) {
	      hs += h[i + 1] - h[i];
	      count++;
	    }
	  }

	  return Math.pow(hs / count, derivative);
	}

	function GramPoly(i, m, k, s) {
	  var Grampoly = 0;

	  if (k > 0) {
	    Grampoly = (4 * k - 2) / (k * (2 * m - k + 1)) * (i * GramPoly(i, m, k - 1, s) + s * GramPoly(i, m, k - 1, s - 1)) - (k - 1) * (2 * m + k) / (k * (2 * m - k + 1)) * GramPoly(i, m, k - 2, s);
	  } else {
	    if (k == 0 && s == 0) {
	      Grampoly = 1;
	    } else {
	      Grampoly = 0;
	    }
	  } //console.log(Grampoly);


	  return Grampoly;
	}

	function GenFact(a, b) {
	  var gf = 1;

	  if (a >= b) {
	    for (var j = a - b + 1; j <= a; j++) {
	      gf *= j;
	    }
	  }

	  return gf;
	}

	function Weight(i, t, m, n, s) {
	  var sum = 0;

	  for (var k = 0; k <= n; k++) {
	    //console.log(k);
	    sum += (2 * k + 1) * (GenFact(2 * m, k) / GenFact(2 * m + k + 1, k + 1)) * GramPoly(i, m, k, 0) * GramPoly(t, m, k, s);
	  }

	  return sum;
	}
	/**
	 *
	 * @param m  Number of points
	 * @param n  Polynomial grade
	 * @param s  Derivative
	 */


	function fullWeights(m, n, s) {
	  var weights = new Array(m);
	  var np = Math.floor(m / 2);

	  for (var t = -np; t <= np; t++) {
	    weights[t + np] = new Array(m);

	    for (var j = -np; j <= np; j++) {
	      weights[t + np][j + np] = Weight(j, t, np, n, s);
	    }
	  }

	  return weights;
	}
	/*function entropy(data,h,options){
	    var trend = SavitzkyGolay(data,h,trendOptions);
	    var copy = new Array(data.length);
	    var sum = 0;
	    var max = 0;
	    for(var i=0;i<data.length;i++){
	        copy[i] = data[i]-trend[i];
	    }

	    sum/=data.length;
	    console.log(sum+" "+max);
	    console.log(stat.array.standardDeviation(copy));
	    console.log(Math.abs(stat.array.mean(copy))/stat.array.standardDeviation(copy));
	    return sum;

	}



	function guessWindowSize(data, h){
	    console.log("entropy "+entropy(data,h,trendOptions));
	    return 5;
	}
	*/


	var src$1 = SavitzkyGolay;

	const defaultOptions$1 = {
	  sgOptions: {
	    windowSize: 9,
	    polynomial: 3
	  },
	  minMaxRatio: 0.00025,
	  broadRatio: 0.0,
	  maxCriteria: true,
	  smoothY: true,
	  realTopDetection: false,
	  heightFactor: 0,
	  boundaries: false,
	  derivativeThreshold: -1
	};
	/**
	 * Global spectra deconvolution
	 * @param {Array<number>} x - Independent variable
	 * @param {Array<number>} yIn - Dependent variable
	 * @param {object} [options] - Options object
	 * @param {object} [options.sgOptions] - Options object for Savitzky-Golay filter. See https://github.com/mljs/savitzky-golay-generalized#options
	 * @param {number} [options.sgOptions.windowSize = 9] - points to use in the approximations
	 * @param {number} [options.sgOptions.polynomial = 3] - degree of the polynomial to use in the approximations
	 * @param {number} [options.minMaxRatio = 0.00025] - Threshold to determine if a given peak should be considered as a noise
	 * @param {number} [options.broadRatio = 0.00] - If `broadRatio` is higher than 0, then all the peaks which second derivative
	 * smaller than `broadRatio * maxAbsSecondDerivative` will be marked with the soft mask equal to true.
	 * @param {number} [options.noiseLevel = 0] - Noise threshold in spectrum units
	 * @param {boolean} [options.maxCriteria = true] - Peaks are local maximum(true) or minimum(false)
	 * @param {boolean} [options.smoothY = true] - Select the peak intensities from a smoothed version of the independent variables
	 * @param {boolean} [options.realTopDetection = false] - Use a quadratic optimizations with the peak and its 3 closest neighbors
	 * to determine the true x,y values of the peak?
	 * @param {number} [options.heightFactor = 0] - Factor to multiply the calculated height (usually 2)
	 * @param {boolean} [options.boundaries = false] - Return also the inflection points of the peaks
	 * @param {number} [options.derivativeThreshold = -1] - Filters based on the amplitude of the first derivative
	 * @return {Array<object>}
	 */

	function gsd(x, yIn, options) {
	  options = Object.assign({}, defaultOptions$1, options);
	  let sgOptions = options.sgOptions;
	  const y = [].concat(yIn);

	  if (!('noiseLevel' in options)) {
	    // We have to know if x is equally spaced
	    var maxDx = 0;
	    var minDx = Number.MAX_VALUE;
	    var tmp;

	    for (let i = 0; i < x.length - 1; ++i) {
	      tmp = Math.abs(x[i + 1] - x[i]);

	      if (tmp < minDx) {
	        minDx = tmp;
	      }

	      if (tmp > maxDx) {
	        maxDx = tmp;
	      }
	    }

	    if ((maxDx - minDx) / maxDx < 0.05) {
	      options.noiseLevel = getNoiseLevel(y);
	    } else {
	      options.noiseLevel = 0;
	    }
	  }

	  const yCorrection = {
	    m: 1,
	    b: options.noiseLevel
	  };

	  if (!options.maxCriteria) {
	    yCorrection.m = -1;
	    yCorrection.b *= -1;
	  }

	  for (let i = 0; i < y.length; i++) {
	    y[i] = yCorrection.m * y[i] - yCorrection.b;
	  }

	  for (let i = 0; i < y.length; i++) {
	    if (y[i] < 0) {
	      y[i] = 0;
	    }
	  } // If the max difference between delta x is less than 5%, then, we can assume it to be equally spaced variable


	  let Y = y;
	  let dY, ddY;

	  if ((maxDx - minDx) / maxDx < 0.05) {
	    if (options.smoothY) {
	      Y = src$1(y, x[1] - x[0], {
	        windowSize: sgOptions.windowSize,
	        polynomial: sgOptions.polynomial,
	        derivative: 0
	      });
	    }

	    dY = src$1(y, x[1] - x[0], {
	      windowSize: sgOptions.windowSize,
	      polynomial: sgOptions.polynomial,
	      derivative: 1
	    });
	    ddY = src$1(y, x[1] - x[0], {
	      windowSize: sgOptions.windowSize,
	      polynomial: sgOptions.polynomial,
	      derivative: 2
	    });
	  } else {
	    if (options.smoothY) {
	      Y = src$1(y, x, {
	        windowSize: sgOptions.windowSize,
	        polynomial: sgOptions.polynomial,
	        derivative: 0
	      });
	    }

	    dY = src$1(y, x, {
	      windowSize: sgOptions.windowSize,
	      polynomial: sgOptions.polynomial,
	      derivative: 1
	    });
	    ddY = src$1(y, x, {
	      windowSize: sgOptions.windowSize,
	      polynomial: sgOptions.polynomial,
	      derivative: 2
	    });
	  }

	  const X = x;
	  const dx = x[1] - x[0];
	  var maxDdy = 0;
	  var maxY = 0;

	  for (let i = 0; i < Y.length; i++) {
	    if (Math.abs(ddY[i]) > maxDdy) {
	      maxDdy = Math.abs(ddY[i]);
	    }

	    if (Math.abs(Y[i]) > maxY) {
	      maxY = Math.abs(Y[i]);
	    }
	  }

	  var lastMax = null;
	  var lastMin = null;
	  var minddY = new Array(Y.length - 2);
	  var intervalL = new Array(Y.length);
	  var intervalR = new Array(Y.length);
	  var broadMask = new Array(Y.length - 2);
	  var minddYLen = 0;
	  var intervalLLen = 0;
	  var intervalRLen = 0;
	  var broadMaskLen = 0; // By the intermediate value theorem We cannot find 2 consecutive maximum or minimum

	  for (let i = 1; i < Y.length - 1; ++i) {
	    // filter based on derivativeThreshold
	    if (Math.abs(dY[i]) > options.derivativeThreshold) {
	      // Minimum in first derivative
	      if (dY[i] < dY[i - 1] && dY[i] <= dY[i + 1] || dY[i] <= dY[i - 1] && dY[i] < dY[i + 1]) {
	        lastMin = {
	          x: X[i],
	          index: i
	        };

	        if (dx > 0 && lastMax !== null) {
	          intervalL[intervalLLen++] = lastMax;
	          intervalR[intervalRLen++] = lastMin;
	        }
	      } // Maximum in first derivative


	      if (dY[i] >= dY[i - 1] && dY[i] > dY[i + 1] || dY[i] > dY[i - 1] && dY[i] >= dY[i + 1]) {
	        lastMax = {
	          x: X[i],
	          index: i
	        };

	        if (dx < 0 && lastMin !== null) {
	          intervalL[intervalLLen++] = lastMax;
	          intervalR[intervalRLen++] = lastMin;
	        }
	      }
	    } // Minimum in second derivative


	    if (ddY[i] < ddY[i - 1] && ddY[i] < ddY[i + 1]) {
	      // TODO should we change this to have 3 arrays ? Huge overhead creating arrays
	      minddY[minddYLen++] = i; // ( [X[i], Y[i], i] );

	      broadMask[broadMaskLen++] = Math.abs(ddY[i]) <= options.broadRatio * maxDdy;
	    }
	  }

	  minddY.length = minddYLen;
	  intervalL.length = intervalLLen;
	  intervalR.length = intervalRLen;
	  broadMask.length = broadMaskLen;
	  let signals = new Array(minddY.length);
	  let signalsLen = 0;
	  let lastK = -1;
	  let possible, frequency, distanceJ, minDistance, gettingCloser;

	  for (let j = 0; j < minddY.length; ++j) {
	    frequency = X[minddY[j]];
	    possible = -1;
	    let k = lastK + 1;
	    minDistance = Number.MAX_VALUE;
	    distanceJ = 0;
	    gettingCloser = true;

	    while (possible === -1 && k < intervalL.length && gettingCloser) {
	      distanceJ = Math.abs(frequency - (intervalL[k].x + intervalR[k].x) / 2); // Still getting closer?

	      if (distanceJ < minDistance) {
	        minDistance = distanceJ;
	      } else {
	        gettingCloser = false;
	      }

	      if (distanceJ < Math.abs(intervalL[k].x - intervalR[k].x) / 2) {
	        possible = k;
	        lastK = k;
	      }

	      ++k;
	    }

	    if (possible !== -1) {
	      if (Math.abs(Y[minddY[j]]) > options.minMaxRatio * maxY) {
	        signals[signalsLen++] = {
	          index: minddY[j],
	          x: frequency,
	          y: (Y[minddY[j]] + yCorrection.b) / yCorrection.m,
	          width: Math.abs(intervalR[possible].x - intervalL[possible].x),
	          // widthCorrection
	          soft: broadMask[j]
	        };

	        if (options.boundaries) {
	          signals[signalsLen - 1].left = intervalL[possible];
	          signals[signalsLen - 1].right = intervalR[possible];
	        }

	        if (options.heightFactor) {
	          let yLeft = Y[intervalL[possible].index];
	          let yRight = Y[intervalR[possible].index];
	          signals[signalsLen - 1].height = options.heightFactor * (signals[signalsLen - 1].y - (yLeft + yRight) / 2);
	        }
	      }
	    }
	  }

	  signals.length = signalsLen;

	  if (options.realTopDetection) {
	    realTopDetection(signals, X, Y);
	  } // Correct the values to fit the original spectra data


	  for (let j = 0; j < signals.length; j++) {
	    signals[j].base = options.noiseLevel;
	  }

	  signals.sort(function (a, b) {
	    return a.x - b.x;
	  });
	  return signals;
	}

	function getNoiseLevel(y) {
	  var mean = 0;
	  var stddev = 0;
	  var length = y.length;

	  for (let i = 0; i < length; ++i) {
	    mean += y[i];
	  }

	  mean /= length;
	  var averageDeviations = new Array(length);

	  for (let i = 0; i < length; ++i) {
	    averageDeviations[i] = Math.abs(y[i] - mean);
	  }

	  averageDeviations.sort();

	  if (length % 2 === 1) {
	    stddev = averageDeviations[(length - 1) / 2] / 0.6745;
	  } else {
	    stddev = 0.5 * (averageDeviations[length / 2] + averageDeviations[length / 2 - 1]) / 0.6745;
	  }

	  return stddev;
	}

	function realTopDetection(peakList, x, y) {
	  var alpha, beta, gamma, p, currentPoint;

	  for (var j = 0; j < peakList.length; j++) {
	    currentPoint = peakList[j].index; // peakList[j][2];
	    // The detected peak could be moved 1 or 2 unit to left or right.

	    if (y[currentPoint - 1] >= y[currentPoint - 2] && y[currentPoint - 1] >= y[currentPoint]) {
	      currentPoint--;
	    } else {
	      if (y[currentPoint + 1] >= y[currentPoint] && y[currentPoint + 1] >= y[currentPoint + 2]) {
	        currentPoint++;
	      } else {
	        if (y[currentPoint - 2] >= y[currentPoint - 3] && y[currentPoint - 2] >= y[currentPoint - 1]) {
	          currentPoint -= 2;
	        } else {
	          if (y[currentPoint + 2] >= y[currentPoint + 1] && y[currentPoint + 2] >= y[currentPoint + 3]) {
	            currentPoint += 2;
	          }
	        }
	      }
	    } // interpolation to a sin() function


	    if (y[currentPoint - 1] > 0 && y[currentPoint + 1] > 0 && y[currentPoint] >= y[currentPoint - 1] && y[currentPoint] >= y[currentPoint + 1]) {
	      alpha = 20 * Math.log10(y[currentPoint - 1]);
	      beta = 20 * Math.log10(y[currentPoint]);
	      gamma = 20 * Math.log10(y[currentPoint + 1]);
	      p = 0.5 * (alpha - gamma) / (alpha - 2 * beta + gamma); // console.log(alpha, beta, gamma, `p: ${p}`);
	      // console.log(x[currentPoint]+" "+tmp+" "+currentPoint);

	      peakList[j].x = x[currentPoint] + (x[currentPoint] - x[currentPoint - 1]) * p;
	      peakList[j].y = y[currentPoint] - 0.25 * (y[currentPoint - 1] - y[currentPoint + 1]) * p;
	    }
	  }
	}

	var gsd_1 = gsd;

	if (!Symbol.species) {
	  Symbol.species = Symbol.for('@@species');
	}

	function LuDecomposition(matrix) {
	  if (!(this instanceof LuDecomposition)) {
	    return new LuDecomposition(matrix);
	  }

	  matrix = matrix$2.Matrix.checkMatrix(matrix);
	  var lu = matrix.clone(),
	      rows = lu.rows,
	      columns = lu.columns,
	      pivotVector = new Array(rows),
	      pivotSign = 1,
	      i,
	      j,
	      k,
	      p,
	      s,
	      t,
	      v,
	      LUrowi,
	      LUcolj,
	      kmax;

	  for (i = 0; i < rows; i++) {
	    pivotVector[i] = i;
	  }

	  LUcolj = new Array(rows);

	  for (j = 0; j < columns; j++) {
	    for (i = 0; i < rows; i++) {
	      LUcolj[i] = lu[i][j];
	    }

	    for (i = 0; i < rows; i++) {
	      LUrowi = lu[i];
	      kmax = Math.min(i, j);
	      s = 0;

	      for (k = 0; k < kmax; k++) {
	        s += LUrowi[k] * LUcolj[k];
	      }

	      LUrowi[j] = LUcolj[i] -= s;
	    }

	    p = j;

	    for (i = j + 1; i < rows; i++) {
	      if (Math.abs(LUcolj[i]) > Math.abs(LUcolj[p])) {
	        p = i;
	      }
	    }

	    if (p !== j) {
	      for (k = 0; k < columns; k++) {
	        t = lu[p][k];
	        lu[p][k] = lu[j][k];
	        lu[j][k] = t;
	      }

	      v = pivotVector[p];
	      pivotVector[p] = pivotVector[j];
	      pivotVector[j] = v;
	      pivotSign = -pivotSign;
	    }

	    if (j < rows && lu[j][j] !== 0) {
	      for (i = j + 1; i < rows; i++) {
	        lu[i][j] /= lu[j][j];
	      }
	    }
	  }

	  this.LU = lu;
	  this.pivotVector = pivotVector;
	  this.pivotSign = pivotSign;
	}

	LuDecomposition.prototype = {
	  isSingular: function isSingular() {
	    var data = this.LU,
	        col = data.columns;

	    for (var j = 0; j < col; j++) {
	      if (data[j][j] === 0) {
	        return true;
	      }
	    }

	    return false;
	  },

	  get determinant() {
	    var data = this.LU;

	    if (!data.isSquare()) {
	      throw new Error('Matrix must be square');
	    }

	    var determinant = this.pivotSign,
	        col = data.columns;

	    for (var j = 0; j < col; j++) {
	      determinant *= data[j][j];
	    }

	    return determinant;
	  },

	  get lowerTriangularMatrix() {
	    var data = this.LU,
	        rows = data.rows,
	        columns = data.columns,
	        X = new matrix$2.Matrix(rows, columns);

	    for (var i = 0; i < rows; i++) {
	      for (var j = 0; j < columns; j++) {
	        if (i > j) {
	          X[i][j] = data[i][j];
	        } else if (i === j) {
	          X[i][j] = 1;
	        } else {
	          X[i][j] = 0;
	        }
	      }
	    }

	    return X;
	  },

	  get upperTriangularMatrix() {
	    var data = this.LU,
	        rows = data.rows,
	        columns = data.columns,
	        X = new matrix$2.Matrix(rows, columns);

	    for (var i = 0; i < rows; i++) {
	      for (var j = 0; j < columns; j++) {
	        if (i <= j) {
	          X[i][j] = data[i][j];
	        } else {
	          X[i][j] = 0;
	        }
	      }
	    }

	    return X;
	  },

	  get pivotPermutationVector() {
	    return this.pivotVector.slice();
	  },

	  solve: function solve(value) {
	    value = matrix$2.Matrix.checkMatrix(value);
	    var lu = this.LU,
	        rows = lu.rows;

	    if (rows !== value.rows) {
	      throw new Error('Invalid matrix dimensions');
	    }

	    if (this.isSingular()) {
	      throw new Error('LU matrix is singular');
	    }

	    var count = value.columns;
	    var X = value.subMatrixRow(this.pivotVector, 0, count - 1);
	    var columns = lu.columns;
	    var i, j, k;

	    for (k = 0; k < columns; k++) {
	      for (i = k + 1; i < columns; i++) {
	        for (j = 0; j < count; j++) {
	          X[i][j] -= X[k][j] * lu[i][k];
	        }
	      }
	    }

	    for (k = columns - 1; k >= 0; k--) {
	      for (j = 0; j < count; j++) {
	        X[k][j] /= lu[k][k];
	      }

	      for (i = 0; i < k; i++) {
	        for (j = 0; j < count; j++) {
	          X[i][j] -= X[k][j] * lu[i][k];
	        }
	      }
	    }

	    return X;
	  }
	};
	var lu = LuDecomposition;

	var hypotenuse = function hypotenuse(a, b) {
	  var r;

	  if (Math.abs(a) > Math.abs(b)) {
	    r = b / a;
	    return Math.abs(a) * Math.sqrt(1 + r * r);
	  }

	  if (b !== 0) {
	    r = a / b;
	    return Math.abs(b) * Math.sqrt(1 + r * r);
	  }

	  return 0;
	}; // For use in the decomposition algorithms. With big matrices, access time is
	// too long on elements from array subclass
	// todo check when it is fixed in v8
	// http://jsperf.com/access-and-write-array-subclass


	var getEmpty2DArray = function getEmpty2DArray(rows, columns) {
	  var array = new Array(rows);

	  for (var i = 0; i < rows; i++) {
	    array[i] = new Array(columns);
	  }

	  return array;
	};

	var getFilled2DArray = function getFilled2DArray(rows, columns, value) {
	  var array = new Array(rows);

	  for (var i = 0; i < rows; i++) {
	    array[i] = new Array(columns);

	    for (var j = 0; j < columns; j++) {
	      array[i][j] = value;
	    }
	  }

	  return array;
	};

	var util = {
	  hypotenuse: hypotenuse,
	  getEmpty2DArray: getEmpty2DArray,
	  getFilled2DArray: getFilled2DArray
	};

	var hypotenuse$1 = util.hypotenuse;
	var getFilled2DArray$1 = util.getFilled2DArray; // https://github.com/lutzroeder/Mapack/blob/master/Source/SingularValueDecomposition.cs

	function SingularValueDecomposition(value, options) {
	  if (!(this instanceof SingularValueDecomposition)) {
	    return new SingularValueDecomposition(value, options);
	  }

	  value = matrix$2.Matrix.checkMatrix(value);
	  options = options || {};
	  var m = value.rows,
	      n = value.columns,
	      nu = Math.min(m, n);
	  var wantu = true,
	      wantv = true;
	  if (options.computeLeftSingularVectors === false) wantu = false;
	  if (options.computeRightSingularVectors === false) wantv = false;
	  var autoTranspose = options.autoTranspose === true;
	  var swapped = false;
	  var a;

	  if (m < n) {
	    if (!autoTranspose) {
	      a = value.clone(); // eslint-disable-next-line no-console

	      console.warn('Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose');
	    } else {
	      a = value.transpose();
	      m = a.rows;
	      n = a.columns;
	      swapped = true;
	      var aux = wantu;
	      wantu = wantv;
	      wantv = aux;
	    }
	  } else {
	    a = value.clone();
	  }

	  var s = new Array(Math.min(m + 1, n)),
	      U = getFilled2DArray$1(m, nu, 0),
	      V = getFilled2DArray$1(n, n, 0),
	      e = new Array(n),
	      work = new Array(m);
	  var nct = Math.min(m - 1, n);
	  var nrt = Math.max(0, Math.min(n - 2, m));
	  var i, j, k, p, t, ks, f, cs, sn, max, kase, scale, sp, spm1, epm1, sk, ek, b, c, shift, g;

	  for (k = 0, max = Math.max(nct, nrt); k < max; k++) {
	    if (k < nct) {
	      s[k] = 0;

	      for (i = k; i < m; i++) {
	        s[k] = hypotenuse$1(s[k], a[i][k]);
	      }

	      if (s[k] !== 0) {
	        if (a[k][k] < 0) {
	          s[k] = -s[k];
	        }

	        for (i = k; i < m; i++) {
	          a[i][k] /= s[k];
	        }

	        a[k][k] += 1;
	      }

	      s[k] = -s[k];
	    }

	    for (j = k + 1; j < n; j++) {
	      if (k < nct && s[k] !== 0) {
	        t = 0;

	        for (i = k; i < m; i++) {
	          t += a[i][k] * a[i][j];
	        }

	        t = -t / a[k][k];

	        for (i = k; i < m; i++) {
	          a[i][j] += t * a[i][k];
	        }
	      }

	      e[j] = a[k][j];
	    }

	    if (wantu && k < nct) {
	      for (i = k; i < m; i++) {
	        U[i][k] = a[i][k];
	      }
	    }

	    if (k < nrt) {
	      e[k] = 0;

	      for (i = k + 1; i < n; i++) {
	        e[k] = hypotenuse$1(e[k], e[i]);
	      }

	      if (e[k] !== 0) {
	        if (e[k + 1] < 0) {
	          e[k] = 0 - e[k];
	        }

	        for (i = k + 1; i < n; i++) {
	          e[i] /= e[k];
	        }

	        e[k + 1] += 1;
	      }

	      e[k] = -e[k];

	      if (k + 1 < m && e[k] !== 0) {
	        for (i = k + 1; i < m; i++) {
	          work[i] = 0;
	        }

	        for (j = k + 1; j < n; j++) {
	          for (i = k + 1; i < m; i++) {
	            work[i] += e[j] * a[i][j];
	          }
	        }

	        for (j = k + 1; j < n; j++) {
	          t = -e[j] / e[k + 1];

	          for (i = k + 1; i < m; i++) {
	            a[i][j] += t * work[i];
	          }
	        }
	      }

	      if (wantv) {
	        for (i = k + 1; i < n; i++) {
	          V[i][k] = e[i];
	        }
	      }
	    }
	  }

	  p = Math.min(n, m + 1);

	  if (nct < n) {
	    s[nct] = a[nct][nct];
	  }

	  if (m < p) {
	    s[p - 1] = 0;
	  }

	  if (nrt + 1 < p) {
	    e[nrt] = a[nrt][p - 1];
	  }

	  e[p - 1] = 0;

	  if (wantu) {
	    for (j = nct; j < nu; j++) {
	      for (i = 0; i < m; i++) {
	        U[i][j] = 0;
	      }

	      U[j][j] = 1;
	    }

	    for (k = nct - 1; k >= 0; k--) {
	      if (s[k] !== 0) {
	        for (j = k + 1; j < nu; j++) {
	          t = 0;

	          for (i = k; i < m; i++) {
	            t += U[i][k] * U[i][j];
	          }

	          t = -t / U[k][k];

	          for (i = k; i < m; i++) {
	            U[i][j] += t * U[i][k];
	          }
	        }

	        for (i = k; i < m; i++) {
	          U[i][k] = -U[i][k];
	        }

	        U[k][k] = 1 + U[k][k];

	        for (i = 0; i < k - 1; i++) {
	          U[i][k] = 0;
	        }
	      } else {
	        for (i = 0; i < m; i++) {
	          U[i][k] = 0;
	        }

	        U[k][k] = 1;
	      }
	    }
	  }

	  if (wantv) {
	    for (k = n - 1; k >= 0; k--) {
	      if (k < nrt && e[k] !== 0) {
	        for (j = k + 1; j < n; j++) {
	          t = 0;

	          for (i = k + 1; i < n; i++) {
	            t += V[i][k] * V[i][j];
	          }

	          t = -t / V[k + 1][k];

	          for (i = k + 1; i < n; i++) {
	            V[i][j] += t * V[i][k];
	          }
	        }
	      }

	      for (i = 0; i < n; i++) {
	        V[i][k] = 0;
	      }

	      V[k][k] = 1;
	    }
	  }

	  var pp = p - 1,
	      eps = Math.pow(2, -52);

	  while (p > 0) {
	    for (k = p - 2; k >= -1; k--) {
	      if (k === -1) {
	        break;
	      }

	      if (Math.abs(e[k]) <= eps * (Math.abs(s[k]) + Math.abs(s[k + 1]))) {
	        e[k] = 0;
	        break;
	      }
	    }

	    if (k === p - 2) {
	      kase = 4;
	    } else {
	      for (ks = p - 1; ks >= k; ks--) {
	        if (ks === k) {
	          break;
	        }

	        t = (ks !== p ? Math.abs(e[ks]) : 0) + (ks !== k + 1 ? Math.abs(e[ks - 1]) : 0);

	        if (Math.abs(s[ks]) <= eps * t) {
	          s[ks] = 0;
	          break;
	        }
	      }

	      if (ks === k) {
	        kase = 3;
	      } else if (ks === p - 1) {
	        kase = 1;
	      } else {
	        kase = 2;
	        k = ks;
	      }
	    }

	    k++;

	    switch (kase) {
	      case 1:
	        {
	          f = e[p - 2];
	          e[p - 2] = 0;

	          for (j = p - 2; j >= k; j--) {
	            t = hypotenuse$1(s[j], f);
	            cs = s[j] / t;
	            sn = f / t;
	            s[j] = t;

	            if (j !== k) {
	              f = -sn * e[j - 1];
	              e[j - 1] = cs * e[j - 1];
	            }

	            if (wantv) {
	              for (i = 0; i < n; i++) {
	                t = cs * V[i][j] + sn * V[i][p - 1];
	                V[i][p - 1] = -sn * V[i][j] + cs * V[i][p - 1];
	                V[i][j] = t;
	              }
	            }
	          }

	          break;
	        }

	      case 2:
	        {
	          f = e[k - 1];
	          e[k - 1] = 0;

	          for (j = k; j < p; j++) {
	            t = hypotenuse$1(s[j], f);
	            cs = s[j] / t;
	            sn = f / t;
	            s[j] = t;
	            f = -sn * e[j];
	            e[j] = cs * e[j];

	            if (wantu) {
	              for (i = 0; i < m; i++) {
	                t = cs * U[i][j] + sn * U[i][k - 1];
	                U[i][k - 1] = -sn * U[i][j] + cs * U[i][k - 1];
	                U[i][j] = t;
	              }
	            }
	          }

	          break;
	        }

	      case 3:
	        {
	          scale = Math.max(Math.max(Math.max(Math.max(Math.abs(s[p - 1]), Math.abs(s[p - 2])), Math.abs(e[p - 2])), Math.abs(s[k])), Math.abs(e[k]));
	          sp = s[p - 1] / scale;
	          spm1 = s[p - 2] / scale;
	          epm1 = e[p - 2] / scale;
	          sk = s[k] / scale;
	          ek = e[k] / scale;
	          b = ((spm1 + sp) * (spm1 - sp) + epm1 * epm1) / 2;
	          c = sp * epm1 * (sp * epm1);
	          shift = 0;

	          if (b !== 0 || c !== 0) {
	            shift = Math.sqrt(b * b + c);

	            if (b < 0) {
	              shift = -shift;
	            }

	            shift = c / (b + shift);
	          }

	          f = (sk + sp) * (sk - sp) + shift;
	          g = sk * ek;

	          for (j = k; j < p - 1; j++) {
	            t = hypotenuse$1(f, g);
	            cs = f / t;
	            sn = g / t;

	            if (j !== k) {
	              e[j - 1] = t;
	            }

	            f = cs * s[j] + sn * e[j];
	            e[j] = cs * e[j] - sn * s[j];
	            g = sn * s[j + 1];
	            s[j + 1] = cs * s[j + 1];

	            if (wantv) {
	              for (i = 0; i < n; i++) {
	                t = cs * V[i][j] + sn * V[i][j + 1];
	                V[i][j + 1] = -sn * V[i][j] + cs * V[i][j + 1];
	                V[i][j] = t;
	              }
	            }

	            t = hypotenuse$1(f, g);
	            cs = f / t;
	            sn = g / t;
	            s[j] = t;
	            f = cs * e[j] + sn * s[j + 1];
	            s[j + 1] = -sn * e[j] + cs * s[j + 1];
	            g = sn * e[j + 1];
	            e[j + 1] = cs * e[j + 1];

	            if (wantu && j < m - 1) {
	              for (i = 0; i < m; i++) {
	                t = cs * U[i][j] + sn * U[i][j + 1];
	                U[i][j + 1] = -sn * U[i][j] + cs * U[i][j + 1];
	                U[i][j] = t;
	              }
	            }
	          }

	          e[p - 2] = f;
	          break;
	        }

	      case 4:
	        {
	          if (s[k] <= 0) {
	            s[k] = s[k] < 0 ? -s[k] : 0;

	            if (wantv) {
	              for (i = 0; i <= pp; i++) {
	                V[i][k] = -V[i][k];
	              }
	            }
	          }

	          while (k < pp) {
	            if (s[k] >= s[k + 1]) {
	              break;
	            }

	            t = s[k];
	            s[k] = s[k + 1];
	            s[k + 1] = t;

	            if (wantv && k < n - 1) {
	              for (i = 0; i < n; i++) {
	                t = V[i][k + 1];
	                V[i][k + 1] = V[i][k];
	                V[i][k] = t;
	              }
	            }

	            if (wantu && k < m - 1) {
	              for (i = 0; i < m; i++) {
	                t = U[i][k + 1];
	                U[i][k + 1] = U[i][k];
	                U[i][k] = t;
	              }
	            }

	            k++;
	          }
	          p--;
	          break;
	        }
	      // no default
	    }
	  }

	  if (swapped) {
	    var tmp = V;
	    V = U;
	    U = tmp;
	  }

	  this.m = m;
	  this.n = n;
	  this.s = s;
	  this.U = U;
	  this.V = V;
	}

	SingularValueDecomposition.prototype = {
	  get condition() {
	    return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
	  },

	  get norm2() {
	    return this.s[0];
	  },

	  get rank() {
	    var eps = Math.pow(2, -52),
	        tol = Math.max(this.m, this.n) * this.s[0] * eps,
	        r = 0,
	        s = this.s;

	    for (var i = 0, ii = s.length; i < ii; i++) {
	      if (s[i] > tol) {
	        r++;
	      }
	    }

	    return r;
	  },

	  get diagonal() {
	    return this.s;
	  },

	  // https://github.com/accord-net/framework/blob/development/Sources/Accord.Math/Decompositions/SingularValueDecomposition.cs
	  get threshold() {
	    return Math.pow(2, -52) / 2 * Math.max(this.m, this.n) * this.s[0];
	  },

	  get leftSingularVectors() {
	    if (!matrix$2.Matrix.isMatrix(this.U)) {
	      this.U = new matrix$2.Matrix(this.U);
	    }

	    return this.U;
	  },

	  get rightSingularVectors() {
	    if (!matrix$2.Matrix.isMatrix(this.V)) {
	      this.V = new matrix$2.Matrix(this.V);
	    }

	    return this.V;
	  },

	  get diagonalMatrix() {
	    return matrix$2.Matrix.diag(this.s);
	  },

	  solve: function solve(value) {
	    var Y = value,
	        e = this.threshold,
	        scols = this.s.length,
	        Ls = matrix$2.Matrix.zeros(scols, scols),
	        i;

	    for (i = 0; i < scols; i++) {
	      if (Math.abs(this.s[i]) <= e) {
	        Ls[i][i] = 0;
	      } else {
	        Ls[i][i] = 1 / this.s[i];
	      }
	    }

	    var U = this.U;
	    var V = this.rightSingularVectors;
	    var VL = V.mmul(Ls),
	        vrows = V.rows,
	        urows = U.length,
	        VLU = matrix$2.Matrix.zeros(vrows, urows),
	        j,
	        k,
	        sum;

	    for (i = 0; i < vrows; i++) {
	      for (j = 0; j < urows; j++) {
	        sum = 0;

	        for (k = 0; k < scols; k++) {
	          sum += VL[i][k] * U[j][k];
	        }

	        VLU[i][j] = sum;
	      }
	    }

	    return VLU.mmul(Y);
	  },
	  solveForDiagonal: function solveForDiagonal(value) {
	    return this.solve(matrix$2.Matrix.diag(value));
	  },
	  inverse: function inverse() {
	    var V = this.V;
	    var e = this.threshold,
	        vrows = V.length,
	        vcols = V[0].length,
	        X = new matrix$2.Matrix(vrows, this.s.length),
	        i,
	        j;

	    for (i = 0; i < vrows; i++) {
	      for (j = 0; j < vcols; j++) {
	        if (Math.abs(this.s[j]) > e) {
	          X[i][j] = V[i][j] / this.s[j];
	        } else {
	          X[i][j] = 0;
	        }
	      }
	    }

	    var U = this.U;
	    var urows = U.length,
	        ucols = U[0].length,
	        Y = new matrix$2.Matrix(vrows, urows),
	        k,
	        sum;

	    for (i = 0; i < vrows; i++) {
	      for (j = 0; j < urows; j++) {
	        sum = 0;

	        for (k = 0; k < ucols; k++) {
	          sum += X[i][k] * U[j][k];
	        }

	        Y[i][j] = sum;
	      }
	    }

	    return Y;
	  }
	};
	var svd = SingularValueDecomposition;

	var array$1 = createCommonjsModule(function (module, exports) {

	  function compareNumbers(a, b) {
	    return a - b;
	  }
	  /**
	   * Computes the sum of the given values
	   * @param {Array} values
	   * @returns {number}
	   */


	  exports.sum = function sum(values) {
	    var sum = 0;

	    for (var i = 0; i < values.length; i++) {
	      sum += values[i];
	    }

	    return sum;
	  };
	  /**
	   * Computes the maximum of the given values
	   * @param {Array} values
	   * @returns {number}
	   */


	  exports.max = function max(values) {
	    var max = values[0];
	    var l = values.length;

	    for (var i = 1; i < l; i++) {
	      if (values[i] > max) max = values[i];
	    }

	    return max;
	  };
	  /**
	   * Computes the minimum of the given values
	   * @param {Array} values
	   * @returns {number}
	   */


	  exports.min = function min(values) {
	    var min = values[0];
	    var l = values.length;

	    for (var i = 1; i < l; i++) {
	      if (values[i] < min) min = values[i];
	    }

	    return min;
	  };
	  /**
	   * Computes the min and max of the given values
	   * @param {Array} values
	   * @returns {{min: number, max: number}}
	   */


	  exports.minMax = function minMax(values) {
	    var min = values[0];
	    var max = values[0];
	    var l = values.length;

	    for (var i = 1; i < l; i++) {
	      if (values[i] < min) min = values[i];
	      if (values[i] > max) max = values[i];
	    }

	    return {
	      min: min,
	      max: max
	    };
	  };
	  /**
	   * Computes the arithmetic mean of the given values
	   * @param {Array} values
	   * @returns {number}
	   */


	  exports.arithmeticMean = function arithmeticMean(values) {
	    var sum = 0;
	    var l = values.length;

	    for (var i = 0; i < l; i++) {
	      sum += values[i];
	    }

	    return sum / l;
	  };
	  /**
	   * {@link arithmeticMean}
	   */


	  exports.mean = exports.arithmeticMean;
	  /**
	   * Computes the geometric mean of the given values
	   * @param {Array} values
	   * @returns {number}
	   */

	  exports.geometricMean = function geometricMean(values) {
	    var mul = 1;
	    var l = values.length;

	    for (var i = 0; i < l; i++) {
	      mul *= values[i];
	    }

	    return Math.pow(mul, 1 / l);
	  };
	  /**
	   * Computes the mean of the log of the given values
	   * If the return value is exponentiated, it gives the same result as the
	   * geometric mean.
	   * @param {Array} values
	   * @returns {number}
	   */


	  exports.logMean = function logMean(values) {
	    var lnsum = 0;
	    var l = values.length;

	    for (var i = 0; i < l; i++) {
	      lnsum += Math.log(values[i]);
	    }

	    return lnsum / l;
	  };
	  /**
	   * Computes the weighted grand mean for a list of means and sample sizes
	   * @param {Array} means - Mean values for each set of samples
	   * @param {Array} samples - Number of original values for each set of samples
	   * @returns {number}
	   */


	  exports.grandMean = function grandMean(means, samples) {
	    var sum = 0;
	    var n = 0;
	    var l = means.length;

	    for (var i = 0; i < l; i++) {
	      sum += samples[i] * means[i];
	      n += samples[i];
	    }

	    return sum / n;
	  };
	  /**
	   * Computes the truncated mean of the given values using a given percentage
	   * @param {Array} values
	   * @param {number} percent - The percentage of values to keep (range: [0,1])
	   * @param {boolean} [alreadySorted=false]
	   * @returns {number}
	   */


	  exports.truncatedMean = function truncatedMean(values, percent, alreadySorted) {
	    if (alreadySorted === undefined) alreadySorted = false;

	    if (!alreadySorted) {
	      values = [].concat(values).sort(compareNumbers);
	    }

	    var l = values.length;
	    var k = Math.floor(l * percent);
	    var sum = 0;

	    for (var i = k; i < l - k; i++) {
	      sum += values[i];
	    }

	    return sum / (l - 2 * k);
	  };
	  /**
	   * Computes the harmonic mean of the given values
	   * @param {Array} values
	   * @returns {number}
	   */


	  exports.harmonicMean = function harmonicMean(values) {
	    var sum = 0;
	    var l = values.length;

	    for (var i = 0; i < l; i++) {
	      if (values[i] === 0) {
	        throw new RangeError('value at index ' + i + 'is zero');
	      }

	      sum += 1 / values[i];
	    }

	    return l / sum;
	  };
	  /**
	   * Computes the contraharmonic mean of the given values
	   * @param {Array} values
	   * @returns {number}
	   */


	  exports.contraHarmonicMean = function contraHarmonicMean(values) {
	    var r1 = 0;
	    var r2 = 0;
	    var l = values.length;

	    for (var i = 0; i < l; i++) {
	      r1 += values[i] * values[i];
	      r2 += values[i];
	    }

	    if (r2 < 0) {
	      throw new RangeError('sum of values is negative');
	    }

	    return r1 / r2;
	  };
	  /**
	   * Computes the median of the given values
	   * @param {Array} values
	   * @param {boolean} [alreadySorted=false]
	   * @returns {number}
	   */


	  exports.median = function median(values, alreadySorted) {
	    if (alreadySorted === undefined) alreadySorted = false;

	    if (!alreadySorted) {
	      values = [].concat(values).sort(compareNumbers);
	    }

	    var l = values.length;
	    var half = Math.floor(l / 2);

	    if (l % 2 === 0) {
	      return (values[half - 1] + values[half]) * 0.5;
	    } else {
	      return values[half];
	    }
	  };
	  /**
	   * Computes the variance of the given values
	   * @param {Array} values
	   * @param {boolean} [unbiased=true] - if true, divide by (n-1); if false, divide by n.
	   * @returns {number}
	   */


	  exports.variance = function variance(values, unbiased) {
	    if (unbiased === undefined) unbiased = true;
	    var theMean = exports.mean(values);
	    var theVariance = 0;
	    var l = values.length;

	    for (var i = 0; i < l; i++) {
	      var x = values[i] - theMean;
	      theVariance += x * x;
	    }

	    if (unbiased) {
	      return theVariance / (l - 1);
	    } else {
	      return theVariance / l;
	    }
	  };
	  /**
	   * Computes the standard deviation of the given values
	   * @param {Array} values
	   * @param {boolean} [unbiased=true] - if true, divide by (n-1); if false, divide by n.
	   * @returns {number}
	   */


	  exports.standardDeviation = function standardDeviation(values, unbiased) {
	    return Math.sqrt(exports.variance(values, unbiased));
	  };

	  exports.standardError = function standardError(values) {
	    return exports.standardDeviation(values) / Math.sqrt(values.length);
	  };
	  /**
	   * IEEE Transactions on biomedical engineering, vol. 52, no. 1, january 2005, p. 76-
	   * Calculate the standard deviation via the Median of the absolute deviation
	   *  The formula for the standard deviation only holds for Gaussian random variables.
	   * @returns {{mean: number, stdev: number}}
	   */


	  exports.robustMeanAndStdev = function robustMeanAndStdev(y) {
	    var mean = 0,
	        stdev = 0;
	    var length = y.length,
	        i = 0;

	    for (i = 0; i < length; i++) {
	      mean += y[i];
	    }

	    mean /= length;
	    var averageDeviations = new Array(length);

	    for (i = 0; i < length; i++) averageDeviations[i] = Math.abs(y[i] - mean);

	    averageDeviations.sort(compareNumbers);

	    if (length % 2 === 1) {
	      stdev = averageDeviations[(length - 1) / 2] / 0.6745;
	    } else {
	      stdev = 0.5 * (averageDeviations[length / 2] + averageDeviations[length / 2 - 1]) / 0.6745;
	    }

	    return {
	      mean: mean,
	      stdev: stdev
	    };
	  };

	  exports.quartiles = function quartiles(values, alreadySorted) {
	    if (typeof alreadySorted === 'undefined') alreadySorted = false;

	    if (!alreadySorted) {
	      values = [].concat(values).sort(compareNumbers);
	    }

	    var quart = values.length / 4;
	    var q1 = values[Math.ceil(quart) - 1];
	    var q2 = exports.median(values, true);
	    var q3 = values[Math.ceil(quart * 3) - 1];
	    return {
	      q1: q1,
	      q2: q2,
	      q3: q3
	    };
	  };

	  exports.pooledStandardDeviation = function pooledStandardDeviation(samples, unbiased) {
	    return Math.sqrt(exports.pooledVariance(samples, unbiased));
	  };

	  exports.pooledVariance = function pooledVariance(samples, unbiased) {
	    if (typeof unbiased === 'undefined') unbiased = true;
	    var sum = 0;
	    var length = 0,
	        l = samples.length;

	    for (var i = 0; i < l; i++) {
	      var values = samples[i];
	      var vari = exports.variance(values);
	      sum += (values.length - 1) * vari;
	      if (unbiased) length += values.length - 1;else length += values.length;
	    }

	    return sum / length;
	  };

	  exports.mode = function mode(values) {
	    var l = values.length,
	        itemCount = new Array(l),
	        i;

	    for (i = 0; i < l; i++) {
	      itemCount[i] = 0;
	    }

	    var itemArray = new Array(l);
	    var count = 0;

	    for (i = 0; i < l; i++) {
	      var index = itemArray.indexOf(values[i]);
	      if (index >= 0) itemCount[index]++;else {
	        itemArray[count] = values[i];
	        itemCount[count] = 1;
	        count++;
	      }
	    }

	    var maxValue = 0,
	        maxIndex = 0;

	    for (i = 0; i < count; i++) {
	      if (itemCount[i] > maxValue) {
	        maxValue = itemCount[i];
	        maxIndex = i;
	      }
	    }

	    return itemArray[maxIndex];
	  };

	  exports.covariance = function covariance(vector1, vector2, unbiased) {
	    if (typeof unbiased === 'undefined') unbiased = true;
	    var mean1 = exports.mean(vector1);
	    var mean2 = exports.mean(vector2);
	    if (vector1.length !== vector2.length) throw 'Vectors do not have the same dimensions';
	    var cov = 0,
	        l = vector1.length;

	    for (var i = 0; i < l; i++) {
	      var x = vector1[i] - mean1;
	      var y = vector2[i] - mean2;
	      cov += x * y;
	    }

	    if (unbiased) return cov / (l - 1);else return cov / l;
	  };

	  exports.skewness = function skewness(values, unbiased) {
	    if (typeof unbiased === 'undefined') unbiased = true;
	    var theMean = exports.mean(values);
	    var s2 = 0,
	        s3 = 0,
	        l = values.length;

	    for (var i = 0; i < l; i++) {
	      var dev = values[i] - theMean;
	      s2 += dev * dev;
	      s3 += dev * dev * dev;
	    }

	    var m2 = s2 / l;
	    var m3 = s3 / l;
	    var g = m3 / Math.pow(m2, 3 / 2.0);

	    if (unbiased) {
	      var a = Math.sqrt(l * (l - 1));
	      var b = l - 2;
	      return a / b * g;
	    } else {
	      return g;
	    }
	  };

	  exports.kurtosis = function kurtosis(values, unbiased) {
	    if (typeof unbiased === 'undefined') unbiased = true;
	    var theMean = exports.mean(values);
	    var n = values.length,
	        s2 = 0,
	        s4 = 0;

	    for (var i = 0; i < n; i++) {
	      var dev = values[i] - theMean;
	      s2 += dev * dev;
	      s4 += dev * dev * dev * dev;
	    }

	    var m2 = s2 / n;
	    var m4 = s4 / n;

	    if (unbiased) {
	      var v = s2 / (n - 1);
	      var a = n * (n + 1) / ((n - 1) * (n - 2) * (n - 3));
	      var b = s4 / (v * v);
	      var c = (n - 1) * (n - 1) / ((n - 2) * (n - 3));
	      return a * b - 3 * c;
	    } else {
	      return m4 / (m2 * m2) - 3;
	    }
	  };

	  exports.entropy = function entropy(values, eps) {
	    if (typeof eps === 'undefined') eps = 0;
	    var sum = 0,
	        l = values.length;

	    for (var i = 0; i < l; i++) sum += values[i] * Math.log(values[i] + eps);

	    return -sum;
	  };

	  exports.weightedMean = function weightedMean(values, weights) {
	    var sum = 0,
	        l = values.length;

	    for (var i = 0; i < l; i++) sum += values[i] * weights[i];

	    return sum;
	  };

	  exports.weightedStandardDeviation = function weightedStandardDeviation(values, weights) {
	    return Math.sqrt(exports.weightedVariance(values, weights));
	  };

	  exports.weightedVariance = function weightedVariance(values, weights) {
	    var theMean = exports.weightedMean(values, weights);
	    var vari = 0,
	        l = values.length;
	    var a = 0,
	        b = 0;

	    for (var i = 0; i < l; i++) {
	      var z = values[i] - theMean;
	      var w = weights[i];
	      vari += w * (z * z);
	      b += w;
	      a += w * w;
	    }

	    return vari * (b / (b * b - a));
	  };

	  exports.center = function center(values, inPlace) {
	    if (typeof inPlace === 'undefined') inPlace = false;
	    var result = values;
	    if (!inPlace) result = [].concat(values);
	    var theMean = exports.mean(result),
	        l = result.length;

	    for (var i = 0; i < l; i++) result[i] -= theMean;
	  };

	  exports.standardize = function standardize(values, standardDev, inPlace) {
	    if (typeof standardDev === 'undefined') standardDev = exports.standardDeviation(values);
	    if (typeof inPlace === 'undefined') inPlace = false;
	    var l = values.length;
	    var result = inPlace ? values : new Array(l);

	    for (var i = 0; i < l; i++) result[i] = values[i] / standardDev;

	    return result;
	  };

	  exports.cumulativeSum = function cumulativeSum(array) {
	    var l = array.length;
	    var result = new Array(l);
	    result[0] = array[0];

	    for (var i = 1; i < l; i++) result[i] = result[i - 1] + array[i];

	    return result;
	  };
	});
	var array_1$1 = array$1.sum;
	var array_2$1 = array$1.max;
	var array_3$1 = array$1.min;
	var array_4$1 = array$1.minMax;
	var array_5$1 = array$1.arithmeticMean;
	var array_6$1 = array$1.mean;
	var array_7$1 = array$1.geometricMean;
	var array_8$1 = array$1.logMean;
	var array_9$1 = array$1.grandMean;
	var array_10$1 = array$1.truncatedMean;
	var array_11$1 = array$1.harmonicMean;
	var array_12$1 = array$1.contraHarmonicMean;
	var array_13$1 = array$1.median;
	var array_14$1 = array$1.variance;
	var array_15$1 = array$1.standardDeviation;
	var array_16$1 = array$1.standardError;
	var array_17$1 = array$1.robustMeanAndStdev;
	var array_18$1 = array$1.quartiles;
	var array_19$1 = array$1.pooledStandardDeviation;
	var array_20$1 = array$1.pooledVariance;
	var array_21$1 = array$1.mode;
	var array_22$1 = array$1.covariance;
	var array_23$1 = array$1.skewness;
	var array_24$1 = array$1.kurtosis;
	var array_25$1 = array$1.entropy;
	var array_26$1 = array$1.weightedMean;
	var array_27$1 = array$1.weightedStandardDeviation;
	var array_28$1 = array$1.weightedVariance;
	var array_29$1 = array$1.center;
	var array_30$1 = array$1.standardize;
	var array_31 = array$1.cumulativeSum;

	var matrix = createCommonjsModule(function (module, exports) {

	  function compareNumbers(a, b) {
	    return a - b;
	  }

	  exports.max = function max(matrix) {
	    var max = -Infinity;

	    for (var i = 0; i < matrix.length; i++) {
	      for (var j = 0; j < matrix[i].length; j++) {
	        if (matrix[i][j] > max) max = matrix[i][j];
	      }
	    }

	    return max;
	  };

	  exports.min = function min(matrix) {
	    var min = Infinity;

	    for (var i = 0; i < matrix.length; i++) {
	      for (var j = 0; j < matrix[i].length; j++) {
	        if (matrix[i][j] < min) min = matrix[i][j];
	      }
	    }

	    return min;
	  };

	  exports.minMax = function minMax(matrix) {
	    var min = Infinity;
	    var max = -Infinity;

	    for (var i = 0; i < matrix.length; i++) {
	      for (var j = 0; j < matrix[i].length; j++) {
	        if (matrix[i][j] < min) min = matrix[i][j];
	        if (matrix[i][j] > max) max = matrix[i][j];
	      }
	    }

	    return {
	      min: min,
	      max: max
	    };
	  };

	  exports.entropy = function entropy(matrix, eps) {
	    if (typeof eps === 'undefined') {
	      eps = 0;
	    }

	    var sum = 0,
	        l1 = matrix.length,
	        l2 = matrix[0].length;

	    for (var i = 0; i < l1; i++) {
	      for (var j = 0; j < l2; j++) {
	        sum += matrix[i][j] * Math.log(matrix[i][j] + eps);
	      }
	    }

	    return -sum;
	  };

	  exports.mean = function mean(matrix, dimension) {
	    if (typeof dimension === 'undefined') {
	      dimension = 0;
	    }

	    var rows = matrix.length,
	        cols = matrix[0].length,
	        theMean,
	        N,
	        i,
	        j;

	    if (dimension === -1) {
	      theMean = [0];
	      N = rows * cols;

	      for (i = 0; i < rows; i++) {
	        for (j = 0; j < cols; j++) {
	          theMean[0] += matrix[i][j];
	        }
	      }

	      theMean[0] /= N;
	    } else if (dimension === 0) {
	      theMean = new Array(cols);
	      N = rows;

	      for (j = 0; j < cols; j++) {
	        theMean[j] = 0;

	        for (i = 0; i < rows; i++) {
	          theMean[j] += matrix[i][j];
	        }

	        theMean[j] /= N;
	      }
	    } else if (dimension === 1) {
	      theMean = new Array(rows);
	      N = cols;

	      for (j = 0; j < rows; j++) {
	        theMean[j] = 0;

	        for (i = 0; i < cols; i++) {
	          theMean[j] += matrix[j][i];
	        }

	        theMean[j] /= N;
	      }
	    } else {
	      throw new Error('Invalid dimension');
	    }

	    return theMean;
	  };

	  exports.sum = function sum(matrix, dimension) {
	    if (typeof dimension === 'undefined') {
	      dimension = 0;
	    }

	    var rows = matrix.length,
	        cols = matrix[0].length,
	        theSum,
	        i,
	        j;

	    if (dimension === -1) {
	      theSum = [0];

	      for (i = 0; i < rows; i++) {
	        for (j = 0; j < cols; j++) {
	          theSum[0] += matrix[i][j];
	        }
	      }
	    } else if (dimension === 0) {
	      theSum = new Array(cols);

	      for (j = 0; j < cols; j++) {
	        theSum[j] = 0;

	        for (i = 0; i < rows; i++) {
	          theSum[j] += matrix[i][j];
	        }
	      }
	    } else if (dimension === 1) {
	      theSum = new Array(rows);

	      for (j = 0; j < rows; j++) {
	        theSum[j] = 0;

	        for (i = 0; i < cols; i++) {
	          theSum[j] += matrix[j][i];
	        }
	      }
	    } else {
	      throw new Error('Invalid dimension');
	    }

	    return theSum;
	  };

	  exports.product = function product(matrix, dimension) {
	    if (typeof dimension === 'undefined') {
	      dimension = 0;
	    }

	    var rows = matrix.length,
	        cols = matrix[0].length,
	        theProduct,
	        i,
	        j;

	    if (dimension === -1) {
	      theProduct = [1];

	      for (i = 0; i < rows; i++) {
	        for (j = 0; j < cols; j++) {
	          theProduct[0] *= matrix[i][j];
	        }
	      }
	    } else if (dimension === 0) {
	      theProduct = new Array(cols);

	      for (j = 0; j < cols; j++) {
	        theProduct[j] = 1;

	        for (i = 0; i < rows; i++) {
	          theProduct[j] *= matrix[i][j];
	        }
	      }
	    } else if (dimension === 1) {
	      theProduct = new Array(rows);

	      for (j = 0; j < rows; j++) {
	        theProduct[j] = 1;

	        for (i = 0; i < cols; i++) {
	          theProduct[j] *= matrix[j][i];
	        }
	      }
	    } else {
	      throw new Error('Invalid dimension');
	    }

	    return theProduct;
	  };

	  exports.standardDeviation = function standardDeviation(matrix, means, unbiased) {
	    var vari = exports.variance(matrix, means, unbiased),
	        l = vari.length;

	    for (var i = 0; i < l; i++) {
	      vari[i] = Math.sqrt(vari[i]);
	    }

	    return vari;
	  };

	  exports.variance = function variance(matrix, means, unbiased) {
	    if (typeof unbiased === 'undefined') {
	      unbiased = true;
	    }

	    means = means || exports.mean(matrix);
	    var rows = matrix.length;
	    if (rows === 0) return [];
	    var cols = matrix[0].length;
	    var vari = new Array(cols);

	    for (var j = 0; j < cols; j++) {
	      var sum1 = 0,
	          sum2 = 0,
	          x = 0;

	      for (var i = 0; i < rows; i++) {
	        x = matrix[i][j] - means[j];
	        sum1 += x;
	        sum2 += x * x;
	      }

	      if (unbiased) {
	        vari[j] = (sum2 - sum1 * sum1 / rows) / (rows - 1);
	      } else {
	        vari[j] = (sum2 - sum1 * sum1 / rows) / rows;
	      }
	    }

	    return vari;
	  };

	  exports.median = function median(matrix) {
	    var rows = matrix.length,
	        cols = matrix[0].length;
	    var medians = new Array(cols);

	    for (var i = 0; i < cols; i++) {
	      var data = new Array(rows);

	      for (var j = 0; j < rows; j++) {
	        data[j] = matrix[j][i];
	      }

	      data.sort(compareNumbers);
	      var N = data.length;

	      if (N % 2 === 0) {
	        medians[i] = (data[N / 2] + data[N / 2 - 1]) * 0.5;
	      } else {
	        medians[i] = data[Math.floor(N / 2)];
	      }
	    }

	    return medians;
	  };

	  exports.mode = function mode(matrix) {
	    var rows = matrix.length,
	        cols = matrix[0].length,
	        modes = new Array(cols),
	        i,
	        j;

	    for (i = 0; i < cols; i++) {
	      var itemCount = new Array(rows);

	      for (var k = 0; k < rows; k++) {
	        itemCount[k] = 0;
	      }

	      var itemArray = new Array(rows);
	      var count = 0;

	      for (j = 0; j < rows; j++) {
	        var index = itemArray.indexOf(matrix[j][i]);

	        if (index >= 0) {
	          itemCount[index]++;
	        } else {
	          itemArray[count] = matrix[j][i];
	          itemCount[count] = 1;
	          count++;
	        }
	      }

	      var maxValue = 0,
	          maxIndex = 0;

	      for (j = 0; j < count; j++) {
	        if (itemCount[j] > maxValue) {
	          maxValue = itemCount[j];
	          maxIndex = j;
	        }
	      }

	      modes[i] = itemArray[maxIndex];
	    }

	    return modes;
	  };

	  exports.skewness = function skewness(matrix, unbiased) {
	    if (typeof unbiased === 'undefined') unbiased = true;
	    var means = exports.mean(matrix);
	    var n = matrix.length,
	        l = means.length;
	    var skew = new Array(l);

	    for (var j = 0; j < l; j++) {
	      var s2 = 0,
	          s3 = 0;

	      for (var i = 0; i < n; i++) {
	        var dev = matrix[i][j] - means[j];
	        s2 += dev * dev;
	        s3 += dev * dev * dev;
	      }

	      var m2 = s2 / n;
	      var m3 = s3 / n;
	      var g = m3 / Math.pow(m2, 3 / 2);

	      if (unbiased) {
	        var a = Math.sqrt(n * (n - 1));
	        var b = n - 2;
	        skew[j] = a / b * g;
	      } else {
	        skew[j] = g;
	      }
	    }

	    return skew;
	  };

	  exports.kurtosis = function kurtosis(matrix, unbiased) {
	    if (typeof unbiased === 'undefined') unbiased = true;
	    var means = exports.mean(matrix);
	    var n = matrix.length,
	        m = matrix[0].length;
	    var kurt = new Array(m);

	    for (var j = 0; j < m; j++) {
	      var s2 = 0,
	          s4 = 0;

	      for (var i = 0; i < n; i++) {
	        var dev = matrix[i][j] - means[j];
	        s2 += dev * dev;
	        s4 += dev * dev * dev * dev;
	      }

	      var m2 = s2 / n;
	      var m4 = s4 / n;

	      if (unbiased) {
	        var v = s2 / (n - 1);
	        var a = n * (n + 1) / ((n - 1) * (n - 2) * (n - 3));
	        var b = s4 / (v * v);
	        var c = (n - 1) * (n - 1) / ((n - 2) * (n - 3));
	        kurt[j] = a * b - 3 * c;
	      } else {
	        kurt[j] = m4 / (m2 * m2) - 3;
	      }
	    }

	    return kurt;
	  };

	  exports.standardError = function standardError(matrix) {
	    var samples = matrix.length;
	    var standardDeviations = exports.standardDeviation(matrix);
	    var l = standardDeviations.length;
	    var standardErrors = new Array(l);
	    var sqrtN = Math.sqrt(samples);

	    for (var i = 0; i < l; i++) {
	      standardErrors[i] = standardDeviations[i] / sqrtN;
	    }

	    return standardErrors;
	  };

	  exports.covariance = function covariance(matrix, dimension) {
	    return exports.scatter(matrix, undefined, dimension);
	  };

	  exports.scatter = function scatter(matrix, divisor, dimension) {
	    if (typeof dimension === 'undefined') {
	      dimension = 0;
	    }

	    if (typeof divisor === 'undefined') {
	      if (dimension === 0) {
	        divisor = matrix.length - 1;
	      } else if (dimension === 1) {
	        divisor = matrix[0].length - 1;
	      }
	    }

	    var means = exports.mean(matrix, dimension);
	    var rows = matrix.length;

	    if (rows === 0) {
	      return [[]];
	    }

	    var cols = matrix[0].length,
	        cov,
	        i,
	        j,
	        s,
	        k;

	    if (dimension === 0) {
	      cov = new Array(cols);

	      for (i = 0; i < cols; i++) {
	        cov[i] = new Array(cols);
	      }

	      for (i = 0; i < cols; i++) {
	        for (j = i; j < cols; j++) {
	          s = 0;

	          for (k = 0; k < rows; k++) {
	            s += (matrix[k][j] - means[j]) * (matrix[k][i] - means[i]);
	          }

	          s /= divisor;
	          cov[i][j] = s;
	          cov[j][i] = s;
	        }
	      }
	    } else if (dimension === 1) {
	      cov = new Array(rows);

	      for (i = 0; i < rows; i++) {
	        cov[i] = new Array(rows);
	      }

	      for (i = 0; i < rows; i++) {
	        for (j = i; j < rows; j++) {
	          s = 0;

	          for (k = 0; k < cols; k++) {
	            s += (matrix[j][k] - means[j]) * (matrix[i][k] - means[i]);
	          }

	          s /= divisor;
	          cov[i][j] = s;
	          cov[j][i] = s;
	        }
	      }
	    } else {
	      throw new Error('Invalid dimension');
	    }

	    return cov;
	  };

	  exports.correlation = function correlation(matrix) {
	    var means = exports.mean(matrix),
	        standardDeviations = exports.standardDeviation(matrix, true, means),
	        scores = exports.zScores(matrix, means, standardDeviations),
	        rows = matrix.length,
	        cols = matrix[0].length,
	        i,
	        j;
	    var cor = new Array(cols);

	    for (i = 0; i < cols; i++) {
	      cor[i] = new Array(cols);
	    }

	    for (i = 0; i < cols; i++) {
	      for (j = i; j < cols; j++) {
	        var c = 0;

	        for (var k = 0, l = scores.length; k < l; k++) {
	          c += scores[k][j] * scores[k][i];
	        }

	        c /= rows - 1;
	        cor[i][j] = c;
	        cor[j][i] = c;
	      }
	    }

	    return cor;
	  };

	  exports.zScores = function zScores(matrix, means, standardDeviations) {
	    means = means || exports.mean(matrix);
	    if (typeof standardDeviations === 'undefined') standardDeviations = exports.standardDeviation(matrix, true, means);
	    return exports.standardize(exports.center(matrix, means, false), standardDeviations, true);
	  };

	  exports.center = function center(matrix, means, inPlace) {
	    means = means || exports.mean(matrix);
	    var result = matrix,
	        l = matrix.length,
	        i,
	        j,
	        jj;

	    if (!inPlace) {
	      result = new Array(l);

	      for (i = 0; i < l; i++) {
	        result[i] = new Array(matrix[i].length);
	      }
	    }

	    for (i = 0; i < l; i++) {
	      var row = result[i];

	      for (j = 0, jj = row.length; j < jj; j++) {
	        row[j] = matrix[i][j] - means[j];
	      }
	    }

	    return result;
	  };

	  exports.standardize = function standardize(matrix, standardDeviations, inPlace) {
	    if (typeof standardDeviations === 'undefined') standardDeviations = exports.standardDeviation(matrix);
	    var result = matrix,
	        l = matrix.length,
	        i,
	        j,
	        jj;

	    if (!inPlace) {
	      result = new Array(l);

	      for (i = 0; i < l; i++) {
	        result[i] = new Array(matrix[i].length);
	      }
	    }

	    for (i = 0; i < l; i++) {
	      var resultRow = result[i];
	      var sourceRow = matrix[i];

	      for (j = 0, jj = resultRow.length; j < jj; j++) {
	        if (standardDeviations[j] !== 0 && !isNaN(standardDeviations[j])) {
	          resultRow[j] = sourceRow[j] / standardDeviations[j];
	        }
	      }
	    }

	    return result;
	  };

	  exports.weightedVariance = function weightedVariance(matrix, weights) {
	    var means = exports.mean(matrix);
	    var rows = matrix.length;
	    if (rows === 0) return [];
	    var cols = matrix[0].length;
	    var vari = new Array(cols);

	    for (var j = 0; j < cols; j++) {
	      var sum = 0;
	      var a = 0,
	          b = 0;

	      for (var i = 0; i < rows; i++) {
	        var z = matrix[i][j] - means[j];
	        var w = weights[i];
	        sum += w * (z * z);
	        b += w;
	        a += w * w;
	      }

	      vari[j] = sum * (b / (b * b - a));
	    }

	    return vari;
	  };

	  exports.weightedMean = function weightedMean(matrix, weights, dimension) {
	    if (typeof dimension === 'undefined') {
	      dimension = 0;
	    }

	    var rows = matrix.length;
	    if (rows === 0) return [];
	    var cols = matrix[0].length,
	        means,
	        i,
	        ii,
	        j,
	        w,
	        row;

	    if (dimension === 0) {
	      means = new Array(cols);

	      for (i = 0; i < cols; i++) {
	        means[i] = 0;
	      }

	      for (i = 0; i < rows; i++) {
	        row = matrix[i];
	        w = weights[i];

	        for (j = 0; j < cols; j++) {
	          means[j] += row[j] * w;
	        }
	      }
	    } else if (dimension === 1) {
	      means = new Array(rows);

	      for (i = 0; i < rows; i++) {
	        means[i] = 0;
	      }

	      for (j = 0; j < rows; j++) {
	        row = matrix[j];
	        w = weights[j];

	        for (i = 0; i < cols; i++) {
	          means[j] += row[i] * w;
	        }
	      }
	    } else {
	      throw new Error('Invalid dimension');
	    }

	    var weightSum = array$1.sum(weights);

	    if (weightSum !== 0) {
	      for (i = 0, ii = means.length; i < ii; i++) {
	        means[i] /= weightSum;
	      }
	    }

	    return means;
	  };

	  exports.weightedCovariance = function weightedCovariance(matrix, weights, means, dimension) {
	    dimension = dimension || 0;
	    means = means || exports.weightedMean(matrix, weights, dimension);
	    var s1 = 0,
	        s2 = 0;

	    for (var i = 0, ii = weights.length; i < ii; i++) {
	      s1 += weights[i];
	      s2 += weights[i] * weights[i];
	    }

	    var factor = s1 / (s1 * s1 - s2);
	    return exports.weightedScatter(matrix, weights, means, factor, dimension);
	  };

	  exports.weightedScatter = function weightedScatter(matrix, weights, means, factor, dimension) {
	    dimension = dimension || 0;
	    means = means || exports.weightedMean(matrix, weights, dimension);

	    if (typeof factor === 'undefined') {
	      factor = 1;
	    }

	    var rows = matrix.length;

	    if (rows === 0) {
	      return [[]];
	    }

	    var cols = matrix[0].length,
	        cov,
	        i,
	        j,
	        k,
	        s;

	    if (dimension === 0) {
	      cov = new Array(cols);

	      for (i = 0; i < cols; i++) {
	        cov[i] = new Array(cols);
	      }

	      for (i = 0; i < cols; i++) {
	        for (j = i; j < cols; j++) {
	          s = 0;

	          for (k = 0; k < rows; k++) {
	            s += weights[k] * (matrix[k][j] - means[j]) * (matrix[k][i] - means[i]);
	          }

	          cov[i][j] = s * factor;
	          cov[j][i] = s * factor;
	        }
	      }
	    } else if (dimension === 1) {
	      cov = new Array(rows);

	      for (i = 0; i < rows; i++) {
	        cov[i] = new Array(rows);
	      }

	      for (i = 0; i < rows; i++) {
	        for (j = i; j < rows; j++) {
	          s = 0;

	          for (k = 0; k < cols; k++) {
	            s += weights[k] * (matrix[j][k] - means[j]) * (matrix[i][k] - means[i]);
	          }

	          cov[i][j] = s * factor;
	          cov[j][i] = s * factor;
	        }
	      }
	    } else {
	      throw new Error('Invalid dimension');
	    }

	    return cov;
	  };
	});
	var matrix_1 = matrix.max;
	var matrix_2 = matrix.min;
	var matrix_3 = matrix.minMax;
	var matrix_4 = matrix.entropy;
	var matrix_5 = matrix.mean;
	var matrix_6 = matrix.sum;
	var matrix_7 = matrix.product;
	var matrix_8 = matrix.standardDeviation;
	var matrix_9 = matrix.variance;
	var matrix_10 = matrix.median;
	var matrix_11 = matrix.mode;
	var matrix_12 = matrix.skewness;
	var matrix_13 = matrix.kurtosis;
	var matrix_14 = matrix.standardError;
	var matrix_15 = matrix.covariance;
	var matrix_16 = matrix.scatter;
	var matrix_17 = matrix.correlation;
	var matrix_18 = matrix.zScores;
	var matrix_19 = matrix.center;
	var matrix_20 = matrix.standardize;
	var matrix_21 = matrix.weightedVariance;
	var matrix_22 = matrix.weightedMean;
	var matrix_23 = matrix.weightedCovariance;
	var matrix_24 = matrix.weightedScatter;

	var array$2 = array$1;
	var matrix$1 = matrix;
	var mlStat = {
	  array: array$2,
	  matrix: matrix$1
	};

	const Stat = mlStat.array;
	/**
	 * Function that returns an array of points given 1D array as follows:
	 *
	 * [x1, y1, .. , x2, y2, ..]
	 *
	 * And receive the number of dimensions of each point.
	 * @param array
	 * @param dimensions
	 * @returns {Array} - Array of points.
	 */

	function coordArrayToPoints(array, dimensions) {
	  if (array.length % dimensions !== 0) {
	    throw new RangeError('Dimensions number must be accordance with the size of the array.');
	  }

	  var length = array.length / dimensions;
	  var pointsArr = new Array(length);
	  var k = 0;

	  for (var i = 0; i < array.length; i += dimensions) {
	    var point = new Array(dimensions);

	    for (var j = 0; j < dimensions; ++j) {
	      point[j] = array[i + j];
	    }

	    pointsArr[k] = point;
	    k++;
	  }

	  return pointsArr;
	}
	/**
	 * Function that given an array as follows:
	 * [x1, y1, .. , x2, y2, ..]
	 *
	 * Returns an array as follows:
	 * [[x1, x2, ..], [y1, y2, ..], [ .. ]]
	 *
	 * And receives the number of dimensions of each coordinate.
	 * @param array
	 * @param dimensions
	 * @returns {Array} - Matrix of coordinates
	 */


	function coordArrayToCoordMatrix(array, dimensions) {
	  if (array.length % dimensions !== 0) {
	    throw new RangeError('Dimensions number must be accordance with the size of the array.');
	  }

	  var coordinatesArray = new Array(dimensions);
	  var points = array.length / dimensions;

	  for (var i = 0; i < coordinatesArray.length; i++) {
	    coordinatesArray[i] = new Array(points);
	  }

	  for (i = 0; i < array.length; i += dimensions) {
	    for (var j = 0; j < dimensions; ++j) {
	      var currentPoint = Math.floor(i / dimensions);
	      coordinatesArray[j][currentPoint] = array[i + j];
	    }
	  }

	  return coordinatesArray;
	}
	/**
	 * Function that receives a coordinate matrix as follows:
	 * [[x1, x2, ..], [y1, y2, ..], [ .. ]]
	 *
	 * Returns an array of coordinates as follows:
	 * [x1, y1, .. , x2, y2, ..]
	 *
	 * @param coordMatrix
	 * @returns {Array}
	 */


	function coordMatrixToCoordArray(coordMatrix) {
	  var coodinatesArray = new Array(coordMatrix.length * coordMatrix[0].length);
	  var k = 0;

	  for (var i = 0; i < coordMatrix[0].length; ++i) {
	    for (var j = 0; j < coordMatrix.length; ++j) {
	      coodinatesArray[k] = coordMatrix[j][i];
	      ++k;
	    }
	  }

	  return coodinatesArray;
	}
	/**
	 * Tranpose a matrix, this method is for coordMatrixToPoints and
	 * pointsToCoordMatrix, that because only transposing the matrix
	 * you can change your representation.
	 *
	 * @param matrix
	 * @returns {Array}
	 */


	function transpose(matrix) {
	  var resultMatrix = new Array(matrix[0].length);

	  for (var i = 0; i < resultMatrix.length; ++i) {
	    resultMatrix[i] = new Array(matrix.length);
	  }

	  for (i = 0; i < matrix.length; ++i) {
	    for (var j = 0; j < matrix[0].length; ++j) {
	      resultMatrix[j][i] = matrix[i][j];
	    }
	  }

	  return resultMatrix;
	}
	/**
	 * Function that transform an array of points into a coordinates array
	 * as follows:
	 * [x1, y1, .. , x2, y2, ..]
	 *
	 * @param points
	 * @returns {Array}
	 */


	function pointsToCoordArray(points) {
	  var coodinatesArray = new Array(points.length * points[0].length);
	  var k = 0;

	  for (var i = 0; i < points.length; ++i) {
	    for (var j = 0; j < points[0].length; ++j) {
	      coodinatesArray[k] = points[i][j];
	      ++k;
	    }
	  }

	  return coodinatesArray;
	}
	/**
	 * Apply the dot product between the smaller vector and a subsets of the
	 * largest one.
	 *
	 * @param firstVector
	 * @param secondVector
	 * @returns {Array} each dot product of size of the difference between the
	 *                  larger and the smallest one.
	 */


	function applyDotProduct(firstVector, secondVector) {
	  var largestVector, smallestVector;

	  if (firstVector.length <= secondVector.length) {
	    smallestVector = firstVector;
	    largestVector = secondVector;
	  } else {
	    smallestVector = secondVector;
	    largestVector = firstVector;
	  }

	  var difference = largestVector.length - smallestVector.length + 1;
	  var dotProductApplied = new Array(difference);

	  for (var i = 0; i < difference; ++i) {
	    var sum = 0;

	    for (var j = 0; j < smallestVector.length; ++j) {
	      sum += smallestVector[j] * largestVector[i + j];
	    }

	    dotProductApplied[i] = sum;
	  }

	  return dotProductApplied;
	}
	/**
	 * To scale the input array between the specified min and max values. The operation is performed inplace
	 * if the options.inplace is specified. If only one of the min or max parameters is specified, then the scaling
	 * will multiply the input array by min/min(input) or max/max(input)
	 * @param input
	 * @param options
	 * @returns {*}
	 */


	function scale(input, options) {
	  var y;

	  if (options.inPlace) {
	    y = input;
	  } else {
	    y = new Array(input.length);
	  }

	  const max = options.max;
	  const min = options.min;

	  if (typeof max === "number") {
	    if (typeof min === "number") {
	      var minMax = Stat.minMax(input);
	      var factor = (max - min) / (minMax.max - minMax.min);

	      for (var i = 0; i < y.length; i++) {
	        y[i] = (input[i] - minMax.min) * factor + min;
	      }
	    } else {
	      var currentMin = Stat.max(input);
	      var factor = max / currentMin;

	      for (var i = 0; i < y.length; i++) {
	        y[i] = input[i] * factor;
	      }
	    }
	  } else {
	    if (typeof min === "number") {
	      var currentMin = Stat.min(input);
	      var factor = min / currentMin;

	      for (var i = 0; i < y.length; i++) {
	        y[i] = input[i] * factor;
	      }
	    }
	  }

	  return y;
	}

	var ArrayUtils = {
	  coordArrayToPoints: coordArrayToPoints,
	  coordArrayToCoordMatrix: coordArrayToCoordMatrix,
	  coordMatrixToCoordArray: coordMatrixToCoordArray,
	  coordMatrixToPoints: transpose,
	  pointsToCoordArray: pointsToCoordArray,
	  pointsToCoordMatrix: transpose,
	  applyDotProduct: applyDotProduct,
	  scale: scale
	};

	/**
	 *
	 * Function that returns a Number array of equally spaced numberOfPoints
	 * containing a representation of intensities of the spectra arguments x
	 * and y.
	 *
	 * The options parameter contains an object in the following form:
	 * from: starting point
	 * to: last point
	 * numberOfPoints: number of points between from and to
	 * variant: "slot" or "smooth" - smooth is the default option
	 *
	 * The slot variant consist that each point in the new array is calculated
	 * averaging the existing points between the slot that belongs to the current
	 * value. The smooth variant is the same but takes the integral of the range
	 * of the slot and divide by the step size between two points in the new array.
	 *
	 * @param x - sorted increasing x values
	 * @param y
	 * @param options
	 * @returns {Array} new array with the equally spaced data.
	 *
	 */

	function getEquallySpacedData(x, y, options) {
	  if (x.length > 1 && x[0] > x[1]) {
	    x = x.slice().reverse();
	    y = y.slice().reverse();
	  }

	  var xLength = x.length;
	  if (xLength !== y.length) throw new RangeError("the x and y vector doesn't have the same size.");
	  if (options === undefined) options = {};
	  var from = options.from === undefined ? x[0] : options.from;

	  if (isNaN(from) || !isFinite(from)) {
	    throw new RangeError("'From' value must be a number");
	  }

	  var to = options.to === undefined ? x[x.length - 1] : options.to;

	  if (isNaN(to) || !isFinite(to)) {
	    throw new RangeError("'To' value must be a number");
	  }

	  var reverse = from > to;

	  if (reverse) {
	    var temp = from;
	    from = to;
	    to = temp;
	  }

	  var numberOfPoints = options.numberOfPoints === undefined ? 100 : options.numberOfPoints;

	  if (isNaN(numberOfPoints) || !isFinite(numberOfPoints)) {
	    throw new RangeError("'Number of points' value must be a number");
	  }

	  if (numberOfPoints < 1) throw new RangeError("the number of point must be higher than 1");
	  var algorithm = options.variant === "slot" ? "slot" : "smooth"; // default value: smooth

	  var output = algorithm === "slot" ? getEquallySpacedSlot(x, y, from, to, numberOfPoints) : getEquallySpacedSmooth(x, y, from, to, numberOfPoints);
	  return reverse ? output.reverse() : output;
	}
	/**
	 * function that retrieves the getEquallySpacedData with the variant "smooth"
	 *
	 * @param x
	 * @param y
	 * @param from - Initial point
	 * @param to - Final point
	 * @param numberOfPoints
	 * @returns {Array} - Array of y's equally spaced with the variant "smooth"
	 */


	function getEquallySpacedSmooth(x, y, from, to, numberOfPoints) {
	  var xLength = x.length;
	  var step = (to - from) / (numberOfPoints - 1);
	  var halfStep = step / 2;
	  var start = from - halfStep;
	  var output = new Array(numberOfPoints);
	  var initialOriginalStep = x[1] - x[0];
	  var lastOriginalStep = x[x.length - 1] - x[x.length - 2]; // Init main variables

	  var min = start;
	  var max = start + step;
	  var previousX = Number.MIN_VALUE;
	  var previousY = 0;
	  var nextX = x[0] - initialOriginalStep;
	  var nextY = 0;
	  var currentValue = 0;
	  var slope = 0;
	  var intercept = 0;
	  var sumAtMin = 0;
	  var sumAtMax = 0;
	  var i = 0; // index of input

	  var j = 0; // index of output

	  function getSlope(x0, y0, x1, y1) {
	    return (y1 - y0) / (x1 - x0);
	  }

	  main: while (true) {
	    while (nextX - max >= 0) {
	      // no overlap with original point, just consume current value
	      var add = integral(0, max - previousX, slope, previousY);
	      sumAtMax = currentValue + add;
	      output[j] = (sumAtMax - sumAtMin) / step;
	      j++;
	      if (j === numberOfPoints) break main;
	      min = max;
	      max += step;
	      sumAtMin = sumAtMax;
	    }

	    if (previousX <= min && min <= nextX) {
	      add = integral(0, min - previousX, slope, previousY);
	      sumAtMin = currentValue + add;
	    }

	    currentValue += integral(previousX, nextX, slope, intercept);
	    previousX = nextX;
	    previousY = nextY;

	    if (i < xLength) {
	      nextX = x[i];
	      nextY = y[i];
	      i++;
	    } else if (i === xLength) {
	      nextX += lastOriginalStep;
	      nextY = 0;
	    } // updating parameters


	    slope = getSlope(previousX, previousY, nextX, nextY);
	    intercept = -slope * previousX + previousY;
	  }

	  return output;
	}
	/**
	 * function that retrieves the getEquallySpacedData with the variant "slot"
	 *
	 * @param x
	 * @param y
	 * @param from - Initial point
	 * @param to - Final point
	 * @param numberOfPoints
	 * @returns {Array} - Array of y's equally spaced with the variant "slot"
	 */


	function getEquallySpacedSlot(x, y, from, to, numberOfPoints) {
	  var xLength = x.length;
	  var step = (to - from) / (numberOfPoints - 1);
	  var halfStep = step / 2;
	  var lastStep = x[x.length - 1] - x[x.length - 2];
	  var start = from - halfStep;
	  var output = new Array(numberOfPoints); // Init main variables

	  var min = start;
	  var max = start + step;
	  var previousX = -Number.MAX_VALUE;
	  var previousY = 0;
	  var nextX = x[0];
	  var nextY = y[0];
	  var frontOutsideSpectra = 0;
	  var backOutsideSpectra = true;
	  var currentValue = 0; // for slot algorithm

	  var currentPoints = 0;
	  var i = 1; // index of input

	  var j = 0; // index of output

	  main: while (true) {
	    if (previousX >= nextX) throw new Error('x must be an increasing serie');

	    while (previousX - max > 0) {
	      // no overlap with original point, just consume current value
	      if (backOutsideSpectra) {
	        currentPoints++;
	        backOutsideSpectra = false;
	      }

	      output[j] = currentPoints <= 0 ? 0 : currentValue / currentPoints;
	      j++;
	      if (j === numberOfPoints) break main;
	      min = max;
	      max += step;
	      currentValue = 0;
	      currentPoints = 0;
	    }

	    if (previousX > min) {
	      currentValue += previousY;
	      currentPoints++;
	    }

	    if (previousX === -Number.MAX_VALUE || frontOutsideSpectra > 1) currentPoints--;
	    previousX = nextX;
	    previousY = nextY;

	    if (i < xLength) {
	      nextX = x[i];
	      nextY = y[i];
	      i++;
	    } else {
	      nextX += lastStep;
	      nextY = 0;
	      frontOutsideSpectra++;
	    }
	  }

	  return output;
	}
	/**
	 * Function that calculates the integral of the line between two
	 * x-coordinates, given the slope and intercept of the line.
	 *
	 * @param x0
	 * @param x1
	 * @param slope
	 * @param intercept
	 * @returns {number} integral value.
	 */


	function integral(x0, x1, slope, intercept) {
	  return 0.5 * slope * x1 * x1 + intercept * x1 - (0.5 * slope * x0 * x0 + intercept * x0);
	}

	var getEquallySpacedData_1 = getEquallySpacedData;
	var integral_1 = integral;
	var getEquallySpaced = {
	  getEquallySpacedData: getEquallySpacedData_1,
	  integral: integral_1
	};

	var SNV_1 = SNV;
	var Stat$1 = mlStat.array;
	/**
	 * Function that applies the standard normal variate (SNV) to an array of values.
	 *
	 * @param data - Array of values.
	 * @returns {Array} - applied the SNV.
	 */

	function SNV(data) {
	  var mean = Stat$1.mean(data);
	  var std = Stat$1.standardDeviation(data);
	  var result = data.slice();

	  for (var i = 0; i < data.length; i++) {
	    result[i] = (result[i] - mean) / std;
	  }

	  return result;
	}

	var snv = {
	  SNV: SNV_1
	};

	var src$2 = createCommonjsModule(function (module, exports) {
	  module.exports = exports = ArrayUtils;
	  exports.getEquallySpacedData = getEquallySpaced.getEquallySpacedData;
	  exports.SNV = snv.SNV;
	});
	var src_1 = src$2.getEquallySpacedData;
	var src_2 = src$2.SNV;

	/**
	 * @private
	 * Check that a row index is not out of bounds
	 * @param {Matrix} matrix
	 * @param {number} index
	 * @param {boolean} [outer]
	 */


	var checkRowIndex = function checkRowIndex(matrix, index, outer) {
	  var max = outer ? matrix.rows : matrix.rows - 1;

	  if (index < 0 || index > max) {
	    throw new RangeError('Row index out of range');
	  }
	};
	/**
	 * @private
	 * Check that a column index is not out of bounds
	 * @param {Matrix} matrix
	 * @param {number} index
	 * @param {boolean} [outer]
	 */


	var checkColumnIndex = function checkColumnIndex(matrix, index, outer) {
	  var max = outer ? matrix.columns : matrix.columns - 1;

	  if (index < 0 || index > max) {
	    throw new RangeError('Column index out of range');
	  }
	};
	/**
	 * @private
	 * Check that the provided vector is an array with the right length
	 * @param {Matrix} matrix
	 * @param {Array|Matrix} vector
	 * @return {Array}
	 * @throws {RangeError}
	 */


	var checkRowVector = function checkRowVector(matrix, vector) {
	  if (vector.to1DArray) {
	    vector = vector.to1DArray();
	  }

	  if (vector.length !== matrix.columns) {
	    throw new RangeError('vector size must be the same as the number of columns');
	  }

	  return vector;
	};
	/**
	 * @private
	 * Check that the provided vector is an array with the right length
	 * @param {Matrix} matrix
	 * @param {Array|Matrix} vector
	 * @return {Array}
	 * @throws {RangeError}
	 */


	var checkColumnVector = function checkColumnVector(matrix, vector) {
	  if (vector.to1DArray) {
	    vector = vector.to1DArray();
	  }

	  if (vector.length !== matrix.rows) {
	    throw new RangeError('vector size must be the same as the number of rows');
	  }

	  return vector;
	};

	var checkIndices = function checkIndices(matrix, rowIndices, columnIndices) {
	  var rowOut = rowIndices.some(r => {
	    return r < 0 || r >= matrix.rows;
	  });
	  var columnOut = columnIndices.some(c => {
	    return c < 0 || c >= matrix.columns;
	  });

	  if (rowOut || columnOut) {
	    throw new RangeError('Indices are out of range');
	  }

	  if (typeof rowIndices !== 'object' || typeof columnIndices !== 'object') {
	    throw new TypeError('Unexpected type for row/column indices');
	  }

	  if (!Array.isArray(rowIndices)) rowIndices = Array.from(rowIndices);
	  if (!Array.isArray(columnIndices)) rowIndices = Array.from(columnIndices);
	  return {
	    row: rowIndices,
	    column: columnIndices
	  };
	};

	var checkRange = function checkRange(matrix, startRow, endRow, startColumn, endColumn) {
	  if (arguments.length !== 5) throw new TypeError('Invalid argument type');
	  var notAllNumbers = Array.from(arguments).slice(1).some(function (arg) {
	    return typeof arg !== 'number';
	  });
	  if (notAllNumbers) throw new TypeError('Invalid argument type');

	  if (startRow > endRow || startColumn > endColumn || startRow < 0 || startRow >= matrix.rows || endRow < 0 || endRow >= matrix.rows || startColumn < 0 || startColumn >= matrix.columns || endColumn < 0 || endColumn >= matrix.columns) {
	    throw new RangeError('Submatrix indices are out of range');
	  }
	};

	var getRange = function getRange(from, to) {
	  var arr = new Array(to - from + 1);

	  for (var i = 0; i < arr.length; i++) {
	    arr[i] = from + i;
	  }

	  return arr;
	};

	var sumByRow = function sumByRow(matrix) {
	  var sum = matrix$2.Matrix.zeros(matrix.rows, 1);

	  for (var i = 0; i < matrix.rows; ++i) {
	    for (var j = 0; j < matrix.columns; ++j) {
	      sum.set(i, 0, sum.get(i, 0) + matrix.get(i, j));
	    }
	  }

	  return sum;
	};

	var sumByColumn = function sumByColumn(matrix) {
	  var sum = matrix$2.Matrix.zeros(1, matrix.columns);

	  for (var i = 0; i < matrix.rows; ++i) {
	    for (var j = 0; j < matrix.columns; ++j) {
	      sum.set(0, j, sum.get(0, j) + matrix.get(i, j));
	    }
	  }

	  return sum;
	};

	var sumAll = function sumAll(matrix) {
	  var v = 0;

	  for (var i = 0; i < matrix.rows; i++) {
	    for (var j = 0; j < matrix.columns; j++) {
	      v += matrix.get(i, j);
	    }
	  }

	  return v;
	};

	var util$1 = {
	  checkRowIndex: checkRowIndex,
	  checkColumnIndex: checkColumnIndex,
	  checkRowVector: checkRowVector,
	  checkColumnVector: checkColumnVector,
	  checkIndices: checkIndices,
	  checkRange: checkRange,
	  getRange: getRange,
	  sumByRow: sumByRow,
	  sumByColumn: sumByColumn,
	  sumAll: sumAll
	};

	class BaseView extends abstractMatrix_1() {
	  constructor(matrix, rows, columns) {
	    super();
	    this.matrix = matrix;
	    this.rows = rows;
	    this.columns = columns;
	  }

	  static get [Symbol.species]() {
	    return matrix$2.Matrix;
	  }

	}

	var base = BaseView;

	class MatrixTransposeView extends base {
	  constructor(matrix) {
	    super(matrix, matrix.columns, matrix.rows);
	  }

	  set(rowIndex, columnIndex, value) {
	    this.matrix.set(columnIndex, rowIndex, value);
	    return this;
	  }

	  get(rowIndex, columnIndex) {
	    return this.matrix.get(columnIndex, rowIndex);
	  }

	}

	var transpose$1 = MatrixTransposeView;

	class MatrixRowView extends base {
	  constructor(matrix, row) {
	    super(matrix, 1, matrix.columns);
	    this.row = row;
	  }

	  set(rowIndex, columnIndex, value) {
	    this.matrix.set(this.row, columnIndex, value);
	    return this;
	  }

	  get(rowIndex, columnIndex) {
	    return this.matrix.get(this.row, columnIndex);
	  }

	}

	var row = MatrixRowView;

	class MatrixSubView extends base {
	  constructor(matrix, startRow, endRow, startColumn, endColumn) {
	    util$1.checkRange(matrix, startRow, endRow, startColumn, endColumn);
	    super(matrix, endRow - startRow + 1, endColumn - startColumn + 1);
	    this.startRow = startRow;
	    this.startColumn = startColumn;
	  }

	  set(rowIndex, columnIndex, value) {
	    this.matrix.set(this.startRow + rowIndex, this.startColumn + columnIndex, value);
	    return this;
	  }

	  get(rowIndex, columnIndex) {
	    return this.matrix.get(this.startRow + rowIndex, this.startColumn + columnIndex);
	  }

	}

	var sub = MatrixSubView;

	class MatrixSelectionView extends base {
	  constructor(matrix, rowIndices, columnIndices) {
	    var indices = util$1.checkIndices(matrix, rowIndices, columnIndices);
	    super(matrix, indices.row.length, indices.column.length);
	    this.rowIndices = indices.row;
	    this.columnIndices = indices.column;
	  }

	  set(rowIndex, columnIndex, value) {
	    this.matrix.set(this.rowIndices[rowIndex], this.columnIndices[columnIndex], value);
	    return this;
	  }

	  get(rowIndex, columnIndex) {
	    return this.matrix.get(this.rowIndices[rowIndex], this.columnIndices[columnIndex]);
	  }

	}

	var selection = MatrixSelectionView;

	class MatrixColumnView extends base {
	  constructor(matrix, column) {
	    super(matrix, matrix.rows, 1);
	    this.column = column;
	  }

	  set(rowIndex, columnIndex, value) {
	    this.matrix.set(rowIndex, this.column, value);
	    return this;
	  }

	  get(rowIndex) {
	    return this.matrix.get(rowIndex, this.column);
	  }

	}

	var column = MatrixColumnView;

	class MatrixFlipRowView extends base {
	  constructor(matrix) {
	    super(matrix, matrix.rows, matrix.columns);
	  }

	  set(rowIndex, columnIndex, value) {
	    this.matrix.set(this.rows - rowIndex - 1, columnIndex, value);
	    return this;
	  }

	  get(rowIndex, columnIndex) {
	    return this.matrix.get(this.rows - rowIndex - 1, columnIndex);
	  }

	}

	var flipRow = MatrixFlipRowView;

	class MatrixFlipColumnView extends base {
	  constructor(matrix) {
	    super(matrix, matrix.rows, matrix.columns);
	  }

	  set(rowIndex, columnIndex, value) {
	    this.matrix.set(rowIndex, this.columns - columnIndex - 1, value);
	    return this;
	  }

	  get(rowIndex, columnIndex) {
	    return this.matrix.get(rowIndex, this.columns - columnIndex - 1);
	  }

	}

	var flipColumn = MatrixFlipColumnView;

	var abstractMatrix_1 = abstractMatrix;

	function abstractMatrix(superCtor) {
	  if (superCtor === undefined) superCtor = Object;
	  /**
	   * Real matrix
	   * @class Matrix
	   * @param {number|Array|Matrix} nRows - Number of rows of the new matrix,
	   * 2D array containing the data or Matrix instance to clone
	   * @param {number} [nColumns] - Number of columns of the new matrix
	   */

	  class Matrix extends superCtor {
	    static get [Symbol.species]() {
	      return this;
	    }
	    /**
	     * Constructs a Matrix with the chosen dimensions from a 1D array
	     * @param {number} newRows - Number of rows
	     * @param {number} newColumns - Number of columns
	     * @param {Array} newData - A 1D array containing data for the matrix
	     * @return {Matrix} - The new matrix
	     */


	    static from1DArray(newRows, newColumns, newData) {
	      var length = newRows * newColumns;

	      if (length !== newData.length) {
	        throw new RangeError('Data length does not match given dimensions');
	      }

	      var newMatrix = new this(newRows, newColumns);

	      for (var row = 0; row < newRows; row++) {
	        for (var column = 0; column < newColumns; column++) {
	          newMatrix.set(row, column, newData[row * newColumns + column]);
	        }
	      }

	      return newMatrix;
	    }
	    /**
	     * Creates a row vector, a matrix with only one row.
	     * @param {Array} newData - A 1D array containing data for the vector
	     * @return {Matrix} - The new matrix
	     */


	    static rowVector(newData) {
	      var vector = new this(1, newData.length);

	      for (var i = 0; i < newData.length; i++) {
	        vector.set(0, i, newData[i]);
	      }

	      return vector;
	    }
	    /**
	     * Creates a column vector, a matrix with only one column.
	     * @param {Array} newData - A 1D array containing data for the vector
	     * @return {Matrix} - The new matrix
	     */


	    static columnVector(newData) {
	      var vector = new this(newData.length, 1);

	      for (var i = 0; i < newData.length; i++) {
	        vector.set(i, 0, newData[i]);
	      }

	      return vector;
	    }
	    /**
	     * Creates an empty matrix with the given dimensions. Values will be undefined. Same as using new Matrix(rows, columns).
	     * @param {number} rows - Number of rows
	     * @param {number} columns - Number of columns
	     * @return {Matrix} - The new matrix
	     */


	    static empty(rows, columns) {
	      return new this(rows, columns);
	    }
	    /**
	     * Creates a matrix with the given dimensions. Values will be set to zero.
	     * @param {number} rows - Number of rows
	     * @param {number} columns - Number of columns
	     * @return {Matrix} - The new matrix
	     */


	    static zeros(rows, columns) {
	      return this.empty(rows, columns).fill(0);
	    }
	    /**
	     * Creates a matrix with the given dimensions. Values will be set to one.
	     * @param {number} rows - Number of rows
	     * @param {number} columns - Number of columns
	     * @return {Matrix} - The new matrix
	     */


	    static ones(rows, columns) {
	      return this.empty(rows, columns).fill(1);
	    }
	    /**
	     * Creates a matrix with the given dimensions. Values will be randomly set.
	     * @param {number} rows - Number of rows
	     * @param {number} columns - Number of columns
	     * @param {function} [rng=Math.random] - Random number generator
	     * @return {Matrix} The new matrix
	     */


	    static rand(rows, columns, rng) {
	      if (rng === undefined) rng = Math.random;
	      var matrix = this.empty(rows, columns);

	      for (var i = 0; i < rows; i++) {
	        for (var j = 0; j < columns; j++) {
	          matrix.set(i, j, rng());
	        }
	      }

	      return matrix;
	    }
	    /**
	     * Creates a matrix with the given dimensions. Values will be random integers.
	     * @param {number} rows - Number of rows
	     * @param {number} columns - Number of columns
	     * @param {number} [maxValue=1000] - Maximum value
	     * @param {function} [rng=Math.random] - Random number generator
	     * @return {Matrix} The new matrix
	     */


	    static randInt(rows, columns, maxValue, rng) {
	      if (maxValue === undefined) maxValue = 1000;
	      if (rng === undefined) rng = Math.random;
	      var matrix = this.empty(rows, columns);

	      for (var i = 0; i < rows; i++) {
	        for (var j = 0; j < columns; j++) {
	          var value = Math.floor(rng() * maxValue);
	          matrix.set(i, j, value);
	        }
	      }

	      return matrix;
	    }
	    /**
	     * Creates an identity matrix with the given dimension. Values of the diagonal will be 1 and others will be 0.
	     * @param {number} rows - Number of rows
	     * @param {number} [columns=rows] - Number of columns
	     * @param {number} [value=1] - Value to fill the diagonal with
	     * @return {Matrix} - The new identity matrix
	     */


	    static eye(rows, columns, value) {
	      if (columns === undefined) columns = rows;
	      if (value === undefined) value = 1;
	      var min = Math.min(rows, columns);
	      var matrix = this.zeros(rows, columns);

	      for (var i = 0; i < min; i++) {
	        matrix.set(i, i, value);
	      }

	      return matrix;
	    }
	    /**
	     * Creates a diagonal matrix based on the given array.
	     * @param {Array} data - Array containing the data for the diagonal
	     * @param {number} [rows] - Number of rows (Default: data.length)
	     * @param {number} [columns] - Number of columns (Default: rows)
	     * @return {Matrix} - The new diagonal matrix
	     */


	    static diag(data, rows, columns) {
	      var l = data.length;
	      if (rows === undefined) rows = l;
	      if (columns === undefined) columns = rows;
	      var min = Math.min(l, rows, columns);
	      var matrix = this.zeros(rows, columns);

	      for (var i = 0; i < min; i++) {
	        matrix.set(i, i, data[i]);
	      }

	      return matrix;
	    }
	    /**
	     * Returns a matrix whose elements are the minimum between matrix1 and matrix2
	     * @param {Matrix} matrix1
	     * @param {Matrix} matrix2
	     * @return {Matrix}
	     */


	    static min(matrix1, matrix2) {
	      matrix1 = this.checkMatrix(matrix1);
	      matrix2 = this.checkMatrix(matrix2);
	      var rows = matrix1.rows;
	      var columns = matrix1.columns;
	      var result = new this(rows, columns);

	      for (var i = 0; i < rows; i++) {
	        for (var j = 0; j < columns; j++) {
	          result.set(i, j, Math.min(matrix1.get(i, j), matrix2.get(i, j)));
	        }
	      }

	      return result;
	    }
	    /**
	     * Returns a matrix whose elements are the maximum between matrix1 and matrix2
	     * @param {Matrix} matrix1
	     * @param {Matrix} matrix2
	     * @return {Matrix}
	     */


	    static max(matrix1, matrix2) {
	      matrix1 = this.checkMatrix(matrix1);
	      matrix2 = this.checkMatrix(matrix2);
	      var rows = matrix1.rows;
	      var columns = matrix1.columns;
	      var result = new this(rows, columns);

	      for (var i = 0; i < rows; i++) {
	        for (var j = 0; j < columns; j++) {
	          result.set(i, j, Math.max(matrix1.get(i, j), matrix2.get(i, j)));
	        }
	      }

	      return result;
	    }
	    /**
	     * Check that the provided value is a Matrix and tries to instantiate one if not
	     * @param {*} value - The value to check
	     * @return {Matrix}
	     */


	    static checkMatrix(value) {
	      return Matrix.isMatrix(value) ? value : new this(value);
	    }
	    /**
	     * Returns true if the argument is a Matrix, false otherwise
	     * @param {*} value - The value to check
	     * @return {boolean}
	     */


	    static isMatrix(value) {
	      return value != null && value.klass === 'Matrix';
	    }
	    /**
	     * @prop {number} size - The number of elements in the matrix.
	     */


	    get size() {
	      return this.rows * this.columns;
	    }
	    /**
	     * Applies a callback for each element of the matrix. The function is called in the matrix (this) context.
	     * @param {function} callback - Function that will be called with two parameters : i (row) and j (column)
	     * @return {Matrix} this
	     */


	    apply(callback) {
	      if (typeof callback !== 'function') {
	        throw new TypeError('callback must be a function');
	      }

	      var ii = this.rows;
	      var jj = this.columns;

	      for (var i = 0; i < ii; i++) {
	        for (var j = 0; j < jj; j++) {
	          callback.call(this, i, j);
	        }
	      }

	      return this;
	    }
	    /**
	     * Returns a new 1D array filled row by row with the matrix values
	     * @return {Array}
	     */


	    to1DArray() {
	      var array = new Array(this.size);

	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          array[i * this.columns + j] = this.get(i, j);
	        }
	      }

	      return array;
	    }
	    /**
	     * Returns a 2D array containing a copy of the data
	     * @return {Array}
	     */


	    to2DArray() {
	      var copy = new Array(this.rows);

	      for (var i = 0; i < this.rows; i++) {
	        copy[i] = new Array(this.columns);

	        for (var j = 0; j < this.columns; j++) {
	          copy[i][j] = this.get(i, j);
	        }
	      }

	      return copy;
	    }
	    /**
	     * @return {boolean} true if the matrix has one row
	     */


	    isRowVector() {
	      return this.rows === 1;
	    }
	    /**
	     * @return {boolean} true if the matrix has one column
	     */


	    isColumnVector() {
	      return this.columns === 1;
	    }
	    /**
	     * @return {boolean} true if the matrix has one row or one column
	     */


	    isVector() {
	      return this.rows === 1 || this.columns === 1;
	    }
	    /**
	     * @return {boolean} true if the matrix has the same number of rows and columns
	     */


	    isSquare() {
	      return this.rows === this.columns;
	    }
	    /**
	     * @return {boolean} true if the matrix is square and has the same values on both sides of the diagonal
	     */


	    isSymmetric() {
	      if (this.isSquare()) {
	        for (var i = 0; i < this.rows; i++) {
	          for (var j = 0; j <= i; j++) {
	            if (this.get(i, j) !== this.get(j, i)) {
	              return false;
	            }
	          }
	        }

	        return true;
	      }

	      return false;
	    }
	    /**
	     * Sets a given element of the matrix. mat.set(3,4,1) is equivalent to mat[3][4]=1
	     * @abstract
	     * @param {number} rowIndex - Index of the row
	     * @param {number} columnIndex - Index of the column
	     * @param {number} value - The new value for the element
	     * @return {Matrix} this
	     */


	    set(rowIndex, columnIndex, value) {
	      // eslint-disable-line no-unused-vars
	      throw new Error('set method is unimplemented');
	    }
	    /**
	     * Returns the given element of the matrix. mat.get(3,4) is equivalent to matrix[3][4]
	     * @abstract
	     * @param {number} rowIndex - Index of the row
	     * @param {number} columnIndex - Index of the column
	     * @return {number}
	     */


	    get(rowIndex, columnIndex) {
	      // eslint-disable-line no-unused-vars
	      throw new Error('get method is unimplemented');
	    }
	    /**
	     * Creates a new matrix that is a repetition of the current matrix. New matrix has rowRep times the number of
	     * rows of the matrix, and colRep times the number of columns of the matrix
	     * @param {number} rowRep - Number of times the rows should be repeated
	     * @param {number} colRep - Number of times the columns should be re
	     * @return {Matrix}
	     * @example
	     * var matrix = new Matrix([[1,2]]);
	     * matrix.repeat(2); // [[1,2],[1,2]]
	     */


	    repeat(rowRep, colRep) {
	      rowRep = rowRep || 1;
	      colRep = colRep || 1;
	      var matrix = new this.constructor[Symbol.species](this.rows * rowRep, this.columns * colRep);

	      for (var i = 0; i < rowRep; i++) {
	        for (var j = 0; j < colRep; j++) {
	          matrix.setSubMatrix(this, this.rows * i, this.columns * j);
	        }
	      }

	      return matrix;
	    }
	    /**
	     * Fills the matrix with a given value. All elements will be set to this value.
	     * @param {number} value - New value
	     * @return {Matrix} this
	     */


	    fill(value) {
	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          this.set(i, j, value);
	        }
	      }

	      return this;
	    }
	    /**
	     * Negates the matrix. All elements will be multiplied by (-1)
	     * @return {Matrix} this
	     */


	    neg() {
	      return this.mulS(-1);
	    }
	    /**
	     * Returns a new array from the given row index
	     * @param {number} index - Row index
	     * @return {Array}
	     */


	    getRow(index) {
	      util$1.checkRowIndex(this, index);
	      var row = new Array(this.columns);

	      for (var i = 0; i < this.columns; i++) {
	        row[i] = this.get(index, i);
	      }

	      return row;
	    }
	    /**
	     * Returns a new row vector from the given row index
	     * @param {number} index - Row index
	     * @return {Matrix}
	     */


	    getRowVector(index) {
	      return this.constructor.rowVector(this.getRow(index));
	    }
	    /**
	     * Sets a row at the given index
	     * @param {number} index - Row index
	     * @param {Array|Matrix} array - Array or vector
	     * @return {Matrix} this
	     */


	    setRow(index, array) {
	      util$1.checkRowIndex(this, index);
	      array = util$1.checkRowVector(this, array);

	      for (var i = 0; i < this.columns; i++) {
	        this.set(index, i, array[i]);
	      }

	      return this;
	    }
	    /**
	     * Swaps two rows
	     * @param {number} row1 - First row index
	     * @param {number} row2 - Second row index
	     * @return {Matrix} this
	     */


	    swapRows(row1, row2) {
	      util$1.checkRowIndex(this, row1);
	      util$1.checkRowIndex(this, row2);

	      for (var i = 0; i < this.columns; i++) {
	        var temp = this.get(row1, i);
	        this.set(row1, i, this.get(row2, i));
	        this.set(row2, i, temp);
	      }

	      return this;
	    }
	    /**
	     * Returns a new array from the given column index
	     * @param {number} index - Column index
	     * @return {Array}
	     */


	    getColumn(index) {
	      util$1.checkColumnIndex(this, index);
	      var column = new Array(this.rows);

	      for (var i = 0; i < this.rows; i++) {
	        column[i] = this.get(i, index);
	      }

	      return column;
	    }
	    /**
	     * Returns a new column vector from the given column index
	     * @param {number} index - Column index
	     * @return {Matrix}
	     */


	    getColumnVector(index) {
	      return this.constructor.columnVector(this.getColumn(index));
	    }
	    /**
	     * Sets a column at the given index
	     * @param {number} index - Column index
	     * @param {Array|Matrix} array - Array or vector
	     * @return {Matrix} this
	     */


	    setColumn(index, array) {
	      util$1.checkColumnIndex(this, index);
	      array = util$1.checkColumnVector(this, array);

	      for (var i = 0; i < this.rows; i++) {
	        this.set(i, index, array[i]);
	      }

	      return this;
	    }
	    /**
	     * Swaps two columns
	     * @param {number} column1 - First column index
	     * @param {number} column2 - Second column index
	     * @return {Matrix} this
	     */


	    swapColumns(column1, column2) {
	      util$1.checkColumnIndex(this, column1);
	      util$1.checkColumnIndex(this, column2);

	      for (var i = 0; i < this.rows; i++) {
	        var temp = this.get(i, column1);
	        this.set(i, column1, this.get(i, column2));
	        this.set(i, column2, temp);
	      }

	      return this;
	    }
	    /**
	     * Adds the values of a vector to each row
	     * @param {Array|Matrix} vector - Array or vector
	     * @return {Matrix} this
	     */


	    addRowVector(vector) {
	      vector = util$1.checkRowVector(this, vector);

	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          this.set(i, j, this.get(i, j) + vector[j]);
	        }
	      }

	      return this;
	    }
	    /**
	     * Subtracts the values of a vector from each row
	     * @param {Array|Matrix} vector - Array or vector
	     * @return {Matrix} this
	     */


	    subRowVector(vector) {
	      vector = util$1.checkRowVector(this, vector);

	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          this.set(i, j, this.get(i, j) - vector[j]);
	        }
	      }

	      return this;
	    }
	    /**
	     * Multiplies the values of a vector with each row
	     * @param {Array|Matrix} vector - Array or vector
	     * @return {Matrix} this
	     */


	    mulRowVector(vector) {
	      vector = util$1.checkRowVector(this, vector);

	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          this.set(i, j, this.get(i, j) * vector[j]);
	        }
	      }

	      return this;
	    }
	    /**
	     * Divides the values of each row by those of a vector
	     * @param {Array|Matrix} vector - Array or vector
	     * @return {Matrix} this
	     */


	    divRowVector(vector) {
	      vector = util$1.checkRowVector(this, vector);

	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          this.set(i, j, this.get(i, j) / vector[j]);
	        }
	      }

	      return this;
	    }
	    /**
	     * Adds the values of a vector to each column
	     * @param {Array|Matrix} vector - Array or vector
	     * @return {Matrix} this
	     */


	    addColumnVector(vector) {
	      vector = util$1.checkColumnVector(this, vector);

	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          this.set(i, j, this.get(i, j) + vector[i]);
	        }
	      }

	      return this;
	    }
	    /**
	     * Subtracts the values of a vector from each column
	     * @param {Array|Matrix} vector - Array or vector
	     * @return {Matrix} this
	     */


	    subColumnVector(vector) {
	      vector = util$1.checkColumnVector(this, vector);

	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          this.set(i, j, this.get(i, j) - vector[i]);
	        }
	      }

	      return this;
	    }
	    /**
	     * Multiplies the values of a vector with each column
	     * @param {Array|Matrix} vector - Array or vector
	     * @return {Matrix} this
	     */


	    mulColumnVector(vector) {
	      vector = util$1.checkColumnVector(this, vector);

	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          this.set(i, j, this.get(i, j) * vector[i]);
	        }
	      }

	      return this;
	    }
	    /**
	     * Divides the values of each column by those of a vector
	     * @param {Array|Matrix} vector - Array or vector
	     * @return {Matrix} this
	     */


	    divColumnVector(vector) {
	      vector = util$1.checkColumnVector(this, vector);

	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          this.set(i, j, this.get(i, j) / vector[i]);
	        }
	      }

	      return this;
	    }
	    /**
	     * Multiplies the values of a row with a scalar
	     * @param {number} index - Row index
	     * @param {number} value
	     * @return {Matrix} this
	     */


	    mulRow(index, value) {
	      util$1.checkRowIndex(this, index);

	      for (var i = 0; i < this.columns; i++) {
	        this.set(index, i, this.get(index, i) * value);
	      }

	      return this;
	    }
	    /**
	     * Multiplies the values of a column with a scalar
	     * @param {number} index - Column index
	     * @param {number} value
	     * @return {Matrix} this
	     */


	    mulColumn(index, value) {
	      util$1.checkColumnIndex(this, index);

	      for (var i = 0; i < this.rows; i++) {
	        this.set(i, index, this.get(i, index) * value);
	      }

	      return this;
	    }
	    /**
	     * Returns the maximum value of the matrix
	     * @return {number}
	     */


	    max() {
	      var v = this.get(0, 0);

	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          if (this.get(i, j) > v) {
	            v = this.get(i, j);
	          }
	        }
	      }

	      return v;
	    }
	    /**
	     * Returns the index of the maximum value
	     * @return {Array}
	     */


	    maxIndex() {
	      var v = this.get(0, 0);
	      var idx = [0, 0];

	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          if (this.get(i, j) > v) {
	            v = this.get(i, j);
	            idx[0] = i;
	            idx[1] = j;
	          }
	        }
	      }

	      return idx;
	    }
	    /**
	     * Returns the minimum value of the matrix
	     * @return {number}
	     */


	    min() {
	      var v = this.get(0, 0);

	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          if (this.get(i, j) < v) {
	            v = this.get(i, j);
	          }
	        }
	      }

	      return v;
	    }
	    /**
	     * Returns the index of the minimum value
	     * @return {Array}
	     */


	    minIndex() {
	      var v = this.get(0, 0);
	      var idx = [0, 0];

	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          if (this.get(i, j) < v) {
	            v = this.get(i, j);
	            idx[0] = i;
	            idx[1] = j;
	          }
	        }
	      }

	      return idx;
	    }
	    /**
	     * Returns the maximum value of one row
	     * @param {number} row - Row index
	     * @return {number}
	     */


	    maxRow(row) {
	      util$1.checkRowIndex(this, row);
	      var v = this.get(row, 0);

	      for (var i = 1; i < this.columns; i++) {
	        if (this.get(row, i) > v) {
	          v = this.get(row, i);
	        }
	      }

	      return v;
	    }
	    /**
	     * Returns the index of the maximum value of one row
	     * @param {number} row - Row index
	     * @return {Array}
	     */


	    maxRowIndex(row) {
	      util$1.checkRowIndex(this, row);
	      var v = this.get(row, 0);
	      var idx = [row, 0];

	      for (var i = 1; i < this.columns; i++) {
	        if (this.get(row, i) > v) {
	          v = this.get(row, i);
	          idx[1] = i;
	        }
	      }

	      return idx;
	    }
	    /**
	     * Returns the minimum value of one row
	     * @param {number} row - Row index
	     * @return {number}
	     */


	    minRow(row) {
	      util$1.checkRowIndex(this, row);
	      var v = this.get(row, 0);

	      for (var i = 1; i < this.columns; i++) {
	        if (this.get(row, i) < v) {
	          v = this.get(row, i);
	        }
	      }

	      return v;
	    }
	    /**
	     * Returns the index of the maximum value of one row
	     * @param {number} row - Row index
	     * @return {Array}
	     */


	    minRowIndex(row) {
	      util$1.checkRowIndex(this, row);
	      var v = this.get(row, 0);
	      var idx = [row, 0];

	      for (var i = 1; i < this.columns; i++) {
	        if (this.get(row, i) < v) {
	          v = this.get(row, i);
	          idx[1] = i;
	        }
	      }

	      return idx;
	    }
	    /**
	     * Returns the maximum value of one column
	     * @param {number} column - Column index
	     * @return {number}
	     */


	    maxColumn(column) {
	      util$1.checkColumnIndex(this, column);
	      var v = this.get(0, column);

	      for (var i = 1; i < this.rows; i++) {
	        if (this.get(i, column) > v) {
	          v = this.get(i, column);
	        }
	      }

	      return v;
	    }
	    /**
	     * Returns the index of the maximum value of one column
	     * @param {number} column - Column index
	     * @return {Array}
	     */


	    maxColumnIndex(column) {
	      util$1.checkColumnIndex(this, column);
	      var v = this.get(0, column);
	      var idx = [0, column];

	      for (var i = 1; i < this.rows; i++) {
	        if (this.get(i, column) > v) {
	          v = this.get(i, column);
	          idx[0] = i;
	        }
	      }

	      return idx;
	    }
	    /**
	     * Returns the minimum value of one column
	     * @param {number} column - Column index
	     * @return {number}
	     */


	    minColumn(column) {
	      util$1.checkColumnIndex(this, column);
	      var v = this.get(0, column);

	      for (var i = 1; i < this.rows; i++) {
	        if (this.get(i, column) < v) {
	          v = this.get(i, column);
	        }
	      }

	      return v;
	    }
	    /**
	     * Returns the index of the minimum value of one column
	     * @param {number} column - Column index
	     * @return {Array}
	     */


	    minColumnIndex(column) {
	      util$1.checkColumnIndex(this, column);
	      var v = this.get(0, column);
	      var idx = [0, column];

	      for (var i = 1; i < this.rows; i++) {
	        if (this.get(i, column) < v) {
	          v = this.get(i, column);
	          idx[0] = i;
	        }
	      }

	      return idx;
	    }
	    /**
	     * Returns an array containing the diagonal values of the matrix
	     * @return {Array}
	     */


	    diag() {
	      var min = Math.min(this.rows, this.columns);
	      var diag = new Array(min);

	      for (var i = 0; i < min; i++) {
	        diag[i] = this.get(i, i);
	      }

	      return diag;
	    }
	    /**
	     * Returns the sum by the argument given, if no argument given,
	     * it returns the sum of all elements of the matrix.
	     * @param {string} by - sum by 'row' or 'column'.
	     * @return {Matrix|number}
	     */


	    sum(by) {
	      switch (by) {
	        case 'row':
	          return util$1.sumByRow(this);

	        case 'column':
	          return util$1.sumByColumn(this);

	        default:
	          return util$1.sumAll(this);
	      }
	    }
	    /**
	     * Returns the mean of all elements of the matrix
	     * @return {number}
	     */


	    mean() {
	      return this.sum() / this.size;
	    }
	    /**
	     * Returns the product of all elements of the matrix
	     * @return {number}
	     */


	    prod() {
	      var prod = 1;

	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          prod *= this.get(i, j);
	        }
	      }

	      return prod;
	    }
	    /**
	     * Computes the cumulative sum of the matrix elements (in place, row by row)
	     * @return {Matrix} this
	     */


	    cumulativeSum() {
	      var sum = 0;

	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          sum += this.get(i, j);
	          this.set(i, j, sum);
	        }
	      }

	      return this;
	    }
	    /**
	     * Computes the dot (scalar) product between the matrix and another
	     * @param {Matrix} vector2 vector
	     * @return {number}
	     */


	    dot(vector2) {
	      if (Matrix.isMatrix(vector2)) vector2 = vector2.to1DArray();
	      var vector1 = this.to1DArray();

	      if (vector1.length !== vector2.length) {
	        throw new RangeError('vectors do not have the same size');
	      }

	      var dot = 0;

	      for (var i = 0; i < vector1.length; i++) {
	        dot += vector1[i] * vector2[i];
	      }

	      return dot;
	    }
	    /**
	     * Returns the matrix product between this and other
	     * @param {Matrix} other
	     * @return {Matrix}
	     */


	    mmul(other) {
	      other = this.constructor.checkMatrix(other);

	      if (this.columns !== other.rows) {
	        // eslint-disable-next-line no-console
	        console.warn('Number of columns of left matrix are not equal to number of rows of right matrix.');
	      }

	      var m = this.rows;
	      var n = this.columns;
	      var p = other.columns;
	      var result = new this.constructor[Symbol.species](m, p);
	      var Bcolj = new Array(n);

	      for (var j = 0; j < p; j++) {
	        for (var k = 0; k < n; k++) {
	          Bcolj[k] = other.get(k, j);
	        }

	        for (var i = 0; i < m; i++) {
	          var s = 0;

	          for (k = 0; k < n; k++) {
	            s += this.get(i, k) * Bcolj[k];
	          }

	          result.set(i, j, s);
	        }
	      }

	      return result;
	    }

	    strassen2x2(other) {
	      var result = new this.constructor[Symbol.species](2, 2);
	      const a11 = this.get(0, 0);
	      const b11 = other.get(0, 0);
	      const a12 = this.get(0, 1);
	      const b12 = other.get(0, 1);
	      const a21 = this.get(1, 0);
	      const b21 = other.get(1, 0);
	      const a22 = this.get(1, 1);
	      const b22 = other.get(1, 1); // Compute intermediate values.

	      const m1 = (a11 + a22) * (b11 + b22);
	      const m2 = (a21 + a22) * b11;
	      const m3 = a11 * (b12 - b22);
	      const m4 = a22 * (b21 - b11);
	      const m5 = (a11 + a12) * b22;
	      const m6 = (a21 - a11) * (b11 + b12);
	      const m7 = (a12 - a22) * (b21 + b22); // Combine intermediate values into the output.

	      const c00 = m1 + m4 - m5 + m7;
	      const c01 = m3 + m5;
	      const c10 = m2 + m4;
	      const c11 = m1 - m2 + m3 + m6;
	      result.set(0, 0, c00);
	      result.set(0, 1, c01);
	      result.set(1, 0, c10);
	      result.set(1, 1, c11);
	      return result;
	    }

	    strassen3x3(other) {
	      var result = new this.constructor[Symbol.species](3, 3);
	      const a00 = this.get(0, 0);
	      const a01 = this.get(0, 1);
	      const a02 = this.get(0, 2);
	      const a10 = this.get(1, 0);
	      const a11 = this.get(1, 1);
	      const a12 = this.get(1, 2);
	      const a20 = this.get(2, 0);
	      const a21 = this.get(2, 1);
	      const a22 = this.get(2, 2);
	      const b00 = other.get(0, 0);
	      const b01 = other.get(0, 1);
	      const b02 = other.get(0, 2);
	      const b10 = other.get(1, 0);
	      const b11 = other.get(1, 1);
	      const b12 = other.get(1, 2);
	      const b20 = other.get(2, 0);
	      const b21 = other.get(2, 1);
	      const b22 = other.get(2, 2);
	      const m1 = (a00 + a01 + a02 - a10 - a11 - a21 - a22) * b11;
	      const m2 = (a00 - a10) * (-b01 + b11);
	      const m3 = a11 * (-b00 + b01 + b10 - b11 - b12 - b20 + b22);
	      const m4 = (-a00 + a10 + a11) * (b00 - b01 + b11);
	      const m5 = (a10 + a11) * (-b00 + b01);
	      const m6 = a00 * b00;
	      const m7 = (-a00 + a20 + a21) * (b00 - b02 + b12);
	      const m8 = (-a00 + a20) * (b02 - b12);
	      const m9 = (a20 + a21) * (-b00 + b02);
	      const m10 = (a00 + a01 + a02 - a11 - a12 - a20 - a21) * b12;
	      const m11 = a21 * (-b00 + b02 + b10 - b11 - b12 - b20 + b21);
	      const m12 = (-a02 + a21 + a22) * (b11 + b20 - b21);
	      const m13 = (a02 - a22) * (b11 - b21);
	      const m14 = a02 * b20;
	      const m15 = (a21 + a22) * (-b20 + b21);
	      const m16 = (-a02 + a11 + a12) * (b12 + b20 - b22);
	      const m17 = (a02 - a12) * (b12 - b22);
	      const m18 = (a11 + a12) * (-b20 + b22);
	      const m19 = a01 * b10;
	      const m20 = a12 * b21;
	      const m21 = a10 * b02;
	      const m22 = a20 * b01;
	      const m23 = a22 * b22;
	      const c00 = m6 + m14 + m19;
	      const c01 = m1 + m4 + m5 + m6 + m12 + m14 + m15;
	      const c02 = m6 + m7 + m9 + m10 + m14 + m16 + m18;
	      const c10 = m2 + m3 + m4 + m6 + m14 + m16 + m17;
	      const c11 = m2 + m4 + m5 + m6 + m20;
	      const c12 = m14 + m16 + m17 + m18 + m21;
	      const c20 = m6 + m7 + m8 + m11 + m12 + m13 + m14;
	      const c21 = m12 + m13 + m14 + m15 + m22;
	      const c22 = m6 + m7 + m8 + m9 + m23;
	      result.set(0, 0, c00);
	      result.set(0, 1, c01);
	      result.set(0, 2, c02);
	      result.set(1, 0, c10);
	      result.set(1, 1, c11);
	      result.set(1, 2, c12);
	      result.set(2, 0, c20);
	      result.set(2, 1, c21);
	      result.set(2, 2, c22);
	      return result;
	    }
	    /**
	     * Returns the matrix product between x and y. More efficient than mmul(other) only when we multiply squared matrix and when the size of the matrix is > 1000.
	     * @param {Matrix} y
	     * @return {Matrix}
	     */


	    mmulStrassen(y) {
	      var x = this.clone();
	      var r1 = x.rows;
	      var c1 = x.columns;
	      var r2 = y.rows;
	      var c2 = y.columns;

	      if (c1 !== r2) {
	        // eslint-disable-next-line no-console
	        console.warn("Multiplying ".concat(r1, " x ").concat(c1, " and ").concat(r2, " x ").concat(c2, " matrix: dimensions do not match."));
	      } // Put a matrix into the top left of a matrix of zeros.
	      // `rows` and `cols` are the dimensions of the output matrix.


	      function embed(mat, rows, cols) {
	        var r = mat.rows;
	        var c = mat.columns;

	        if (r === rows && c === cols) {
	          return mat;
	        } else {
	          var resultat = Matrix.zeros(rows, cols);
	          resultat = resultat.setSubMatrix(mat, 0, 0);
	          return resultat;
	        }
	      } // Make sure both matrices are the same size.
	      // This is exclusively for simplicity:
	      // this algorithm can be implemented with matrices of different sizes.


	      var r = Math.max(r1, r2);
	      var c = Math.max(c1, c2);
	      x = embed(x, r, c);
	      y = embed(y, r, c); // Our recursive multiplication function.

	      function blockMult(a, b, rows, cols) {
	        // For small matrices, resort to naive multiplication.
	        if (rows <= 512 || cols <= 512) {
	          return a.mmul(b); // a is equivalent to this
	        } // Apply dynamic padding.


	        if (rows % 2 === 1 && cols % 2 === 1) {
	          a = embed(a, rows + 1, cols + 1);
	          b = embed(b, rows + 1, cols + 1);
	        } else if (rows % 2 === 1) {
	          a = embed(a, rows + 1, cols);
	          b = embed(b, rows + 1, cols);
	        } else if (cols % 2 === 1) {
	          a = embed(a, rows, cols + 1);
	          b = embed(b, rows, cols + 1);
	        }

	        var halfRows = parseInt(a.rows / 2);
	        var halfCols = parseInt(a.columns / 2); // Subdivide input matrices.

	        var a11 = a.subMatrix(0, halfRows - 1, 0, halfCols - 1);
	        var b11 = b.subMatrix(0, halfRows - 1, 0, halfCols - 1);
	        var a12 = a.subMatrix(0, halfRows - 1, halfCols, a.columns - 1);
	        var b12 = b.subMatrix(0, halfRows - 1, halfCols, b.columns - 1);
	        var a21 = a.subMatrix(halfRows, a.rows - 1, 0, halfCols - 1);
	        var b21 = b.subMatrix(halfRows, b.rows - 1, 0, halfCols - 1);
	        var a22 = a.subMatrix(halfRows, a.rows - 1, halfCols, a.columns - 1);
	        var b22 = b.subMatrix(halfRows, b.rows - 1, halfCols, b.columns - 1); // Compute intermediate values.

	        var m1 = blockMult(Matrix.add(a11, a22), Matrix.add(b11, b22), halfRows, halfCols);
	        var m2 = blockMult(Matrix.add(a21, a22), b11, halfRows, halfCols);
	        var m3 = blockMult(a11, Matrix.sub(b12, b22), halfRows, halfCols);
	        var m4 = blockMult(a22, Matrix.sub(b21, b11), halfRows, halfCols);
	        var m5 = blockMult(Matrix.add(a11, a12), b22, halfRows, halfCols);
	        var m6 = blockMult(Matrix.sub(a21, a11), Matrix.add(b11, b12), halfRows, halfCols);
	        var m7 = blockMult(Matrix.sub(a12, a22), Matrix.add(b21, b22), halfRows, halfCols); // Combine intermediate values into the output.

	        var c11 = Matrix.add(m1, m4);
	        c11.sub(m5);
	        c11.add(m7);
	        var c12 = Matrix.add(m3, m5);
	        var c21 = Matrix.add(m2, m4);
	        var c22 = Matrix.sub(m1, m2);
	        c22.add(m3);
	        c22.add(m6); //Crop output to the desired size (undo dynamic padding).

	        var resultat = Matrix.zeros(2 * c11.rows, 2 * c11.columns);
	        resultat = resultat.setSubMatrix(c11, 0, 0);
	        resultat = resultat.setSubMatrix(c12, c11.rows, 0);
	        resultat = resultat.setSubMatrix(c21, 0, c11.columns);
	        resultat = resultat.setSubMatrix(c22, c11.rows, c11.columns);
	        return resultat.subMatrix(0, rows - 1, 0, cols - 1);
	      }

	      return blockMult(x, y, r, c);
	    }
	    /**
	     * Returns a row-by-row scaled matrix
	     * @param {number} [min=0] - Minimum scaled value
	     * @param {number} [max=1] - Maximum scaled value
	     * @return {Matrix} - The scaled matrix
	     */


	    scaleRows(min, max) {
	      min = min === undefined ? 0 : min;
	      max = max === undefined ? 1 : max;

	      if (min >= max) {
	        throw new RangeError('min should be strictly smaller than max');
	      }

	      var newMatrix = this.constructor.empty(this.rows, this.columns);

	      for (var i = 0; i < this.rows; i++) {
	        var scaled = src$2.scale(this.getRow(i), {
	          min,
	          max
	        });
	        newMatrix.setRow(i, scaled);
	      }

	      return newMatrix;
	    }
	    /**
	     * Returns a new column-by-column scaled matrix
	     * @param {number} [min=0] - Minimum scaled value
	     * @param {number} [max=1] - Maximum scaled value
	     * @return {Matrix} - The new scaled matrix
	     * @example
	     * var matrix = new Matrix([[1,2],[-1,0]]);
	     * var scaledMatrix = matrix.scaleColumns(); // [[1,1],[0,0]]
	     */


	    scaleColumns(min, max) {
	      min = min === undefined ? 0 : min;
	      max = max === undefined ? 1 : max;

	      if (min >= max) {
	        throw new RangeError('min should be strictly smaller than max');
	      }

	      var newMatrix = this.constructor.empty(this.rows, this.columns);

	      for (var i = 0; i < this.columns; i++) {
	        var scaled = src$2.scale(this.getColumn(i), {
	          min: min,
	          max: max
	        });
	        newMatrix.setColumn(i, scaled);
	      }

	      return newMatrix;
	    }
	    /**
	     * Returns the Kronecker product (also known as tensor product) between this and other
	     * See https://en.wikipedia.org/wiki/Kronecker_product
	     * @param {Matrix} other
	     * @return {Matrix}
	     */


	    kroneckerProduct(other) {
	      other = this.constructor.checkMatrix(other);
	      var m = this.rows;
	      var n = this.columns;
	      var p = other.rows;
	      var q = other.columns;
	      var result = new this.constructor[Symbol.species](m * p, n * q);

	      for (var i = 0; i < m; i++) {
	        for (var j = 0; j < n; j++) {
	          for (var k = 0; k < p; k++) {
	            for (var l = 0; l < q; l++) {
	              result[p * i + k][q * j + l] = this.get(i, j) * other.get(k, l);
	            }
	          }
	        }
	      }

	      return result;
	    }
	    /**
	     * Transposes the matrix and returns a new one containing the result
	     * @return {Matrix}
	     */


	    transpose() {
	      var result = new this.constructor[Symbol.species](this.columns, this.rows);

	      for (var i = 0; i < this.rows; i++) {
	        for (var j = 0; j < this.columns; j++) {
	          result.set(j, i, this.get(i, j));
	        }
	      }

	      return result;
	    }
	    /**
	     * Sorts the rows (in place)
	     * @param {function} compareFunction - usual Array.prototype.sort comparison function
	     * @return {Matrix} this
	     */


	    sortRows(compareFunction) {
	      if (compareFunction === undefined) compareFunction = compareNumbers;

	      for (var i = 0; i < this.rows; i++) {
	        this.setRow(i, this.getRow(i).sort(compareFunction));
	      }

	      return this;
	    }
	    /**
	     * Sorts the columns (in place)
	     * @param {function} compareFunction - usual Array.prototype.sort comparison function
	     * @return {Matrix} this
	     */


	    sortColumns(compareFunction) {
	      if (compareFunction === undefined) compareFunction = compareNumbers;

	      for (var i = 0; i < this.columns; i++) {
	        this.setColumn(i, this.getColumn(i).sort(compareFunction));
	      }

	      return this;
	    }
	    /**
	     * Returns a subset of the matrix
	     * @param {number} startRow - First row index
	     * @param {number} endRow - Last row index
	     * @param {number} startColumn - First column index
	     * @param {number} endColumn - Last column index
	     * @return {Matrix}
	     */


	    subMatrix(startRow, endRow, startColumn, endColumn) {
	      util$1.checkRange(this, startRow, endRow, startColumn, endColumn);
	      var newMatrix = new this.constructor[Symbol.species](endRow - startRow + 1, endColumn - startColumn + 1);

	      for (var i = startRow; i <= endRow; i++) {
	        for (var j = startColumn; j <= endColumn; j++) {
	          newMatrix[i - startRow][j - startColumn] = this.get(i, j);
	        }
	      }

	      return newMatrix;
	    }
	    /**
	     * Returns a subset of the matrix based on an array of row indices
	     * @param {Array} indices - Array containing the row indices
	     * @param {number} [startColumn = 0] - First column index
	     * @param {number} [endColumn = this.columns-1] - Last column index
	     * @return {Matrix}
	     */


	    subMatrixRow(indices, startColumn, endColumn) {
	      if (startColumn === undefined) startColumn = 0;
	      if (endColumn === undefined) endColumn = this.columns - 1;

	      if (startColumn > endColumn || startColumn < 0 || startColumn >= this.columns || endColumn < 0 || endColumn >= this.columns) {
	        throw new RangeError('Argument out of range');
	      }

	      var newMatrix = new this.constructor[Symbol.species](indices.length, endColumn - startColumn + 1);

	      for (var i = 0; i < indices.length; i++) {
	        for (var j = startColumn; j <= endColumn; j++) {
	          if (indices[i] < 0 || indices[i] >= this.rows) {
	            throw new RangeError('Row index out of range: ' + indices[i]);
	          }

	          newMatrix.set(i, j - startColumn, this.get(indices[i], j));
	        }
	      }

	      return newMatrix;
	    }
	    /**
	     * Returns a subset of the matrix based on an array of column indices
	     * @param {Array} indices - Array containing the column indices
	     * @param {number} [startRow = 0] - First row index
	     * @param {number} [endRow = this.rows-1] - Last row index
	     * @return {Matrix}
	     */


	    subMatrixColumn(indices, startRow, endRow) {
	      if (startRow === undefined) startRow = 0;
	      if (endRow === undefined) endRow = this.rows - 1;

	      if (startRow > endRow || startRow < 0 || startRow >= this.rows || endRow < 0 || endRow >= this.rows) {
	        throw new RangeError('Argument out of range');
	      }

	      var newMatrix = new this.constructor[Symbol.species](endRow - startRow + 1, indices.length);

	      for (var i = 0; i < indices.length; i++) {
	        for (var j = startRow; j <= endRow; j++) {
	          if (indices[i] < 0 || indices[i] >= this.columns) {
	            throw new RangeError('Column index out of range: ' + indices[i]);
	          }

	          newMatrix.set(j - startRow, i, this.get(j, indices[i]));
	        }
	      }

	      return newMatrix;
	    }
	    /**
	     * Set a part of the matrix to the given sub-matrix
	     * @param {Matrix|Array< Array >} matrix - The source matrix from which to extract values.
	     * @param {number} startRow - The index of the first row to set
	     * @param {number} startColumn - The index of the first column to set
	     * @return {Matrix}
	     */


	    setSubMatrix(matrix, startRow, startColumn) {
	      matrix = this.constructor.checkMatrix(matrix);
	      var endRow = startRow + matrix.rows - 1;
	      var endColumn = startColumn + matrix.columns - 1;
	      util$1.checkRange(this, startRow, endRow, startColumn, endColumn);

	      for (var i = 0; i < matrix.rows; i++) {
	        for (var j = 0; j < matrix.columns; j++) {
	          this[startRow + i][startColumn + j] = matrix.get(i, j);
	        }
	      }

	      return this;
	    }
	    /**
	     * Return a new matrix based on a selection of rows and columns
	     * @param {Array<number>} rowIndices - The row indices to select. Order matters and an index can be more than once.
	     * @param {Array<number>} columnIndices - The column indices to select. Order matters and an index can be use more than once.
	     * @return {Matrix} The new matrix
	     */


	    selection(rowIndices, columnIndices) {
	      var indices = util$1.checkIndices(this, rowIndices, columnIndices);
	      var newMatrix = new this.constructor[Symbol.species](rowIndices.length, columnIndices.length);

	      for (var i = 0; i < indices.row.length; i++) {
	        var rowIndex = indices.row[i];

	        for (var j = 0; j < indices.column.length; j++) {
	          var columnIndex = indices.column[j];
	          newMatrix[i][j] = this.get(rowIndex, columnIndex);
	        }
	      }

	      return newMatrix;
	    }
	    /**
	     * Returns the trace of the matrix (sum of the diagonal elements)
	     * @return {number}
	     */


	    trace() {
	      var min = Math.min(this.rows, this.columns);
	      var trace = 0;

	      for (var i = 0; i < min; i++) {
	        trace += this.get(i, i);
	      }

	      return trace;
	    }
	    /*
	     Matrix views
	     */

	    /**
	     * Returns a view of the transposition of the matrix
	     * @return {MatrixTransposeView}
	     */


	    transposeView() {
	      return new transpose$1(this);
	    }
	    /**
	     * Returns a view of the row vector with the given index
	     * @param {number} row - row index of the vector
	     * @return {MatrixRowView}
	     */


	    rowView(row$1) {
	      util$1.checkRowIndex(this, row$1);
	      return new row(this, row$1);
	    }
	    /**
	     * Returns a view of the column vector with the given index
	     * @param {number} column - column index of the vector
	     * @return {MatrixColumnView}
	     */


	    columnView(column$1) {
	      util$1.checkColumnIndex(this, column$1);
	      return new column(this, column$1);
	    }
	    /**
	     * Returns a view of the matrix flipped in the row axis
	     * @return {MatrixFlipRowView}
	     */


	    flipRowView() {
	      return new flipRow(this);
	    }
	    /**
	     * Returns a view of the matrix flipped in the column axis
	     * @return {MatrixFlipColumnView}
	     */


	    flipColumnView() {
	      return new flipColumn(this);
	    }
	    /**
	     * Returns a view of a submatrix giving the index boundaries
	     * @param {number} startRow - first row index of the submatrix
	     * @param {number} endRow - last row index of the submatrix
	     * @param {number} startColumn - first column index of the submatrix
	     * @param {number} endColumn - last column index of the submatrix
	     * @return {MatrixSubView}
	     */


	    subMatrixView(startRow, endRow, startColumn, endColumn) {
	      return new sub(this, startRow, endRow, startColumn, endColumn);
	    }
	    /**
	     * Returns a view of the cross of the row indices and the column indices
	     * @example
	     * // resulting vector is [[2], [2]]
	     * var matrix = new Matrix([[1,2,3], [4,5,6]]).selectionView([0, 0], [1])
	     * @param {Array<number>} rowIndices
	     * @param {Array<number>} columnIndices
	     * @return {MatrixSelectionView}
	     */


	    selectionView(rowIndices, columnIndices) {
	      return new selection(this, rowIndices, columnIndices);
	    }
	    /**
	    * Calculates and returns the determinant of a matrix as a Number
	    * @example
	    *   new Matrix([[1,2,3], [4,5,6]]).det()
	    * @return {number}
	    */


	    det() {
	      if (this.isSquare()) {
	        var a, b, c, d;

	        if (this.columns === 2) {
	          // 2 x 2 matrix
	          a = this.get(0, 0);
	          b = this.get(0, 1);
	          c = this.get(1, 0);
	          d = this.get(1, 1);
	          return a * d - b * c;
	        } else if (this.columns === 3) {
	          // 3 x 3 matrix
	          var subMatrix0, subMatrix1, subMatrix2;
	          subMatrix0 = this.selectionView([1, 2], [1, 2]);
	          subMatrix1 = this.selectionView([1, 2], [0, 2]);
	          subMatrix2 = this.selectionView([1, 2], [0, 1]);
	          a = this.get(0, 0);
	          b = this.get(0, 1);
	          c = this.get(0, 2);
	          return a * subMatrix0.det() - b * subMatrix1.det() + c * subMatrix2.det();
	        } else {
	          // general purpose determinant using the LU decomposition
	          return new lu(this).determinant;
	        }
	      } else {
	        throw Error('Determinant can only be calculated for a square matrix.');
	      }
	    }
	    /**
	     * Returns inverse of a matrix if it exists or the pseudoinverse
	     * @param {number} threshold - threshold for taking inverse of singular values (default = 1e-15)
	     * @return {Matrix} the (pseudo)inverted matrix.
	     */


	    pseudoInverse(threshold) {
	      if (threshold === undefined) threshold = Number.EPSILON;
	      var svdSolution = new svd(this, {
	        autoTranspose: true
	      });
	      var U = svdSolution.leftSingularVectors;
	      var V = svdSolution.rightSingularVectors;
	      var s = svdSolution.diagonal;

	      for (var i = 0; i < s.length; i++) {
	        if (Math.abs(s[i]) > threshold) {
	          s[i] = 1.0 / s[i];
	        } else {
	          s[i] = 0.0;
	        }
	      } // convert list to diagonal


	      s = this.constructor[Symbol.species].diag(s);
	      return V.mmul(s.mmul(U.transposeView()));
	    }

	  }

	  Matrix.prototype.klass = 'Matrix';

	  function compareNumbers(a, b) {
	    return a - b;
	  }
	  /*
	   Synonyms
	   */


	  Matrix.random = Matrix.rand;
	  Matrix.diagonal = Matrix.diag;
	  Matrix.prototype.diagonal = Matrix.prototype.diag;
	  Matrix.identity = Matrix.eye;
	  Matrix.prototype.negate = Matrix.prototype.neg;
	  Matrix.prototype.tensorProduct = Matrix.prototype.kroneckerProduct;
	  Matrix.prototype.determinant = Matrix.prototype.det;
	  /*
	   Add dynamically instance and static methods for mathematical operations
	   */

	  var inplaceOperator = "\n(function %name%(value) {\n    if (typeof value === 'number') return this.%name%S(value);\n    return this.%name%M(value);\n})\n";
	  var inplaceOperatorScalar = "\n(function %name%S(value) {\n    for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.columns; j++) {\n            this.set(i, j, this.get(i, j) %op% value);\n        }\n    }\n    return this;\n})\n";
	  var inplaceOperatorMatrix = "\n(function %name%M(matrix) {\n    matrix = this.constructor.checkMatrix(matrix);\n    checkDimensions(this, matrix);\n    for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.columns; j++) {\n            this.set(i, j, this.get(i, j) %op% matrix.get(i, j));\n        }\n    }\n    return this;\n})\n";
	  var staticOperator = "\n(function %name%(matrix, value) {\n    var newMatrix = new this[Symbol.species](matrix);\n    return newMatrix.%name%(value);\n})\n";
	  var inplaceMethod = "\n(function %name%() {\n    for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.columns; j++) {\n            this.set(i, j, %method%(this.get(i, j)));\n        }\n    }\n    return this;\n})\n";
	  var staticMethod = "\n(function %name%(matrix) {\n    var newMatrix = new this[Symbol.species](matrix);\n    return newMatrix.%name%();\n})\n";
	  var inplaceMethodWithArgs = "\n(function %name%(%args%) {\n    for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.columns; j++) {\n            this.set(i, j, %method%(this.get(i, j), %args%));\n        }\n    }\n    return this;\n})\n";
	  var staticMethodWithArgs = "\n(function %name%(matrix, %args%) {\n    var newMatrix = new this[Symbol.species](matrix);\n    return newMatrix.%name%(%args%);\n})\n";
	  var inplaceMethodWithOneArgScalar = "\n(function %name%S(value) {\n    for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.columns; j++) {\n            this.set(i, j, %method%(this.get(i, j), value));\n        }\n    }\n    return this;\n})\n";
	  var inplaceMethodWithOneArgMatrix = "\n(function %name%M(matrix) {\n    matrix = this.constructor.checkMatrix(matrix);\n    checkDimensions(this, matrix);\n    for (var i = 0; i < this.rows; i++) {\n        for (var j = 0; j < this.columns; j++) {\n            this.set(i, j, %method%(this.get(i, j), matrix.get(i, j)));\n        }\n    }\n    return this;\n})\n";
	  var inplaceMethodWithOneArg = "\n(function %name%(value) {\n    if (typeof value === 'number') return this.%name%S(value);\n    return this.%name%M(value);\n})\n";
	  var staticMethodWithOneArg = staticMethodWithArgs;
	  var operators = [// Arithmetic operators
	  ['+', 'add'], ['-', 'sub', 'subtract'], ['*', 'mul', 'multiply'], ['/', 'div', 'divide'], ['%', 'mod', 'modulus'], // Bitwise operators
	  ['&', 'and'], ['|', 'or'], ['^', 'xor'], ['<<', 'leftShift'], ['>>', 'signPropagatingRightShift'], ['>>>', 'rightShift', 'zeroFillRightShift']];
	  var i;

	  for (var operator of operators) {
	    var inplaceOp = eval(fillTemplateFunction(inplaceOperator, {
	      name: operator[1],
	      op: operator[0]
	    }));
	    var inplaceOpS = eval(fillTemplateFunction(inplaceOperatorScalar, {
	      name: operator[1] + 'S',
	      op: operator[0]
	    }));
	    var inplaceOpM = eval(fillTemplateFunction(inplaceOperatorMatrix, {
	      name: operator[1] + 'M',
	      op: operator[0]
	    }));
	    var staticOp = eval(fillTemplateFunction(staticOperator, {
	      name: operator[1]
	    }));

	    for (i = 1; i < operator.length; i++) {
	      Matrix.prototype[operator[i]] = inplaceOp;
	      Matrix.prototype[operator[i] + 'S'] = inplaceOpS;
	      Matrix.prototype[operator[i] + 'M'] = inplaceOpM;
	      Matrix[operator[i]] = staticOp;
	    }
	  }

	  var methods = [['~', 'not']];
	  ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'cbrt', 'ceil', 'clz32', 'cos', 'cosh', 'exp', 'expm1', 'floor', 'fround', 'log', 'log1p', 'log10', 'log2', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc'].forEach(function (mathMethod) {
	    methods.push(['Math.' + mathMethod, mathMethod]);
	  });

	  for (var method of methods) {
	    var inplaceMeth = eval(fillTemplateFunction(inplaceMethod, {
	      name: method[1],
	      method: method[0]
	    }));
	    var staticMeth = eval(fillTemplateFunction(staticMethod, {
	      name: method[1]
	    }));

	    for (i = 1; i < method.length; i++) {
	      Matrix.prototype[method[i]] = inplaceMeth;
	      Matrix[method[i]] = staticMeth;
	    }
	  }

	  var methodsWithArgs = [['Math.pow', 1, 'pow']];

	  for (var methodWithArg of methodsWithArgs) {
	    var args = 'arg0';

	    for (i = 1; i < methodWithArg[1]; i++) {
	      args += ", arg".concat(i);
	    }

	    if (methodWithArg[1] !== 1) {
	      var inplaceMethWithArgs = eval(fillTemplateFunction(inplaceMethodWithArgs, {
	        name: methodWithArg[2],
	        method: methodWithArg[0],
	        args: args
	      }));
	      var staticMethWithArgs = eval(fillTemplateFunction(staticMethodWithArgs, {
	        name: methodWithArg[2],
	        args: args
	      }));

	      for (i = 2; i < methodWithArg.length; i++) {
	        Matrix.prototype[methodWithArg[i]] = inplaceMethWithArgs;
	        Matrix[methodWithArg[i]] = staticMethWithArgs;
	      }
	    } else {
	      var tmplVar = {
	        name: methodWithArg[2],
	        args: args,
	        method: methodWithArg[0]
	      };
	      var inplaceMethod2 = eval(fillTemplateFunction(inplaceMethodWithOneArg, tmplVar));
	      var inplaceMethodS = eval(fillTemplateFunction(inplaceMethodWithOneArgScalar, tmplVar));
	      var inplaceMethodM = eval(fillTemplateFunction(inplaceMethodWithOneArgMatrix, tmplVar));
	      var staticMethod2 = eval(fillTemplateFunction(staticMethodWithOneArg, tmplVar));

	      for (i = 2; i < methodWithArg.length; i++) {
	        Matrix.prototype[methodWithArg[i]] = inplaceMethod2;
	        Matrix.prototype[methodWithArg[i] + 'M'] = inplaceMethodM;
	        Matrix.prototype[methodWithArg[i] + 'S'] = inplaceMethodS;
	        Matrix[methodWithArg[i]] = staticMethod2;
	      }
	    }
	  }

	  function fillTemplateFunction(template, values) {
	    for (var value in values) {
	      template = template.replace(new RegExp('%' + value + '%', 'g'), values[value]);
	    }

	    return template;
	  }

	  return Matrix;
	}

	class Matrix extends abstractMatrix_1(Array) {
	  constructor(nRows, nColumns) {
	    var i;

	    if (arguments.length === 1 && typeof nRows === 'number') {
	      return new Array(nRows);
	    }

	    if (Matrix.isMatrix(nRows)) {
	      return nRows.clone();
	    } else if (Number.isInteger(nRows) && nRows > 0) {
	      // Create an empty matrix
	      super(nRows);

	      if (Number.isInteger(nColumns) && nColumns > 0) {
	        for (i = 0; i < nRows; i++) {
	          this[i] = new Array(nColumns);
	        }
	      } else {
	        throw new TypeError('nColumns must be a positive integer');
	      }
	    } else if (Array.isArray(nRows)) {
	      // Copy the values from the 2D array
	      const matrix = nRows;
	      nRows = matrix.length;
	      nColumns = matrix[0].length;

	      if (typeof nColumns !== 'number' || nColumns === 0) {
	        throw new TypeError('Data must be a 2D array with at least one element');
	      }

	      super(nRows);

	      for (i = 0; i < nRows; i++) {
	        if (matrix[i].length !== nColumns) {
	          throw new RangeError('Inconsistent array dimensions');
	        }

	        this[i] = [].concat(matrix[i]);
	      }
	    } else {
	      throw new TypeError('First argument must be a positive number or an array');
	    }

	    this.rows = nRows;
	    this.columns = nColumns;
	    return this;
	  }

	  set(rowIndex, columnIndex, value) {
	    this[rowIndex][columnIndex] = value;
	    return this;
	  }

	  get(rowIndex, columnIndex) {
	    return this[rowIndex][columnIndex];
	  }
	  /**
	   * Creates an exact and independent copy of the matrix
	   * @return {Matrix}
	   */


	  clone() {
	    var newMatrix = new this.constructor[Symbol.species](this.rows, this.columns);

	    for (var row = 0; row < this.rows; row++) {
	      for (var column = 0; column < this.columns; column++) {
	        newMatrix.set(row, column, this.get(row, column));
	      }
	    }

	    return newMatrix;
	  }
	  /**
	   * Removes a row from the given index
	   * @param {number} index - Row index
	   * @return {Matrix} this
	   */


	  removeRow(index) {
	    util$1.checkRowIndex(this, index);

	    if (this.rows === 1) {
	      throw new RangeError('A matrix cannot have less than one row');
	    }

	    this.splice(index, 1);
	    this.rows -= 1;
	    return this;
	  }
	  /**
	   * Adds a row at the given index
	   * @param {number} [index = this.rows] - Row index
	   * @param {Array|Matrix} array - Array or vector
	   * @return {Matrix} this
	   */


	  addRow(index, array) {
	    if (array === undefined) {
	      array = index;
	      index = this.rows;
	    }

	    util$1.checkRowIndex(this, index, true);
	    array = util$1.checkRowVector(this, array, true);
	    this.splice(index, 0, array);
	    this.rows += 1;
	    return this;
	  }
	  /**
	   * Removes a column from the given index
	   * @param {number} index - Column index
	   * @return {Matrix} this
	   */


	  removeColumn(index) {
	    util$1.checkColumnIndex(this, index);

	    if (this.columns === 1) {
	      throw new RangeError('A matrix cannot have less than one column');
	    }

	    for (var i = 0; i < this.rows; i++) {
	      this[i].splice(index, 1);
	    }

	    this.columns -= 1;
	    return this;
	  }
	  /**
	   * Adds a column at the given index
	   * @param {number} [index = this.columns] - Column index
	   * @param {Array|Matrix} array - Array or vector
	   * @return {Matrix} this
	   */


	  addColumn(index, array) {
	    if (typeof array === 'undefined') {
	      array = index;
	      index = this.columns;
	    }

	    util$1.checkColumnIndex(this, index, true);
	    array = util$1.checkColumnVector(this, array);

	    for (var i = 0; i < this.rows; i++) {
	      this[i].splice(index, 0, array[i]);
	    }

	    this.columns += 1;
	    return this;
	  }

	}

	var Matrix_1 = Matrix;
	Matrix.abstractMatrix = abstractMatrix_1;
	var matrix$2 = {
	  Matrix: Matrix_1
	};

	const Matrix$1 = matrix$2.Matrix;
	const hypotenuse$2 = util.hypotenuse;
	const getFilled2DArray$2 = util.getFilled2DArray;
	const defaultOptions$2 = {
	  assumeSymmetric: false
	}; // https://github.com/lutzroeder/Mapack/blob/master/Source/EigenvalueDecomposition.cs

	function EigenvalueDecomposition(matrix, options) {
	  options = Object.assign({}, defaultOptions$2, options);

	  if (!(this instanceof EigenvalueDecomposition)) {
	    return new EigenvalueDecomposition(matrix, options);
	  }

	  matrix = Matrix$1.checkMatrix(matrix);

	  if (!matrix.isSquare()) {
	    throw new Error('Matrix is not a square matrix');
	  }

	  var n = matrix.columns,
	      V = getFilled2DArray$2(n, n, 0),
	      d = new Array(n),
	      e = new Array(n),
	      value = matrix,
	      i,
	      j;
	  var isSymmetric = false;

	  if (options.assumeSymmetric) {
	    isSymmetric = true;
	  } else {
	    isSymmetric = matrix.isSymmetric();
	  }

	  if (isSymmetric) {
	    for (i = 0; i < n; i++) {
	      for (j = 0; j < n; j++) {
	        V[i][j] = value.get(i, j);
	      }
	    }

	    tred2(n, e, d, V);
	    tql2(n, e, d, V);
	  } else {
	    var H = getFilled2DArray$2(n, n, 0),
	        ort = new Array(n);

	    for (j = 0; j < n; j++) {
	      for (i = 0; i < n; i++) {
	        H[i][j] = value.get(i, j);
	      }
	    }

	    orthes(n, H, ort, V);
	    hqr2(n, e, d, V, H);
	  }

	  this.n = n;
	  this.e = e;
	  this.d = d;
	  this.V = V;
	}

	EigenvalueDecomposition.prototype = {
	  get realEigenvalues() {
	    return this.d;
	  },

	  get imaginaryEigenvalues() {
	    return this.e;
	  },

	  get eigenvectorMatrix() {
	    if (!Matrix$1.isMatrix(this.V)) {
	      this.V = new Matrix$1(this.V);
	    }

	    return this.V;
	  },

	  get diagonalMatrix() {
	    var n = this.n,
	        e = this.e,
	        d = this.d,
	        X = new Matrix$1(n, n),
	        i,
	        j;

	    for (i = 0; i < n; i++) {
	      for (j = 0; j < n; j++) {
	        X[i][j] = 0;
	      }

	      X[i][i] = d[i];

	      if (e[i] > 0) {
	        X[i][i + 1] = e[i];
	      } else if (e[i] < 0) {
	        X[i][i - 1] = e[i];
	      }
	    }

	    return X;
	  }

	};

	function tred2(n, e, d, V) {
	  var f, g, h, i, j, k, hh, scale;

	  for (j = 0; j < n; j++) {
	    d[j] = V[n - 1][j];
	  }

	  for (i = n - 1; i > 0; i--) {
	    scale = 0;
	    h = 0;

	    for (k = 0; k < i; k++) {
	      scale = scale + Math.abs(d[k]);
	    }

	    if (scale === 0) {
	      e[i] = d[i - 1];

	      for (j = 0; j < i; j++) {
	        d[j] = V[i - 1][j];
	        V[i][j] = 0;
	        V[j][i] = 0;
	      }
	    } else {
	      for (k = 0; k < i; k++) {
	        d[k] /= scale;
	        h += d[k] * d[k];
	      }

	      f = d[i - 1];
	      g = Math.sqrt(h);

	      if (f > 0) {
	        g = -g;
	      }

	      e[i] = scale * g;
	      h = h - f * g;
	      d[i - 1] = f - g;

	      for (j = 0; j < i; j++) {
	        e[j] = 0;
	      }

	      for (j = 0; j < i; j++) {
	        f = d[j];
	        V[j][i] = f;
	        g = e[j] + V[j][j] * f;

	        for (k = j + 1; k <= i - 1; k++) {
	          g += V[k][j] * d[k];
	          e[k] += V[k][j] * f;
	        }

	        e[j] = g;
	      }

	      f = 0;

	      for (j = 0; j < i; j++) {
	        e[j] /= h;
	        f += e[j] * d[j];
	      }

	      hh = f / (h + h);

	      for (j = 0; j < i; j++) {
	        e[j] -= hh * d[j];
	      }

	      for (j = 0; j < i; j++) {
	        f = d[j];
	        g = e[j];

	        for (k = j; k <= i - 1; k++) {
	          V[k][j] -= f * e[k] + g * d[k];
	        }

	        d[j] = V[i - 1][j];
	        V[i][j] = 0;
	      }
	    }

	    d[i] = h;
	  }

	  for (i = 0; i < n - 1; i++) {
	    V[n - 1][i] = V[i][i];
	    V[i][i] = 1;
	    h = d[i + 1];

	    if (h !== 0) {
	      for (k = 0; k <= i; k++) {
	        d[k] = V[k][i + 1] / h;
	      }

	      for (j = 0; j <= i; j++) {
	        g = 0;

	        for (k = 0; k <= i; k++) {
	          g += V[k][i + 1] * V[k][j];
	        }

	        for (k = 0; k <= i; k++) {
	          V[k][j] -= g * d[k];
	        }
	      }
	    }

	    for (k = 0; k <= i; k++) {
	      V[k][i + 1] = 0;
	    }
	  }

	  for (j = 0; j < n; j++) {
	    d[j] = V[n - 1][j];
	    V[n - 1][j] = 0;
	  }

	  V[n - 1][n - 1] = 1;
	  e[0] = 0;
	}

	function tql2(n, e, d, V) {
	  var g, h, i, j, k, l, m, p, r, dl1, c, c2, c3, el1, s, s2;

	  for (i = 1; i < n; i++) {
	    e[i - 1] = e[i];
	  }

	  e[n - 1] = 0;
	  var f = 0,
	      tst1 = 0,
	      eps = Math.pow(2, -52);

	  for (l = 0; l < n; l++) {
	    tst1 = Math.max(tst1, Math.abs(d[l]) + Math.abs(e[l]));
	    m = l;

	    while (m < n) {
	      if (Math.abs(e[m]) <= eps * tst1) {
	        break;
	      }

	      m++;
	    }

	    if (m > l) {

	      do {
	        g = d[l];
	        p = (d[l + 1] - g) / (2 * e[l]);
	        r = hypotenuse$2(p, 1);

	        if (p < 0) {
	          r = -r;
	        }

	        d[l] = e[l] / (p + r);
	        d[l + 1] = e[l] * (p + r);
	        dl1 = d[l + 1];
	        h = g - d[l];

	        for (i = l + 2; i < n; i++) {
	          d[i] -= h;
	        }

	        f = f + h;
	        p = d[m];
	        c = 1;
	        c2 = c;
	        c3 = c;
	        el1 = e[l + 1];
	        s = 0;
	        s2 = 0;

	        for (i = m - 1; i >= l; i--) {
	          c3 = c2;
	          c2 = c;
	          s2 = s;
	          g = c * e[i];
	          h = c * p;
	          r = hypotenuse$2(p, e[i]);
	          e[i + 1] = s * r;
	          s = e[i] / r;
	          c = p / r;
	          p = c * d[i] - s * g;
	          d[i + 1] = h + s * (c * g + s * d[i]);

	          for (k = 0; k < n; k++) {
	            h = V[k][i + 1];
	            V[k][i + 1] = s * V[k][i] + c * h;
	            V[k][i] = c * V[k][i] - s * h;
	          }
	        }

	        p = -s * s2 * c3 * el1 * e[l] / dl1;
	        e[l] = s * p;
	        d[l] = c * p;
	      } while (Math.abs(e[l]) > eps * tst1);
	    }

	    d[l] = d[l] + f;
	    e[l] = 0;
	  }

	  for (i = 0; i < n - 1; i++) {
	    k = i;
	    p = d[i];

	    for (j = i + 1; j < n; j++) {
	      if (d[j] < p) {
	        k = j;
	        p = d[j];
	      }
	    }

	    if (k !== i) {
	      d[k] = d[i];
	      d[i] = p;

	      for (j = 0; j < n; j++) {
	        p = V[j][i];
	        V[j][i] = V[j][k];
	        V[j][k] = p;
	      }
	    }
	  }
	}

	function orthes(n, H, ort, V) {
	  var low = 0,
	      high = n - 1,
	      f,
	      g,
	      h,
	      i,
	      j,
	      m,
	      scale;

	  for (m = low + 1; m <= high - 1; m++) {
	    scale = 0;

	    for (i = m; i <= high; i++) {
	      scale = scale + Math.abs(H[i][m - 1]);
	    }

	    if (scale !== 0) {
	      h = 0;

	      for (i = high; i >= m; i--) {
	        ort[i] = H[i][m - 1] / scale;
	        h += ort[i] * ort[i];
	      }

	      g = Math.sqrt(h);

	      if (ort[m] > 0) {
	        g = -g;
	      }

	      h = h - ort[m] * g;
	      ort[m] = ort[m] - g;

	      for (j = m; j < n; j++) {
	        f = 0;

	        for (i = high; i >= m; i--) {
	          f += ort[i] * H[i][j];
	        }

	        f = f / h;

	        for (i = m; i <= high; i++) {
	          H[i][j] -= f * ort[i];
	        }
	      }

	      for (i = 0; i <= high; i++) {
	        f = 0;

	        for (j = high; j >= m; j--) {
	          f += ort[j] * H[i][j];
	        }

	        f = f / h;

	        for (j = m; j <= high; j++) {
	          H[i][j] -= f * ort[j];
	        }
	      }

	      ort[m] = scale * ort[m];
	      H[m][m - 1] = scale * g;
	    }
	  }

	  for (i = 0; i < n; i++) {
	    for (j = 0; j < n; j++) {
	      V[i][j] = i === j ? 1 : 0;
	    }
	  }

	  for (m = high - 1; m >= low + 1; m--) {
	    if (H[m][m - 1] !== 0) {
	      for (i = m + 1; i <= high; i++) {
	        ort[i] = H[i][m - 1];
	      }

	      for (j = m; j <= high; j++) {
	        g = 0;

	        for (i = m; i <= high; i++) {
	          g += ort[i] * V[i][j];
	        }

	        g = g / ort[m] / H[m][m - 1];

	        for (i = m; i <= high; i++) {
	          V[i][j] += g * ort[i];
	        }
	      }
	    }
	  }
	}

	function hqr2(nn, e, d, V, H) {
	  var n = nn - 1,
	      low = 0,
	      high = nn - 1,
	      eps = Math.pow(2, -52),
	      exshift = 0,
	      norm = 0,
	      p = 0,
	      q = 0,
	      r = 0,
	      s = 0,
	      z = 0,
	      iter = 0,
	      i,
	      j,
	      k,
	      l,
	      m,
	      t,
	      w,
	      x,
	      y,
	      ra,
	      sa,
	      vr,
	      vi,
	      notlast,
	      cdivres;

	  for (i = 0; i < nn; i++) {
	    if (i < low || i > high) {
	      d[i] = H[i][i];
	      e[i] = 0;
	    }

	    for (j = Math.max(i - 1, 0); j < nn; j++) {
	      norm = norm + Math.abs(H[i][j]);
	    }
	  }

	  while (n >= low) {
	    l = n;

	    while (l > low) {
	      s = Math.abs(H[l - 1][l - 1]) + Math.abs(H[l][l]);

	      if (s === 0) {
	        s = norm;
	      }

	      if (Math.abs(H[l][l - 1]) < eps * s) {
	        break;
	      }

	      l--;
	    }

	    if (l === n) {
	      H[n][n] = H[n][n] + exshift;
	      d[n] = H[n][n];
	      e[n] = 0;
	      n--;
	      iter = 0;
	    } else if (l === n - 1) {
	      w = H[n][n - 1] * H[n - 1][n];
	      p = (H[n - 1][n - 1] - H[n][n]) / 2;
	      q = p * p + w;
	      z = Math.sqrt(Math.abs(q));
	      H[n][n] = H[n][n] + exshift;
	      H[n - 1][n - 1] = H[n - 1][n - 1] + exshift;
	      x = H[n][n];

	      if (q >= 0) {
	        z = p >= 0 ? p + z : p - z;
	        d[n - 1] = x + z;
	        d[n] = d[n - 1];

	        if (z !== 0) {
	          d[n] = x - w / z;
	        }

	        e[n - 1] = 0;
	        e[n] = 0;
	        x = H[n][n - 1];
	        s = Math.abs(x) + Math.abs(z);
	        p = x / s;
	        q = z / s;
	        r = Math.sqrt(p * p + q * q);
	        p = p / r;
	        q = q / r;

	        for (j = n - 1; j < nn; j++) {
	          z = H[n - 1][j];
	          H[n - 1][j] = q * z + p * H[n][j];
	          H[n][j] = q * H[n][j] - p * z;
	        }

	        for (i = 0; i <= n; i++) {
	          z = H[i][n - 1];
	          H[i][n - 1] = q * z + p * H[i][n];
	          H[i][n] = q * H[i][n] - p * z;
	        }

	        for (i = low; i <= high; i++) {
	          z = V[i][n - 1];
	          V[i][n - 1] = q * z + p * V[i][n];
	          V[i][n] = q * V[i][n] - p * z;
	        }
	      } else {
	        d[n - 1] = x + p;
	        d[n] = x + p;
	        e[n - 1] = z;
	        e[n] = -z;
	      }

	      n = n - 2;
	      iter = 0;
	    } else {
	      x = H[n][n];
	      y = 0;
	      w = 0;

	      if (l < n) {
	        y = H[n - 1][n - 1];
	        w = H[n][n - 1] * H[n - 1][n];
	      }

	      if (iter === 10) {
	        exshift += x;

	        for (i = low; i <= n; i++) {
	          H[i][i] -= x;
	        }

	        s = Math.abs(H[n][n - 1]) + Math.abs(H[n - 1][n - 2]);
	        x = y = 0.75 * s;
	        w = -0.4375 * s * s;
	      }

	      if (iter === 30) {
	        s = (y - x) / 2;
	        s = s * s + w;

	        if (s > 0) {
	          s = Math.sqrt(s);

	          if (y < x) {
	            s = -s;
	          }

	          s = x - w / ((y - x) / 2 + s);

	          for (i = low; i <= n; i++) {
	            H[i][i] -= s;
	          }

	          exshift += s;
	          x = y = w = 0.964;
	        }
	      }

	      iter = iter + 1;
	      m = n - 2;

	      while (m >= l) {
	        z = H[m][m];
	        r = x - z;
	        s = y - z;
	        p = (r * s - w) / H[m + 1][m] + H[m][m + 1];
	        q = H[m + 1][m + 1] - z - r - s;
	        r = H[m + 2][m + 1];
	        s = Math.abs(p) + Math.abs(q) + Math.abs(r);
	        p = p / s;
	        q = q / s;
	        r = r / s;

	        if (m === l) {
	          break;
	        }

	        if (Math.abs(H[m][m - 1]) * (Math.abs(q) + Math.abs(r)) < eps * (Math.abs(p) * (Math.abs(H[m - 1][m - 1]) + Math.abs(z) + Math.abs(H[m + 1][m + 1])))) {
	          break;
	        }

	        m--;
	      }

	      for (i = m + 2; i <= n; i++) {
	        H[i][i - 2] = 0;

	        if (i > m + 2) {
	          H[i][i - 3] = 0;
	        }
	      }

	      for (k = m; k <= n - 1; k++) {
	        notlast = k !== n - 1;

	        if (k !== m) {
	          p = H[k][k - 1];
	          q = H[k + 1][k - 1];
	          r = notlast ? H[k + 2][k - 1] : 0;
	          x = Math.abs(p) + Math.abs(q) + Math.abs(r);

	          if (x !== 0) {
	            p = p / x;
	            q = q / x;
	            r = r / x;
	          }
	        }

	        if (x === 0) {
	          break;
	        }

	        s = Math.sqrt(p * p + q * q + r * r);

	        if (p < 0) {
	          s = -s;
	        }

	        if (s !== 0) {
	          if (k !== m) {
	            H[k][k - 1] = -s * x;
	          } else if (l !== m) {
	            H[k][k - 1] = -H[k][k - 1];
	          }

	          p = p + s;
	          x = p / s;
	          y = q / s;
	          z = r / s;
	          q = q / p;
	          r = r / p;

	          for (j = k; j < nn; j++) {
	            p = H[k][j] + q * H[k + 1][j];

	            if (notlast) {
	              p = p + r * H[k + 2][j];
	              H[k + 2][j] = H[k + 2][j] - p * z;
	            }

	            H[k][j] = H[k][j] - p * x;
	            H[k + 1][j] = H[k + 1][j] - p * y;
	          }

	          for (i = 0; i <= Math.min(n, k + 3); i++) {
	            p = x * H[i][k] + y * H[i][k + 1];

	            if (notlast) {
	              p = p + z * H[i][k + 2];
	              H[i][k + 2] = H[i][k + 2] - p * r;
	            }

	            H[i][k] = H[i][k] - p;
	            H[i][k + 1] = H[i][k + 1] - p * q;
	          }

	          for (i = low; i <= high; i++) {
	            p = x * V[i][k] + y * V[i][k + 1];

	            if (notlast) {
	              p = p + z * V[i][k + 2];
	              V[i][k + 2] = V[i][k + 2] - p * r;
	            }

	            V[i][k] = V[i][k] - p;
	            V[i][k + 1] = V[i][k + 1] - p * q;
	          }
	        }
	      }
	    }
	  }

	  if (norm === 0) {
	    return;
	  }

	  for (n = nn - 1; n >= 0; n--) {
	    p = d[n];
	    q = e[n];

	    if (q === 0) {
	      l = n;
	      H[n][n] = 1;

	      for (i = n - 1; i >= 0; i--) {
	        w = H[i][i] - p;
	        r = 0;

	        for (j = l; j <= n; j++) {
	          r = r + H[i][j] * H[j][n];
	        }

	        if (e[i] < 0) {
	          z = w;
	          s = r;
	        } else {
	          l = i;

	          if (e[i] === 0) {
	            H[i][n] = w !== 0 ? -r / w : -r / (eps * norm);
	          } else {
	            x = H[i][i + 1];
	            y = H[i + 1][i];
	            q = (d[i] - p) * (d[i] - p) + e[i] * e[i];
	            t = (x * s - z * r) / q;
	            H[i][n] = t;
	            H[i + 1][n] = Math.abs(x) > Math.abs(z) ? (-r - w * t) / x : (-s - y * t) / z;
	          }

	          t = Math.abs(H[i][n]);

	          if (eps * t * t > 1) {
	            for (j = i; j <= n; j++) {
	              H[j][n] = H[j][n] / t;
	            }
	          }
	        }
	      }
	    } else if (q < 0) {
	      l = n - 1;

	      if (Math.abs(H[n][n - 1]) > Math.abs(H[n - 1][n])) {
	        H[n - 1][n - 1] = q / H[n][n - 1];
	        H[n - 1][n] = -(H[n][n] - p) / H[n][n - 1];
	      } else {
	        cdivres = cdiv(0, -H[n - 1][n], H[n - 1][n - 1] - p, q);
	        H[n - 1][n - 1] = cdivres[0];
	        H[n - 1][n] = cdivres[1];
	      }

	      H[n][n - 1] = 0;
	      H[n][n] = 1;

	      for (i = n - 2; i >= 0; i--) {
	        ra = 0;
	        sa = 0;

	        for (j = l; j <= n; j++) {
	          ra = ra + H[i][j] * H[j][n - 1];
	          sa = sa + H[i][j] * H[j][n];
	        }

	        w = H[i][i] - p;

	        if (e[i] < 0) {
	          z = w;
	          r = ra;
	          s = sa;
	        } else {
	          l = i;

	          if (e[i] === 0) {
	            cdivres = cdiv(-ra, -sa, w, q);
	            H[i][n - 1] = cdivres[0];
	            H[i][n] = cdivres[1];
	          } else {
	            x = H[i][i + 1];
	            y = H[i + 1][i];
	            vr = (d[i] - p) * (d[i] - p) + e[i] * e[i] - q * q;
	            vi = (d[i] - p) * 2 * q;

	            if (vr === 0 && vi === 0) {
	              vr = eps * norm * (Math.abs(w) + Math.abs(q) + Math.abs(x) + Math.abs(y) + Math.abs(z));
	            }

	            cdivres = cdiv(x * r - z * ra + q * sa, x * s - z * sa - q * ra, vr, vi);
	            H[i][n - 1] = cdivres[0];
	            H[i][n] = cdivres[1];

	            if (Math.abs(x) > Math.abs(z) + Math.abs(q)) {
	              H[i + 1][n - 1] = (-ra - w * H[i][n - 1] + q * H[i][n]) / x;
	              H[i + 1][n] = (-sa - w * H[i][n] - q * H[i][n - 1]) / x;
	            } else {
	              cdivres = cdiv(-r - y * H[i][n - 1], -s - y * H[i][n], z, q);
	              H[i + 1][n - 1] = cdivres[0];
	              H[i + 1][n] = cdivres[1];
	            }
	          }

	          t = Math.max(Math.abs(H[i][n - 1]), Math.abs(H[i][n]));

	          if (eps * t * t > 1) {
	            for (j = i; j <= n; j++) {
	              H[j][n - 1] = H[j][n - 1] / t;
	              H[j][n] = H[j][n] / t;
	            }
	          }
	        }
	      }
	    }
	  }

	  for (i = 0; i < nn; i++) {
	    if (i < low || i > high) {
	      for (j = i; j < nn; j++) {
	        V[i][j] = H[i][j];
	      }
	    }
	  }

	  for (j = nn - 1; j >= low; j--) {
	    for (i = low; i <= high; i++) {
	      z = 0;

	      for (k = low; k <= Math.min(j, high); k++) {
	        z = z + V[i][k] * H[k][j];
	      }

	      V[i][j] = z;
	    }
	  }
	}

	function cdiv(xr, xi, yr, yi) {
	  var r, d;

	  if (Math.abs(yr) > Math.abs(yi)) {
	    r = yi / yr;
	    d = yr + r * yi;
	    return [(xr + r * xi) / d, (xi - r * xr) / d];
	  } else {
	    r = yr / yi;
	    d = yi + r * yr;
	    return [(r * xr + xi) / d, (r * xi - xr) / d];
	  }
	}

	var evd = EigenvalueDecomposition;

	var Matrix$2 = matrix$2.Matrix;
	var hypotenuse$3 = util.hypotenuse; //https://github.com/lutzroeder/Mapack/blob/master/Source/QrDecomposition.cs

	function QrDecomposition(value) {
	  if (!(this instanceof QrDecomposition)) {
	    return new QrDecomposition(value);
	  }

	  value = Matrix$2.checkMatrix(value);
	  var qr = value.clone(),
	      m = value.rows,
	      n = value.columns,
	      rdiag = new Array(n),
	      i,
	      j,
	      k,
	      s;

	  for (k = 0; k < n; k++) {
	    var nrm = 0;

	    for (i = k; i < m; i++) {
	      nrm = hypotenuse$3(nrm, qr[i][k]);
	    }

	    if (nrm !== 0) {
	      if (qr[k][k] < 0) {
	        nrm = -nrm;
	      }

	      for (i = k; i < m; i++) {
	        qr[i][k] /= nrm;
	      }

	      qr[k][k] += 1;

	      for (j = k + 1; j < n; j++) {
	        s = 0;

	        for (i = k; i < m; i++) {
	          s += qr[i][k] * qr[i][j];
	        }

	        s = -s / qr[k][k];

	        for (i = k; i < m; i++) {
	          qr[i][j] += s * qr[i][k];
	        }
	      }
	    }

	    rdiag[k] = -nrm;
	  }

	  this.QR = qr;
	  this.Rdiag = rdiag;
	}

	QrDecomposition.prototype = {
	  solve: function solve(value) {
	    value = Matrix$2.checkMatrix(value);
	    var qr = this.QR,
	        m = qr.rows;

	    if (value.rows !== m) {
	      throw new Error('Matrix row dimensions must agree');
	    }

	    if (!this.isFullRank()) {
	      throw new Error('Matrix is rank deficient');
	    }

	    var count = value.columns;
	    var X = value.clone();
	    var n = qr.columns;
	    var i, j, k, s;

	    for (k = 0; k < n; k++) {
	      for (j = 0; j < count; j++) {
	        s = 0;

	        for (i = k; i < m; i++) {
	          s += qr[i][k] * X[i][j];
	        }

	        s = -s / qr[k][k];

	        for (i = k; i < m; i++) {
	          X[i][j] += s * qr[i][k];
	        }
	      }
	    }

	    for (k = n - 1; k >= 0; k--) {
	      for (j = 0; j < count; j++) {
	        X[k][j] /= this.Rdiag[k];
	      }

	      for (i = 0; i < k; i++) {
	        for (j = 0; j < count; j++) {
	          X[i][j] -= X[k][j] * qr[i][k];
	        }
	      }
	    }

	    return X.subMatrix(0, n - 1, 0, count - 1);
	  },
	  isFullRank: function isFullRank() {
	    var columns = this.QR.columns;

	    for (var i = 0; i < columns; i++) {
	      if (this.Rdiag[i] === 0) {
	        return false;
	      }
	    }

	    return true;
	  },

	  get upperTriangularMatrix() {
	    var qr = this.QR,
	        n = qr.columns,
	        X = new Matrix$2(n, n),
	        i,
	        j;

	    for (i = 0; i < n; i++) {
	      for (j = 0; j < n; j++) {
	        if (i < j) {
	          X[i][j] = qr[i][j];
	        } else if (i === j) {
	          X[i][j] = this.Rdiag[i];
	        } else {
	          X[i][j] = 0;
	        }
	      }
	    }

	    return X;
	  },

	  get orthogonalMatrix() {
	    var qr = this.QR,
	        rows = qr.rows,
	        columns = qr.columns,
	        X = new Matrix$2(rows, columns),
	        i,
	        j,
	        k,
	        s;

	    for (k = columns - 1; k >= 0; k--) {
	      for (i = 0; i < rows; i++) {
	        X[i][k] = 0;
	      }

	      X[k][k] = 1;

	      for (j = k; j < columns; j++) {
	        if (qr[k][k] !== 0) {
	          s = 0;

	          for (i = k; i < rows; i++) {
	            s += qr[i][k] * X[i][j];
	          }

	          s = -s / qr[k][k];

	          for (i = k; i < rows; i++) {
	            X[i][j] += s * qr[i][k];
	          }
	        }
	      }
	    }

	    return X;
	  }

	};
	var qr = QrDecomposition;

	var Matrix$3 = matrix$2.Matrix; // https://github.com/lutzroeder/Mapack/blob/master/Source/CholeskyDecomposition.cs

	function CholeskyDecomposition(value) {
	  if (!(this instanceof CholeskyDecomposition)) {
	    return new CholeskyDecomposition(value);
	  }

	  value = Matrix$3.checkMatrix(value);

	  if (!value.isSymmetric()) {
	    throw new Error('Matrix is not symmetric');
	  }

	  var a = value,
	      dimension = a.rows,
	      l = new Matrix$3(dimension, dimension),
	      positiveDefinite = true,
	      i,
	      j,
	      k;

	  for (j = 0; j < dimension; j++) {
	    var Lrowj = l[j];
	    var d = 0;

	    for (k = 0; k < j; k++) {
	      var Lrowk = l[k];
	      var s = 0;

	      for (i = 0; i < k; i++) {
	        s += Lrowk[i] * Lrowj[i];
	      }

	      Lrowj[k] = s = (a[j][k] - s) / l[k][k];
	      d = d + s * s;
	    }

	    d = a[j][j] - d;
	    positiveDefinite &= d > 0;
	    l[j][j] = Math.sqrt(Math.max(d, 0));

	    for (k = j + 1; k < dimension; k++) {
	      l[j][k] = 0;
	    }
	  }

	  if (!positiveDefinite) {
	    throw new Error('Matrix is not positive definite');
	  }

	  this.L = l;
	}

	CholeskyDecomposition.prototype = {
	  get lowerTriangularMatrix() {
	    return this.L;
	  },

	  solve: function solve(value) {
	    value = Matrix$3.checkMatrix(value);
	    var l = this.L,
	        dimension = l.rows;

	    if (value.rows !== dimension) {
	      throw new Error('Matrix dimensions do not match');
	    }

	    var count = value.columns,
	        B = value.clone(),
	        i,
	        j,
	        k;

	    for (k = 0; k < dimension; k++) {
	      for (j = 0; j < count; j++) {
	        for (i = 0; i < k; i++) {
	          B[k][j] -= B[i][j] * l[k][i];
	        }

	        B[k][j] /= l[k][k];
	      }
	    }

	    for (k = dimension - 1; k >= 0; k--) {
	      for (j = 0; j < count; j++) {
	        for (i = k + 1; i < dimension; i++) {
	          B[k][j] -= B[i][j] * l[i][k];
	        }

	        B[k][j] /= l[k][k];
	      }
	    }

	    return B;
	  }
	};
	var cholesky = CholeskyDecomposition;

	var Matrix$4 = matrix$2.Matrix;

	function inverse(matrix) {
	  matrix = Matrix$4.checkMatrix(matrix);
	  return solve(matrix, Matrix$4.eye(matrix.rows));
	}
	/**
	 * Returns the inverse
	 * @memberOf Matrix
	 * @static
	 * @param {Matrix} matrix
	 * @return {Matrix} matrix
	 * @alias inv
	 */


	Matrix$4.inverse = Matrix$4.inv = inverse;
	/**
	 * Returns the inverse
	 * @memberOf Matrix
	 * @static
	 * @param {Matrix} matrix
	 * @return {Matrix} matrix
	 * @alias inv
	 */

	Matrix$4.prototype.inverse = Matrix$4.prototype.inv = function () {
	  return inverse(this);
	};

	function solve(leftHandSide, rightHandSide) {
	  leftHandSide = Matrix$4.checkMatrix(leftHandSide);
	  rightHandSide = Matrix$4.checkMatrix(rightHandSide);
	  return leftHandSide.isSquare() ? new lu(leftHandSide).solve(rightHandSide) : new qr(leftHandSide).solve(rightHandSide);
	}

	Matrix$4.solve = solve;

	Matrix$4.prototype.solve = function (other) {
	  return solve(this, other);
	};

	var decompositions = {
	  SingularValueDecomposition: svd,
	  SVD: svd,
	  EigenvalueDecomposition: evd,
	  EVD: evd,
	  LuDecomposition: lu,
	  LU: lu,
	  QrDecomposition: qr,
	  QR: qr,
	  CholeskyDecomposition: cholesky,
	  CHO: cholesky,
	  inverse: inverse,
	  solve: solve
	};

	var src$3 = createCommonjsModule(function (module) {

	  module.exports = matrix$2.Matrix;
	  module.exports.Decompositions = module.exports.DC = decompositions;
	});
	var src_1$1 = src$3.Decompositions;
	var src_2$1 = src$3.DC;

	function matrix$3(A, B) {
	  return new src$3(A, B);
	}

	function ones(rows, cols) {
	  return src$3.ones(rows, cols);
	}

	function eye(rows, cols) {
	  return src$3.eye(rows, cols);
	}

	function zeros(rows, cols) {
	  return src$3.zeros(rows, cols);
	}

	function random(rows, cols) {
	  return src$3.rand(rows, cols);
	}

	function transpose$2(A) {
	  if (typeof A == 'number') return A;
	  var result = A.clone();
	  return result.transpose();
	}

	function add(A, B) {
	  if (typeof A == 'number' && typeof B === 'number') return A + B;
	  if (typeof A == 'number') return this.add(B, A);
	  var result = A.clone();
	  return result.add(B);
	}

	function subtract(A, B) {
	  if (typeof A == 'number' && typeof B === 'number') return A - B;
	  if (typeof A == 'number') return this.subtract(B, A);
	  var result = A.clone();
	  return result.sub(B);
	}

	function multiply(A, B) {
	  if (typeof A == 'number' && typeof B === 'number') return A * B;
	  if (typeof A == 'number') return this.multiply(B, A);
	  var result = A.clone();
	  if (typeof B === 'number') result.mul(B);else result = result.mmul(B);
	  if (result.rows == 1 && result.columns == 1) return result[0][0];else return result;
	}

	function dotMultiply(A, B) {
	  var result = A.clone();
	  return result.mul(B);
	}

	function dotDivide(A, B) {
	  var result = A.clone();
	  return result.div(B);
	}

	function diag(A) {
	  var diag = null;
	  var rows = A.rows,
	      cols = A.columns,
	      j,
	      r; //It is an array

	  if (typeof cols === "undefined" && typeof A == 'object') {
	    if (A[0] && A[0].length) {
	      rows = A.length;
	      cols = A[0].length;
	      r = Math.min(rows, cols);
	      diag = src$3.zeros(cols, cols);

	      for (j = 0; j < cols; j++) {
	        diag[j][j] = A[j][j];
	      }
	    } else {
	      cols = A.length;
	      diag = src$3.zeros(cols, cols);

	      for (j = 0; j < cols; j++) {
	        diag[j][j] = A[j];
	      }
	    }
	  }

	  if (rows == 1) {
	    diag = src$3.zeros(cols, cols);

	    for (j = 0; j < cols; j++) {
	      diag[j][j] = A[0][j];
	    }
	  } else {
	    if (rows > 0 && cols > 0) {
	      r = Math.min(rows, cols);
	      diag = new Array(r);

	      for (j = 0; j < r; j++) {
	        diag[j] = A[j][j];
	      }
	    }
	  }

	  return diag;
	}

	function min$1(A, B) {
	  if (typeof A === 'number' && typeof B === 'number') return Math.min(A, B);
	  var ii = A.rows,
	      jj = A.columns;
	  var result = new src$3(ii, jj);

	  for (var i = 0; i < ii; i++) {
	    for (var j = 0; j < jj; j++) {
	      if (A[i][j] < B[i][j]) {
	        result[i][j] = A[i][j];
	      } else {
	        result[i][j] = B[i][j];
	      }
	    }
	  }

	  return result;
	}

	function max$1(A, B) {
	  if (typeof A === 'number' && typeof B === 'number') return Math.max(A, B);
	  var ii = A.rows,
	      jj = A.columns;
	  var result = new src$3(ii, jj);

	  for (var i = 0; i < ii; i++) {
	    for (var j = 0; j < jj; j++) {
	      if (A[i][j] > B[i][j]) {
	        result[i][j] = A[i][j];
	      } else {
	        result[i][j] = B[i][j];
	      }
	    }
	  }

	  return result;
	}

	function sqrt(A) {
	  if (typeof A === 'number') return Math.sqrt(A);
	  var ii = A.rows,
	      jj = A.columns;
	  var result = new src$3(ii, jj);

	  for (var i = 0; i < ii; i++) {
	    for (var j = 0; j < jj; j++) {
	      result[i][j] = Math.sqrt(A[i][j]);
	    }
	  }

	  return result;
	}

	function abs(A) {
	  if (typeof A === 'number') return Math.abs(A);
	  var ii = A.rows,
	      jj = A.columns;
	  var result = new src$3(ii, jj);

	  for (var i = 0; i < ii; i++) {
	    for (var j = 0; j < jj; j++) {
	      result[i][j] = Math.abs(A[i][j]);
	    }
	  }

	  return result;
	}

	function exp(A) {
	  if (typeof A === 'number') return Math.sqrt(A);
	  var ii = A.rows,
	      jj = A.columns;
	  var result = new src$3(ii, jj);

	  for (var i = 0; i < ii; i++) {
	    for (var j = 0; j < jj; j++) {
	      result[i][j] = Math.exp(A[i][j]);
	    }
	  }

	  return result;
	}

	function dotPow(A, b) {
	  if (typeof A === 'number') return Math.pow(A, b); //console.log(A);

	  var ii = A.rows,
	      jj = A.columns;
	  var result = new src$3(ii, jj);

	  for (var i = 0; i < ii; i++) {
	    for (var j = 0; j < jj; j++) {
	      result[i][j] = Math.pow(A[i][j], b);
	    }
	  }

	  return result;
	}

	function solve$1(A, B) {
	  return A.solve(B);
	}

	function inv(A) {
	  if (typeof A === "number") return 1 / A;
	  return A.inverse();
	}

	var algebra = {
	  transpose: transpose$2,
	  add: add,
	  subtract: subtract,
	  multiply: multiply,
	  dotMultiply: dotMultiply,
	  dotDivide: dotDivide,
	  diag: diag,
	  min: min$1,
	  max: max$1,
	  solve: solve$1,
	  inv: inv,
	  sqrt: sqrt,
	  exp: exp,
	  dotPow: dotPow,
	  abs: abs,
	  matrix: matrix$3,
	  ones: ones,
	  zeros: zeros,
	  random: random,
	  eye: eye
	};

	/** Levenberg Marquardt curve-fitting: minimize sum of weighted squared residuals
	 ----------  INPUT  VARIABLES  -----------
	 func   = function of n independent variables, 't', and m parameters, 'p',
	 returning the simulated model: y_hat = func(t,p,c)
	 p      = n-vector of initial guess of parameter values
	 t      = m-vectors or matrix of independent variables (used as arg to func)
	 y_dat  = m-vectors or matrix of data to be fit by func(t,p)
	 weight = weighting vector for least squares fit ( weight >= 0 ) ...
	 inverse of the standard measurement errors
	 Default:  sqrt(d.o.f. / ( y_dat' * y_dat ))
	 dp     = fractional increment of 'p' for numerical derivatives
	 dp(j)>0 central differences calculated
	 dp(j)<0 one sided 'backwards' differences calculated
	 dp(j)=0 sets corresponding partials to zero; i.e. holds p(j) fixed
	 Default:  0.001;
	 p_min  = n-vector of lower bounds for parameter values
	 p_max  = n-vector of upper bounds for parameter values
	 c      = an optional matrix of values passed to func(t,p,c)
	 opts   = vector of algorithmic parameters
	 parameter    defaults    meaning
	 opts(1)  =  prnt            3        >1 intermediate results; >2 plots
	 opts(2)  =  MaxIter      10*Npar     maximum number of iterations
	 opts(3)  =  epsilon_1       1e-3     convergence tolerance for gradient
	 opts(4)  =  epsilon_2       1e-3     convergence tolerance for parameters
	 opts(5)  =  epsilon_3       1e-3     convergence tolerance for Chi-square
	 opts(6)  =  epsilon_4       1e-2     determines acceptance of a L-M step
	 opts(7)  =  lambda_0        1e-2     initial value of L-M paramter
	 opts(8)  =  lambda_UP_fac   11       factor for increasing lambda
	 opts(9)  =  lambda_DN_fac    9       factor for decreasing lambda
	 opts(10) =  Update_Type      1       1: Levenberg-Marquardt lambda update
	 2: Quadratic update
	 3: Nielsen's lambda update equations

	 ----------  OUTPUT  VARIABLES  -----------
	 p       = least-squares optimal estimate of the parameter values
	 X2      = Chi squared criteria
	 sigma_p = asymptotic standard error of the parameters
	 sigma_y = asymptotic standard error of the curve-fit
	 corr    = correlation matrix of the parameters
	 R_sq    = R-squared cofficient of multiple determination
	 cvg_hst = convergence history

	 Henri Gavin, Dept. Civil & Environ. Engineering, Duke Univ. 22 Sep 2013
	 modified from: http://octave.sourceforge.net/optim/function/leasqr.html
	 using references by
	 Press, et al., Numerical Recipes, Cambridge Univ. Press, 1992, Chapter 15.
	 Sam Roweis       http://www.cs.toronto.edu/~roweis/notes/lm.pdf
	 Manolis Lourakis http://www.ics.forth.gr/~lourakis/levmar/levmar.pdf
	 Hans Nielson     http://www2.imm.dtu.dk/~hbn/publ/TR9905.ps
	 Mathworks        optimization toolbox reference manual
	 K. Madsen, H.B., Nielsen, and O. Tingleff
	 http://www2.imm.dtu.dk/pubdb/views/edoc_download.php/3215/pdf/imm3215.pdf
	 */

	var LM = {
	  optimize: function optimize(func, p, t, y_dat, weight, dp, p_min, p_max, c, opts) {

	    var iteration = 0; // iteration counter
	    //func_calls = 0;			// running count of function evaluations

	    if (typeof p[0] != "object") {
	      for (var i = 0; i < p.length; i++) {
	        p[i] = [p[i]];
	      }
	    } //p = p(:); y_dat = y_dat(:); 		// make column vectors


	    var i, k;
	    var eps = 2 ^ -52;
	    var Npar = p.length; //length(p); 			// number of parameters

	    var Npnt = y_dat.length; //length(y_dat);		// number of data points

	    var p_old = src$3.zeros(Npar, 1); // previous set of parameters

	    var y_old = src$3.zeros(Npnt, 1); // previous model, y_old = y_hat(t;p_old)

	    var X2 = 1e-2 / eps; // a really big initial Chi-sq value

	    var X2_old = 1e-2 / eps; // a really big initial Chi-sq value

	    var J = src$3.zeros(Npnt, Npar);

	    if (t.length != y_dat.length) {
	      console.log('lm.m error: the length of t must equal the length of y_dat');
	      length_t = t.length;
	      length_y_dat = y_dat.length;
	      var X2 = 0;

	      {
	        return;
	      }
	    }

	    weight = weight || Math.sqrt((Npnt - Npar + 1) / algebra.multiply(algebra.transpose(y_dat), y_dat));
	    dp = dp || 0.001;
	    p_min = p_min || algebra.multiply(Math.abs(p), -100);
	    p_max = p_max || algebra.multiply(Math.abs(p), 100);
	    c = c || 1; // Algorithmic Paramters
	    //prnt MaxIter  eps1  eps2  epx3  eps4  lam0  lamUP lamDN UpdateType

	    opts = opts || [3, 10 * Npar, 1e-3, 1e-3, 1e-3, 1e-2, 1e-2, 11, 9, 1];
	    var prnt = opts[0]; // >1 intermediate results; >2 plots

	    var MaxIter = opts[1]; // maximum number of iterations

	    var epsilon_1 = opts[2]; // convergence tolerance for gradient

	    var epsilon_2 = opts[3]; // convergence tolerance for parameter

	    var epsilon_3 = opts[4]; // convergence tolerance for Chi-square

	    var epsilon_4 = opts[5]; // determines acceptance of a L-M step

	    var lambda_0 = opts[6]; // initial value of damping paramter, lambda

	    var lambda_UP_fac = opts[7]; // factor for increasing lambda

	    var lambda_DN_fac = opts[8]; // factor for decreasing lambda

	    var Update_Type = opts[9]; // 1: Levenberg-Marquardt lambda update

	    if (!dp.length || dp.length == 1) {
	      var dp_array = new Array(Npar);

	      for (var i = 0; i < Npar; i++) dp_array[i] = [dp];

	      dp = dp_array;
	    } // indices of the parameters to be fit


	    var idx = [];

	    for (i = 0; i < dp.length; i++) {
	      if (dp[i][0] != 0) {
	        idx.push(i);
	      }
	    }

	    var Nfit = idx.length; // number of parameters to fit

	    var stop = false; // termination flag

	    var weight_sq = null; //console.log(weight);

	    if (!weight.length || weight.length < Npnt) {
	      // squared weighting vector
	      //weight_sq = ( weight(1)*ones(Npnt,1) ).^2;
	      //console.log("weight[0] "+typeof weight[0]);
	      var tmp = algebra.multiply(src$3.ones(Npnt, 1), weight[0]);
	      weight_sq = algebra.dotMultiply(tmp, tmp);
	    } else {
	      //weight_sq = (weight(:)).^2;
	      weight_sq = algebra.dotMultiply(weight, weight);
	    } // initialize Jacobian with finite difference calculation
	    //console.log("J "+weight_sq);


	    var result = this.lm_matx(func, t, p_old, y_old, 1, J, p, y_dat, weight_sq, dp, c);
	    var JtWJ = result.JtWJ,
	        JtWdy = result.JtWdy,
	        X2 = result.Chi_sq,
	        y_hat = result.y_hat,
	        J = result.J; //[JtWJ,JtWdy,X2,y_hat,J] = this.lm_matx(func,t,p_old,y_old,1,J,p,y_dat,weight_sq,dp,c);
	    //console.log(JtWJ);

	    if (Math.max(Math.abs(JtWdy)) < epsilon_1) {
	      console.log(' *** Your Initial Guess is Extremely Close to Optimal ***');
	      console.log(' *** epsilon_1 = ', epsilon_1);
	      stop = true;
	    }

	    switch (Update_Type) {
	      case 1:
	        // Marquardt: init'l lambda
	        lambda = lambda_0;
	        break;

	      default:
	        // Quadratic and Nielsen
	        lambda = lambda_0 * Math.max(algebra.diag(JtWJ));
	        nu = 2;
	    } //console.log(X2);


	    X2_old = X2; // previous value of X2
	    //console.log(MaxIter+" "+Npar);
	    //var cvg_hst = Matrix.ones(MaxIter,Npar+3);		// initialize convergence history

	    var h = null;

	    while (!stop && iteration <= MaxIter) {
	      // --- Main Loop
	      iteration = iteration + 1; // incremental change in parameters

	      switch (Update_Type) {
	        case 1:
	          // Marquardt
	          //h = ( JtWJ + lambda * math.diag(math.diag(JtWJ)) ) \ JtWdy;
	          //h = math.multiply(math.inv(JtWdy),math.add(JtWJ,math.multiply(lambda,math.diag(math.diag(Npar)))));
	          h = algebra.solve(algebra.add(JtWJ, algebra.multiply(algebra.diag(algebra.diag(JtWJ)), lambda)), JtWdy);
	          break;

	        default:
	          // Quadratic and Nielsen
	          //h = ( JtWJ + lambda * math.eye(Npar) ) \ JtWdy;
	          h = algebra.solve(algebra.add(JtWJ, algebra.multiply(src$3.eye(Npar), lambda)), JtWdy);
	      }
	      /*for(var k=0;k< h.length;k++){
	       h[k]=[h[k]];
	       }*/
	      //console.log("h "+h);
	      //h=math.matrix(h);
	      //  big = max(abs(h./p)) > 2;
	      //this is a big step
	      // --- Are parameters [p+h] much better than [p] ?


	      var hidx = new Array(idx.length);

	      for (k = 0; k < idx.length; k++) {
	        hidx[k] = h[idx[k]];
	      }

	      var p_try = algebra.add(p, hidx); // update the [idx] elements

	      for (k = 0; k < p_try.length; k++) {
	        p_try[k][0] = Math.min(Math.max(p_min[k][0], p_try[k][0]), p_max[k][0]);
	      } // p_try = Math.min(Math.max(p_min,p_try),p_max);           // apply constraints


	      var delta_y = algebra.subtract(y_dat, func(t, p_try, c)); // residual error using p_try
	      //func_calls = func_calls + 1;
	      //X2_try = delta_y' * ( delta_y .* weight_sq );  // Chi-squared error criteria

	      var X2_try = algebra.multiply(algebra.transpose(delta_y), algebra.dotMultiply(delta_y, weight_sq));

	      if (Update_Type == 2) {
	        // Quadratic
	        //    One step of quadratic line update in the h direction for minimum X2
	        //var alpha =  JtWdy'*h / ( (X2_try - X2)/2 + 2*JtWdy'*h ) ;
	        var JtWdy_th = algebra.multiply(algebra.transpose(JtWdy), h);
	        var alpha = algebra.multiply(JtWdy_th, algebra.inv(algebra.add(algebra.multiply(algebra.subtract(X2_try - X2), 1 / 2)), algebra.multiply(JtWdy_th, 2))); //JtWdy'*h / ( (X2_try - X2)/2 + 2*JtWdy'*h ) ;

	        h = algebra.multiply(alpha, h);

	        for (var k = 0; k < idx.length; k++) {
	          hidx[k] = h[idx[k]];
	        }

	        p_try = algebra.add(p, hidx); // update only [idx] elements

	        p_try = algebra.min(algebra.max(p_min, p_try), p_max); // apply constraints

	        delta_y = algebra.subtract(y_dat, func(t, p_try, c)); // residual error using p_try
	        // func_calls = func_calls + 1;
	        //X2_try = delta_y' * ( delta_y .* weight_sq ); // Chi-squared error criteria

	        X2_try = algebra.multiply(algebra.transpose(delta_y), mat.dotMultiply(delta_y, weight_sq));
	      } //rho = (X2 - X2_try) / ( 2*h' * (lambda * h + JtWdy) ); // Nielsen


	      var rho = (X2 - X2_try) / algebra.multiply(algebra.multiply(algebra.transpose(h), 2), algebra.add(algebra.multiply(lambda, h), JtWdy)); //console.log("rho "+rho);

	      if (rho > epsilon_4) {
	        // it IS significantly better
	        //console.log("Here");
	        dX2 = X2 - X2_old;
	        X2_old = X2;
	        p_old = p;
	        y_old = y_hat;
	        p = p_try; // accept p_try

	        result = this.lm_matx(func, t, p_old, y_old, dX2, J, p, y_dat, weight_sq, dp, c);
	        JtWJ = result.JtWJ, JtWdy = result.JtWdy, X2 = result.Chi_sq, y_hat = result.y_hat, J = result.J; // decrease lambda ==> Gauss-Newton method

	        switch (Update_Type) {
	          case 1:
	            // Levenberg
	            lambda = Math.max(lambda / lambda_DN_fac, 1.e-7);
	            break;

	          case 2:
	            // Quadratic
	            lambda = Math.max(lambda / (1 + alpha), 1.e-7);
	            break;

	          case 3:
	            // Nielsen
	            lambda = algebra.multiply(Math.max(1 / 3, 1 - (2 * rho - 1) ^ 3), lambda);
	            nu = 2;
	            break;
	        }
	      } else {
	        // it IS NOT better
	        X2 = X2_old; // do not accept p_try

	        if (iteration % (2 * Npar) == 0) {
	          // rank-1 update of Jacobian
	          result = this.lm_matx(func, t, p_old, y_old, -1, J, p, y_dat, weight_sq, dp, c);
	          JtWJ = result.JtWJ, JtWdy = result.JtWdy, dX2 = result.Chi_sq, y_hat = result.y_hat, J = result.J;
	        } // increase lambda  ==> gradient descent method


	        switch (Update_Type) {
	          case 1:
	            // Levenberg
	            lambda = Math.min(lambda * lambda_UP_fac, 1.e7);
	            break;

	          case 2:
	            // Quadratic
	            lambda = lambda + Math.abs((X2_try - X2) / 2 / alpha);
	            break;

	          case 3:
	            // Nielsen
	            lambda = lambda * nu;
	            nu = 2 * nu;
	            break;
	        }
	      }
	    } // --- End of Main Loop
	    // --- convergence achieved, find covariance and confidence intervals
	    // equal weights for paramter error analysis


	    weight_sq = algebra.multiply(algebra.multiply(algebra.transpose(delta_y), delta_y), src$3.ones(Npnt, 1));
	    weight_sq.apply(function (i, j) {
	      weight_sq[i][j] = (Npnt - Nfit + 1) / weight_sq[i][j];
	    }); //console.log(weight_sq);

	    result = this.lm_matx(func, t, p_old, y_old, -1, J, p, y_dat, weight_sq, dp, c);
	    JtWJ = result.JtWJ, JtWdy = result.JtWdy, X2 = result.Chi_sq, y_hat = result.y_hat, J = result.J;
	    /*if nargout > 2				// standard error of parameters
	     covar = inv(JtWJ);
	     sigma_p = sqrt(diag(covar));
	     end
	      if nargout > 3				// standard error of the fit
	     //  sigma_y = sqrt(diag(J * covar * J'));	// slower version of below
	     sigma_y = zeros(Npnt,1);
	     for i=1:Npnt
	     sigma_y(i) = J(i,:) * covar * J(i,:)';
	     end
	     sigma_y = sqrt(sigma_y);
	     end
	      if nargout > 4				// parameter correlation matrix
	     corr = covar ./ [sigma_p*sigma_p'];
	     end
	      if nargout > 5				// coefficient of multiple determination
	     R_sq = corrcoef([y_dat y_hat]);
	     R_sq = R_sq(1,2).^2;
	     end
	      if nargout > 6				// convergence history
	     cvg_hst = cvg_hst(1:iteration,:);
	     end*/
	    // endfunction  # ---------------------------------------------------------- LM

	    return {
	      p: p,
	      X2: X2
	    };
	  },
	  lm_FD_J: function lm_FD_J(func, t, p, y, dp, c) {
	    // J = lm_FD_J(func,t,p,y,{dp},{c})
	    //
	    // partial derivatives (Jacobian) dy/dp for use with lm.m
	    // computed via Finite Differences
	    // Requires n or 2n function evaluations, n = number of nonzero values of dp
	    // -------- INPUT VARIABLES ---------
	    // func = function of independent variables, 't', and parameters, 'p',
	    //        returning the simulated model: y_hat = func(t,p,c)
	    // t  = m-vector of independent variables (used as arg to func)
	    // p  = n-vector of current parameter values
	    // y  = func(t,p,c) n-vector initialised by user before each call to lm_FD_J
	    // dp = fractional increment of p for numerical derivatives
	    //      dp(j)>0 central differences calculated
	    //      dp(j)<0 one sided differences calculated
	    //      dp(j)=0 sets corresponding partials to zero; i.e. holds p(j) fixed
	    //      Default:  0.001;
	    // c  = optional vector of constants passed to y_hat = func(t,p,c)
	    //---------- OUTPUT VARIABLES -------
	    // J  = Jacobian Matrix J(i,j)=dy(i)/dp(j)	i=1:n; j=1:m
	    //   Henri Gavin, Dept. Civil & Environ. Engineering, Duke Univ. November 2005
	    //   modified from: ftp://fly.cnuce.cnr.it/pub/software/octave/leasqr/
	    //   Press, et al., Numerical Recipes, Cambridge Univ. Press, 1992, Chapter 15.
	    var m = y.length; // number of data points

	    var n = p.length; // number of parameters

	    dp = dp || algebra.multiply(src$3.ones(n, 1), 0.001);
	    var ps = p.clone(); //JSON.parse(JSON.stringify(p));
	    //var ps = $.extend(true, [], p);

	    var J = new src$3(m, n),
	        del = new Array(n); // initialize Jacobian to Zero

	    for (var j = 0; j < n; j++) {
	      //console.log(j+" "+dp[j]+" "+p[j]+" "+ps[j]+" "+del[j]);
	      del[j] = dp[j] * (1 + Math.abs(p[j][0])); // parameter perturbation

	      p[j] = [ps[j][0] + del[j]]; // perturb parameter p(j)
	      //console.log(j+" "+dp[j]+" "+p[j]+" "+ps[j]+" "+del[j]);

	      if (del[j] != 0) {
	        y1 = func(t, p, c); //func_calls = func_calls + 1;

	        if (dp[j][0] < 0) {
	          // backwards difference
	          //J(:,j) = math.dotDivide(math.subtract(y1, y),del[j]);//. / del[j];
	          //console.log(del[j]);
	          //console.log(y);
	          var column = algebra.dotDivide(algebra.subtract(y1, y), del[j]);

	          for (var k = 0; k < m; k++) {
	            J[k][j] = column[k][0];
	          } //console.log(column);

	        } else {
	          p[j][0] = ps[j][0] - del[j]; //J(:,j) = (y1 - feval(func, t, p, c)). / (2. * del[j]);

	          var column = algebra.dotDivide(algebra.subtract(y1, func(t, p, c)), 2 * del[j]);

	          for (var k = 0; k < m; k++) {
	            J[k][j] = column[k][0];
	          }
	        } // central difference, additional func call

	      }

	      p[j] = ps[j]; // restore p(j)
	    } //console.log("lm_FD_J: "+ JSON.stringify(J));


	    return J;
	  },
	  // endfunction # -------------------------------------------------- LM_FD_J
	  lm_Broyden_J: function lm_Broyden_J(p_old, y_old, J, p, y) {
	    // J = lm_Broyden_J(p_old,y_old,J,p,y)
	    // carry out a rank-1 update to the Jacobian matrix using Broyden's equation
	    //---------- INPUT VARIABLES -------
	    // p_old = previous set of parameters
	    // y_old = model evaluation at previous set of parameters, y_hat(t;p_old)
	    // J  = current version of the Jacobian matrix
	    // p     = current  set of parameters
	    // y     = model evaluation at current  set of parameters, y_hat(t;p)
	    //---------- OUTPUT VARIABLES -------
	    // J = rank-1 update to Jacobian Matrix J(i,j)=dy(i)/dp(j)	i=1:n; j=1:m
	    //console.log(p+" X "+ p_old)
	    var h = algebra.subtract(p, p_old); //console.log("hhh "+h);

	    var h_t = algebra.transpose(h);
	    h_t.div(algebra.multiply(h_t, h)); //console.log(h_t);
	    //J = J + ( y - y_old - J*h )*h' / (h'*h);	// Broyden rank-1 update eq'n

	    J = algebra.add(J, algebra.multiply(algebra.subtract(y, algebra.add(y_old, algebra.multiply(J, h))), h_t));
	    return J; // endfunction # ---------------------------------------------- LM_Broyden_J
	  },
	  lm_matx: function lm_matx(func, t, p_old, y_old, dX2, J, p, y_dat, weight_sq, dp, c, iteration) {
	    // [JtWJ,JtWdy,Chi_sq,y_hat,J] = this.lm_matx(func,t,p_old,y_old,dX2,J,p,y_dat,weight_sq,{da},{c})
	    //
	    // Evaluate the linearized fitting matrix, JtWJ, and vector JtWdy,
	    // and calculate the Chi-squared error function, Chi_sq
	    // Used by Levenberg-Marquard algorithm, lm.m
	    // -------- INPUT VARIABLES ---------
	    // func   = function ofpn independent variables, p, and m parameters, p,
	    //         returning the simulated model: y_hat = func(t,p,c)
	    // t      = m-vectors or matrix of independent variables (used as arg to func)
	    // p_old  = n-vector of previous parameter values
	    // y_old  = m-vector of previous model ... y_old = y_hat(t;p_old);
	    // dX2    = previous change in Chi-squared criteria
	    // J   = m-by-n Jacobian of model, y_hat, with respect to parameters, p
	    // p      = n-vector of current  parameter values
	    // y_dat  = n-vector of data to be fit by func(t,p,c)
	    // weight_sq = square of the weighting vector for least squares fit ...
	    //	    inverse of the standard measurement errors
	    // dp     = fractional increment of 'p' for numerical derivatives
	    //          dp(j)>0 central differences calculated
	    //          dp(j)<0 one sided differences calculated
	    //          dp(j)=0 sets corresponding partials to zero; i.e. holds p(j) fixed
	    //          Default:  0.001;
	    // c      = optional vector of constants passed to y_hat = func(t,p,c)
	    //---------- OUTPUT VARIABLES -------
	    // JtWJ	 = linearized Hessian matrix (inverse of covariance matrix)
	    // JtWdy   = linearized fitting vector
	    // Chi_sq = Chi-squared criteria: weighted sum of the squared residuals WSSR
	    // y_hat  = model evaluated with parameters 'p'
	    // J   = m-by-n Jacobian of model, y_hat, with respect to parameters, p
	    //   Henri Gavin, Dept. Civil & Environ. Engineering, Duke Univ. November 2005
	    //   modified from: ftp://fly.cnuce.cnr.it/pub/software/octave/leasqr/
	    //   Press, et al., Numerical Recipes, Cambridge Univ. Press, 1992, Chapter 15.
	    var Npnt = y_dat.length; // number of data points

	    var Npar = p.length; // number of parameters

	    dp = dp || 0.001; //var JtWJ = new Matrix.zeros(Npar);
	    //var JtWdy  = new Matrix.zeros(Npar,1);

	    var y_hat = func(t, p, c); // evaluate model using parameters 'p'
	    //func_calls = func_calls + 1;
	    //console.log(J);

	    if (iteration % (2 * Npar) == 0 || dX2 > 0) {
	      //console.log("Par");
	      J = this.lm_FD_J(func, t, p, y_hat, dp, c); // finite difference
	    } else {
	      //console.log("ImPar");
	      J = this.lm_Broyden_J(p_old, y_old, J, p, y_hat); // rank-1 update
	    } //console.log(y_dat);
	    //console.log(y_hat);


	    var delta_y = algebra.subtract(y_dat, y_hat); // residual error between model and data
	    //console.log(delta_y[0][0]);
	    //console.log(delta_y.rows+" "+delta_y.columns+" "+JSON.stringify(weight_sq));
	    //var Chi_sq = delta_y' * ( delta_y .* weight_sq ); 	// Chi-squared error criteria

	    var Chi_sq = algebra.multiply(algebra.transpose(delta_y), algebra.dotMultiply(delta_y, weight_sq)); //JtWJ  = J' * ( J .* ( weight_sq * ones(1,Npar) ) );

	    var Jt = algebra.transpose(J); //console.log(weight_sq);

	    var JtWJ = algebra.multiply(Jt, algebra.dotMultiply(J, algebra.multiply(weight_sq, src$3.ones(1, Npar)))); //JtWdy = J' * ( weight_sq .* delta_y );

	    var JtWdy = algebra.multiply(Jt, algebra.dotMultiply(weight_sq, delta_y));
	    return {
	      JtWJ: JtWJ,
	      JtWdy: JtWdy,
	      Chi_sq: Chi_sq,
	      y_hat: y_hat,
	      J: J
	    }; // endfunction  # ------------------------------------------------------ LM_MATX
	  }
	};
	var LM_1 = LM;

	var src$4 = createCommonjsModule(function (module) {

	  module.exports = LM_1;
	  module.exports.Matrix = src$3;
	  module.exports.Matrix.algebra = algebra;
	});
	var src_1$2 = src$4.Matrix;

	var math = src$4.Matrix.algebra;
	/**
	 * This function calculates the spectrum as a sum of lorentzian functions. The Lorentzian
	 * parameters are divided in 3 batches. 1st: centers; 2nd: heights; 3th: widths;
	 * @param t Ordinate values
	 * @param p Lorentzian parameters
	 * @param c Constant parameters(Not used)
	 * @returns {*}
	 */

	function sumOfLorentzians(t, p, c) {
	  var nL = p.length / 3,
	      factor,
	      i,
	      j,
	      p2,
	      cols = t.rows;
	  var result = src$3.zeros(t.length, 1);

	  for (i = 0; i < nL; i++) {
	    p2 = Math.pow(p[i + nL * 2][0] / 2, 2);
	    factor = p[i + nL][0] * p2;

	    for (j = 0; j < cols; j++) {
	      result[j][0] += factor / (Math.pow(t[j][0] - p[i][0], 2) + p2);
	    }
	  }

	  return result;
	}
	/**
	 * Single 4 parameter lorentzian function
	 * @param t Ordinate values
	 * @param p Lorentzian parameters
	 * @param c Constant parameters(Not used)
	 * @returns {*}
	 */


	function singleLorentzian(t, p, c) {
	  var factor = p[1][0] * Math.pow(p[2][0] / 2, 2);
	  var rows = t.rows;
	  var result = new src$3(t.rows, t.columns);

	  for (var i = 0; i < rows; i++) {
	    result[i][0] = factor / (Math.pow(t[i][0] - p[0][0], 2) + Math.pow(p[2][0] / 2, 2));
	  }

	  return result;
	}
	/**
	 * Single 3 parameter gaussian function
	 * @param t Ordinate values
	 * @param p Gaussian parameters [mean, height, std]
	 * @param c Constant parameters(Not used)
	 * @returns {*}
	 */


	function singleGaussian(t, p, c) {
	  var factor2 = p[2][0] * p[2][0] / 2;
	  var rows = t.rows;
	  var result = new src$3(t.rows, t.columns);

	  for (var i = 0; i < rows; i++) {
	    result[i][0] = p[1][0] * Math.exp(-(t[i][0] - p[0][0]) * (t[i][0] - p[0][0]) / factor2);
	  }

	  return result;
	}
	/**
	 * * Fits a set of points to a Lorentzian function. Returns the center of the peak, the width at half height, and the height of the signal.
	 * @param data,[y]
	 * @returns {*[]}
	 */


	function optimizeSingleLorentzian(xy, peak, opts) {
	  opts = opts || {};
	  var xy2 = parseData(xy, opts.percentage || 0);

	  if (xy2 === null || xy2[0].rows < 3) {
	    return null; //Cannot run an optimization with less than 3 points
	  }

	  var t = xy2[0];
	  var y_data = xy2[1];
	  var maxY = xy2[2];
	  var nbPoints = t.rows;
	  var weight = [nbPoints / Math.sqrt(y_data.dot(y_data))];
	  var opts = Object.create(opts.LMOptions || [3, 100, 1e-3, 1e-3, 1e-3, 1e-2, 1e-2, 11, 9, 1]); //var opts = [  3,    100, 1e-3, 1e-3, 1e-3, 1e-2, 1e-2,    11,    9,        1 ];

	  var consts = [];
	  var dt = Math.abs(t[0][0] - t[1][0]); // optional vector of constants

	  var dx = new src$3([[-dt / 10000], [-1e-3], [-dt / 10000]]); //-Math.abs(t[0][0]-t[1][0])/100;

	  var p_init = new src$3([[peak.x], [1], [peak.width]]);
	  var p_min = new src$3([[peak.x - dt], [0.75], [peak.width / 4]]);
	  var p_max = new src$3([[peak.x + dt], [1.25], [peak.width * 4]]);
	  var p_fit = src$4.optimize(singleLorentzian, p_init, t, y_data, weight, dx, p_min, p_max, consts, opts);
	  p_fit = p_fit.p;
	  return [p_fit[0], [p_fit[1][0] * maxY], p_fit[2]];
	}
	/**
	 * Fits a set of points to a gaussian bell. Returns the mean of the peak, the std and the height of the signal.
	 * @param data,[y]
	 * @returns {*[]}
	 */


	function optimizeSingleGaussian(xy, peak, opts) {
	  opts = opts || {};
	  var xy2 = parseData(xy, opts.percentage || 0);

	  if (xy2 === null || xy2[0].rows < 3) {
	    return null; //Cannot run an optimization with less than 3 points
	  }

	  var t = xy2[0];
	  var y_data = xy2[1];
	  var maxY = xy2[2];
	  var nbPoints = t.rows;
	  var weight = [nbPoints / Math.sqrt(y_data.dot(y_data))];
	  var opts = Object.create(opts.LMOptions || [3, 100, 1e-3, 1e-3, 1e-3, 1e-2, 1e-2, 11, 9, 1]); //var opts = [  3,    100, 1e-3, 1e-3, 1e-3, 1e-2, 1e-2,    11,    9,        1 ];

	  var consts = []; // optional vector of constants

	  var dt = Math.abs(t[0][0] - t[1][0]);
	  var dx = new src$3([[-dt / 10000], [-1e-3], [-dt / 10000]]); //-Math.abs(t[0][0]-t[1][0])/100;

	  var dx = new src$3([[-Math.abs(t[0][0] - t[1][0]) / 1000], [-1e-3], [-peak.width / 1000]]);
	  var p_init = new src$3([[peak.x], [1], [peak.width]]);
	  var p_min = new src$3([[peak.x - dt], [0.75], [peak.width / 4]]);
	  var p_max = new src$3([[peak.x + dt], [1.25], [peak.width * 4]]); //var p_min = new Matrix([[peak.x-peak.width/4],[0.75],[peak.width/3]]);
	  //var p_max = new Matrix([[peak.x+peak.width/4],[1.25],[peak.width*3]]);

	  var p_fit = src$4.optimize(singleGaussian, p_init, t, y_data, weight, dx, p_min, p_max, consts, opts);
	  p_fit = p_fit.p;
	  return [p_fit[0], [p_fit[1][0] * maxY], p_fit[2]];
	}
	/*
	 peaks on group should sorted
	 */


	function optimizeLorentzianTrain(xy, group, opts) {
	  var xy2 = parseData(xy); //console.log(xy2[0].rows);

	  if (xy2 === null || xy2[0].rows < 3) {
	    return null; //Cannot run an optimization with less than 3 points
	  }

	  var t = xy2[0];
	  var y_data = xy2[1];
	  var maxY = xy2[2];
	  var currentIndex = 0;
	  var nbPoints = t.length;
	  var nextX;
	  var tI, yI, maxY;
	  var result = [],
	      current;

	  for (var i = 0; i < group.length; i++) {
	    nextX = group[i].x - group[i].width * 1.5; //console.log(group[i]);

	    while (t[currentIndex++] < nextX && currentIndex < nbPoints);

	    nextX = group[i].x + group[i].width * 1.5;
	    tI = [];
	    yI = [];

	    while (t[currentIndex] <= nextX && currentIndex < nbPoints) {
	      tI.push(t[currentIndex][0]);
	      yI.push(y_data[currentIndex][0] * maxY);
	      currentIndex++;
	    }

	    current = optimizeSingleLorentzian([tI, yI], group[i], opts);

	    if (current) {
	      result.push({
	        "x": current[0][0],
	        "y": current[1][0],
	        "width": current[2][0],
	        "opt": true
	      });
	    } else {
	      result.push({
	        "x": group[i].x,
	        "y": group[i].y,
	        "width": group[i].width,
	        "opt": false
	      });
	    }
	  }

	  return result;
	}

	function optimizeGaussianTrain(xy, group, opts) {
	  var xy2 = parseData(xy); //console.log(xy2[0].rows);

	  if (xy2 === null || xy2[0].rows < 3) {
	    return null; //Cannot run an optimization with less than 3 points
	  }

	  var t = xy2[0];
	  var y_data = xy2[1];
	  var maxY = xy2[2];
	  var currentIndex = 0;
	  var nbPoints = t.length;
	  var nextX;
	  var tI, yI, maxY;
	  var result = [],
	      current;

	  for (var i = 0; i < group.length; i++) {
	    nextX = group[i].x - group[i].width * 1.5; //console.log(group[i]);

	    while (t[currentIndex++] < nextX && currentIndex < nbPoints);

	    nextX = group[i].x + group[i].width * 1.5;
	    tI = [];
	    yI = [];

	    while (t[currentIndex] <= nextX && currentIndex < nbPoints) {
	      tI.push(t[currentIndex][0]);
	      yI.push(y_data[currentIndex][0] * maxY);
	      currentIndex++;
	    }

	    current = optimizeSingleGaussian([tI, yI], group[i], opts);

	    if (current) {
	      result.push({
	        "x": current[0][0],
	        "y": current[1][0],
	        "width": current[2][0],
	        "opt": true
	      });
	    } else {
	      result.push({
	        "x": group[i].x,
	        "y": group[i].y,
	        "width": group[i].width,
	        "opt": false
	      });
	    }
	  }

	  return result;
	}
	/**
	 *
	 * @param xy A two column matrix containing the x and y data to be fitted
	 * @param group A set of initial lorentzian parameters to be optimized [center, heigth, half_width_at_half_height]
	 * @returns {Array} A set of final lorentzian parameters [center, heigth, hwhh*2]
	 */


	function optimizeLorentzianSum(xy, group, opts) {
	  var xy2 = parseData(xy);

	  if (xy2 === null || xy2[0].rows < 3) {
	    return null; //Cannot run an optimization with less than 3 points
	  }

	  var t = xy2[0];
	  var y_data = xy2[1];
	  var maxY = xy2[2];
	  var nbPoints = t.rows,
	      i;
	  var weight = [nbPoints / math.sqrt(y_data.dot(y_data))];
	  var opts = Object.create(opts || [3, 100, 1e-3, 1e-3, 1e-3, 1e-2, 1e-2, 11, 9, 1]);
	  var consts = []; // optional vector of constants

	  var nL = group.length;
	  var p_init = new src$3(nL * 3, 1);
	  var p_min = new src$3(nL * 3, 1);
	  var p_max = new src$3(nL * 3, 1);
	  var dx = new src$3(nL * 3, 1);
	  var dt = Math.abs(t[0][0] - t[1][0]);

	  for (i = 0; i < nL; i++) {
	    p_init[i][0] = group[i].x;
	    p_init[i + nL][0] = 1;
	    p_init[i + 2 * nL][0] = group[i].width;
	    p_min[i][0] = group[i].x - dt; //-group[i].width/4;

	    p_min[i + nL][0] = 0;
	    p_min[i + 2 * nL][0] = group[i].width / 4;
	    p_max[i][0] = group[i].x + dt; //+group[i].width/4;

	    p_max[i + nL][0] = 1.5;
	    p_max[i + 2 * nL][0] = group[i].width * 4;
	    dx[i][0] = -dt / 1000;
	    dx[i + nL][0] = -1e-3;
	    dx[i + 2 * nL][0] = -dt / 1000;
	  }

	  var dx = -Math.abs(t[0][0] - t[1][0]) / 10000;
	  var p_fit = src$4.optimize(sumOfLorentzians, p_init, t, y_data, weight, dx, p_min, p_max, consts, opts);
	  p_fit = p_fit.p; //Put back the result in the correct format

	  var result = new Array(nL);

	  for (i = 0; i < nL; i++) {
	    result[i] = [p_fit[i], [p_fit[i + nL][0] * maxY], p_fit[i + 2 * nL]];
	  }

	  return result;
	}
	/**
	 *
	 * @param xy A two column matrix containing the x and y data to be fitted
	 * @param group A set of initial lorentzian parameters to be optimized [center, heigth, half_width_at_half_height]
	 * @returns {Array} A set of final lorentzian parameters [center, heigth, hwhh*2]
	 */


	function optimizeGaussianSum(xy, group, opts) {
	  var xy2 = parseData(xy);

	  if (xy2 === null || xy2[0].rows < 3) {
	    return null; //Cannot run an optimization with less than 3 points
	  }

	  var t = xy2[0];
	  var y_data = xy2[1];
	  var maxY = xy2[2];
	  var nbPoints = t.rows,
	      i;
	  var weight = new src$3(nbPoints, 1); //[nbPoints / math.sqrt(y_data.dot(y_data))];

	  var k = nbPoints / math.sqrt(y_data.dot(y_data));

	  for (i = 0; i < nbPoints; i++) {
	    weight[i][0] = k; ///(y_data[i][0]);
	    //weight[i][0]=k*(2-y_data[i][0]);
	  }

	  var opts = Object.create(opts || [3, 100, 1e-3, 1e-3, 1e-3, 1e-2, 1e-2, 11, 9, 2]); //var opts=[  3,    100, 1e-5, 1e-6, 1e-6, 1e-6, 1e-6,    11,    9,        1 ];

	  var consts = []; // optional vector of constants

	  var nL = group.length;
	  var p_init = new src$3(nL * 3, 1);
	  var p_min = new src$3(nL * 3, 1);
	  var p_max = new src$3(nL * 3, 1);
	  var dx = new src$3(nL * 3, 1);
	  var dt = Math.abs(t[0][0] - t[1][0]);

	  for (i = 0; i < nL; i++) {
	    p_init[i][0] = group[i].x;
	    p_init[i + nL][0] = group[i].y / maxY;
	    p_init[i + 2 * nL][0] = group[i].width;
	    p_min[i][0] = group[i].x - dt;
	    p_min[i + nL][0] = group[i].y * 0.8 / maxY;
	    p_min[i + 2 * nL][0] = group[i].width / 2;
	    p_max[i][0] = group[i].x + dt;
	    p_max[i + nL][0] = group[i].y * 1.2 / maxY;
	    p_max[i + 2 * nL][0] = group[i].width * 2;
	    dx[i][0] = -dt / 1000;
	    dx[i + nL][0] = -1e-3;
	    dx[i + 2 * nL][0] = -dt / 1000;
	  } //console.log(t);


	  var p_fit = src$4.optimize(sumOfLorentzians, p_init, t, y_data, weight, dx, p_min, p_max, consts, opts);
	  p_fit = p_fit.p; //Put back the result in the correct format

	  var result = new Array(nL);

	  for (i = 0; i < nL; i++) {
	    result[i] = [p_fit[i], [p_fit[i + nL][0] * maxY], p_fit[i + 2 * nL]];
	  }

	  return result;
	}
	/**
	 *
	 * Converts the given input to the required x, y column matrices. y data is normalized to max(y)=1
	 * @param xy
	 * @returns {*[]}
	 */


	function parseData(xy, threshold) {
	  var nbSeries = xy.length;
	  var t = null;
	  var y_data = null,
	      x,
	      y;
	  var maxY = 0,
	      i;

	  if (nbSeries == 2) {
	    //Looks like row wise matrix [x,y]
	    var nbPoints = xy[0].length; //if(nbPoints<3)
	    //    throw new Exception(nbPoints);
	    //else{

	    t = new Array(nbPoints); //new Matrix(nbPoints,1);

	    y_data = new Array(nbPoints); //new Matrix(nbPoints,1);

	    x = xy[0];
	    y = xy[1];

	    if (typeof x[0] === "number") {
	      for (i = 0; i < nbPoints; i++) {
	        t[i] = x[i];
	        y_data[i] = y[i];
	        if (y[i] > maxY) maxY = y[i];
	      }
	    } else {
	      //It is a colum matrix
	      if (typeof x[0] === "object") {
	        for (i = 0; i < nbPoints; i++) {
	          t[i] = x[i][0];
	          y_data[i] = y[i][0];
	          if (y[i][0] > maxY) maxY = y[i][0];
	        }
	      }
	    } //}

	  } else {
	    //Looks like a column wise matrix [[x],[y]]
	    var nbPoints = nbSeries; //if(nbPoints<3)
	    //    throw new SizeException(nbPoints);
	    //else {

	    t = new Array(nbPoints); //new Matrix(nbPoints, 1);

	    y_data = new Array(nbPoints); //new Matrix(nbPoints, 1);

	    for (i = 0; i < nbPoints; i++) {
	      t[i] = xy[i][0];
	      y_data[i] = xy[i][1];
	      if (y_data[i] > maxY) maxY = y_data[i];
	    } //}

	  }

	  for (i = 0; i < nbPoints; i++) {
	    y_data[i] /= maxY;
	  }

	  if (threshold) {
	    for (i = nbPoints - 1; i >= 0; i--) {
	      if (y_data[i] < threshold) {
	        y_data.splice(i, 1);
	        t.splice(i, 1);
	      }
	    }
	  }

	  if (t.length > 0) return [new src$3([t]).transpose(), new src$3([y_data]).transpose(), maxY];
	  return null;
	}

	var optimizeSingleLorentzian_1 = optimizeSingleLorentzian;
	var optimizeLorentzianSum_1 = optimizeLorentzianSum;
	var optimizeSingleGaussian_1 = optimizeSingleGaussian;
	var optimizeGaussianSum_1 = optimizeGaussianSum;
	var singleGaussian_1 = singleGaussian;
	var singleLorentzian_1 = singleLorentzian;
	var optimizeGaussianTrain_1 = optimizeGaussianTrain;
	var optimizeLorentzianTrain_1 = optimizeLorentzianTrain;
	var src$5 = {
	  optimizeSingleLorentzian: optimizeSingleLorentzian_1,
	  optimizeLorentzianSum: optimizeLorentzianSum_1,
	  optimizeSingleGaussian: optimizeSingleGaussian_1,
	  optimizeGaussianSum: optimizeGaussianSum_1,
	  singleGaussian: singleGaussian_1,
	  singleLorentzian: singleLorentzian_1,
	  optimizeGaussianTrain: optimizeGaussianTrain_1,
	  optimizeLorentzianTrain: optimizeLorentzianTrain_1
	};

	function sampleFunction(from, to, x, y, lastIndex) {
	  var nbPoints = x.length;
	  var sampleX = [];
	  var sampleY = [];
	  var direction = Math.sign(x[1] - x[0]); // Direction of the derivative

	  if (direction === -1) {
	    lastIndex[0] = x.length - 1;
	  }

	  var delta = Math.abs(to - from) / 2;
	  var mid = (from + to) / 2;
	  var stop = false;
	  var index = lastIndex[0];

	  while (!stop && index < nbPoints && index >= 0) {
	    if (Math.abs(x[index] - mid) <= delta) {
	      sampleX.push(x[index]);
	      sampleY.push(y[index]);
	      index += direction;
	    } else {
	      // It is outside the range.
	      if (Math.sign(mid - x[index]) === 1) {
	        // We'll reach the mid going in the current direction
	        index += direction;
	      } else {
	        // There is not more peaks in the current range
	        stop = true;
	      }
	    } // console.log(sampleX);

	  }

	  lastIndex[0] = index;
	  return [sampleX, sampleY];
	}

	var optimizePeaks = function optimizePeaks(peakList, x, y, n, fnType) {
	  var i;
	  var j;
	  var lastIndex = [0];
	  var groups = groupPeaks(peakList, n);
	  var result = [];
	  var factor = 1;

	  if (fnType === 'gaussian') {
	    factor = 1.17741;
	  } // From https://en.wikipedia.org/wiki/Gaussian_function#Properties


	  var sampling, error, opts;

	  for (i = 0; i < groups.length; i++) {
	    var peaks = groups[i].group;

	    if (peaks.length > 1) {
	      // Multiple peaks
	      // console.log("Pending group of overlaped peaks "+peaks.length);
	      // console.log("here1");
	      // console.log(groups[i].limits);
	      sampling = sampleFunction(groups[i].limits[0] - groups[i].limits[1], groups[i].limits[0] + groups[i].limits[1], x, y, lastIndex); // console.log(sampling);

	      if (sampling[0].length > 5) {
	        error = peaks[0].width / 1000;
	        opts = [3, 100, error, error, error, error * 10, error * 10, 11, 9, 1]; // var gauss = Opt.optimizeSingleGaussian(sampling[0], sampling[1], opts, peaks);

	        var optPeaks = [];

	        if (fnType === 'gaussian') {
	          optPeaks = src$5.optimizeGaussianSum(sampling, peaks, opts);
	        } else {
	          if (fnType === 'lorentzian') {
	            optPeaks = src$5.optimizeLorentzianSum(sampling, peaks, opts);
	          }
	        } // console.log(optPeak);


	        for (j = 0; j < optPeaks.length; j++) {
	          result.push({
	            x: optPeaks[j][0][0],
	            y: optPeaks[j][1][0],
	            width: optPeaks[j][2][0] * factor
	          });
	        }
	      }
	    } else {
	      // Single peak
	      peaks = peaks[0];
	      sampling = sampleFunction(peaks.x - n * peaks.width, peaks.x + n * peaks.width, x, y, lastIndex); // console.log("here2");
	      // console.log(groups[i].limits);

	      if (sampling[0].length > 5) {
	        error = peaks.width / 1000;
	        opts = [3, 100, error, error, error, error * 10, error * 10, 11, 9, 1]; // var gauss = Opt.optimizeSingleGaussian(sampling[0], sampling[1], opts, peaks);
	        // var gauss = Opt.optimizeSingleGaussian([sampling[0],sampling[1]], peaks, opts);

	        var optPeak = [];

	        if (fnType === 'gaussian') {
	          optPeak = src$5.optimizeSingleGaussian([sampling[0], sampling[1]], peaks, opts);
	        } else {
	          if (fnType === 'lorentzian') {
	            optPeak = src$5.optimizeSingleLorentzian([sampling[0], sampling[1]], peaks, opts);
	          }
	        } // console.log(optPeak);


	        result.push({
	          x: optPeak[0][0],
	          y: optPeak[1][0],
	          width: optPeak[2][0] * factor
	        }); // From https://en.wikipedia.org/wiki/Gaussian_function#Properties}
	      }
	    }
	  }

	  return result;
	};

	function groupPeaks(peakList, nL) {
	  var group = [];
	  var groups = [];
	  var i, j;
	  var limits = [peakList[0].x, nL * peakList[0].width];
	  var upperLimit, lowerLimit; // Merge forward

	  for (i = 0; i < peakList.length; i++) {
	    // If the 2 things overlaps
	    if (Math.abs(peakList[i].x - limits[0]) < nL * peakList[i].width + limits[1]) {
	      // Add the peak to the group
	      group.push(peakList[i]); // Update the group limits

	      upperLimit = limits[0] + limits[1];

	      if (peakList[i].x + nL * peakList[i].width > upperLimit) {
	        upperLimit = peakList[i].x + nL * peakList[i].width;
	      }

	      lowerLimit = limits[0] - limits[1];

	      if (peakList[i].x - nL * peakList[i].width < lowerLimit) {
	        lowerLimit = peakList[i].x - nL * peakList[i].width;
	      }

	      limits = [(upperLimit + lowerLimit) / 2, Math.abs(upperLimit - lowerLimit) / 2];
	    } else {
	      groups.push({
	        limits: limits,
	        group: group
	      }); // var optmimalPeak = fitSpectrum(group,limits,spectrum);

	      group = [peakList[i]];
	      limits = [peakList[i].x, nL * peakList[i].width];
	    }
	  }

	  groups.push({
	    limits: limits,
	    group: group
	  }); // Merge backward

	  for (i = groups.length - 2; i >= 0; i--) {
	    // The groups overlaps
	    if (Math.abs(groups[i].limits[0] - groups[i + 1].limits[0]) < (groups[i].limits[1] + groups[i + 1].limits[1]) / 2) {
	      for (j = 0; j < groups[i + 1].group.length; j++) {
	        groups[i].group.push(groups[i + 1].group[j]);
	      }

	      upperLimit = groups[i].limits[0] + groups[i].limits[1];

	      if (groups[i + 1].limits[0] + groups[i + 1].limits[1] > upperLimit) {
	        upperLimit = groups[i + 1].limits[0] + groups[i + 1].limits[1];
	      }

	      lowerLimit = groups[i].limits[0] - groups[i].limits[1];

	      if (groups[i + 1].limits[0] - groups[i + 1].limits[1] < lowerLimit) {
	        lowerLimit = groups[i + 1].limits[0] - groups[i + 1].limits[1];
	      } // console.log(limits);


	      groups[i].limits = [(upperLimit + lowerLimit) / 2, Math.abs(upperLimit - lowerLimit) / 2];
	      groups.splice(i + 1, 1);
	    }
	  }

	  return groups;
	}

	/**
	 * This function try to join the peaks that seems to belong to a broad signal in a single broad peak.
	 * @param peakList
	 * @param options
	 */


	var joinBroadPeaks = function joinBroadPeaks(peakList) {
	  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var width = options.width;
	  var broadLines = []; // Optimize the possible broad lines

	  var max = 0;
	  var maxI = 0;
	  var count = 1;

	  for (let i = peakList.length - 1; i >= 0; i--) {
	    if (peakList[i].soft) {
	      broadLines.push(peakList.splice(i, 1)[0]);
	    }
	  } // Push a feak peak


	  broadLines.push({
	    x: Number.MAX_VALUE
	  });
	  var candidates = [[broadLines[0].x, broadLines[0].y]];
	  var indexes = [0];

	  for (let i = 1; i < broadLines.length; i++) {
	    // console.log(broadLines[i-1].x+" "+broadLines[i].x);
	    if (Math.abs(broadLines[i - 1].x - broadLines[i].x) < width) {
	      candidates.push([broadLines[i].x, broadLines[i].y]);

	      if (broadLines[i].y > max) {
	        max = broadLines[i].y;
	        maxI = i;
	      }

	      indexes.push(i);
	      count++;
	    } else {
	      if (count > 2) {
	        var fitted = src$5.optimizeSingleLorentzian(candidates, {
	          x: broadLines[maxI].x,
	          y: max,
	          width: Math.abs(candidates[0][0] - candidates[candidates.length - 1][0])
	        });
	        peakList.push({
	          x: fitted[0][0],
	          y: fitted[1][0],
	          width: fitted[2][0],
	          soft: false
	        });
	      } else {
	        // Put back the candidates to the signals list
	        indexes.forEach(index => {
	          peakList.push(broadLines[index]);
	        });
	      }

	      candidates = [[broadLines[i].x, broadLines[i].y]];
	      indexes = [i];
	      max = broadLines[i].y;
	      maxI = i;
	      count = 1;
	    }
	  }

	  peakList.sort(function (a, b) {
	    return a.x - b.x;
	  });
	  return peakList;
	};

	/**
	 * This method will allow to enlarge peaks and prevent overlap between peaks
	 * Because peaks may not be symmetric after we add 2 properties, from and to.
	 * @param {Array} peakList
	 * @param {object} [options={}]
	 * @param {number} [factor=2]
	 * @param {boolean} [overlap=false] by default we don't allow overlap
	 * @return {Array} peakList
	 */

	var broadenPeaks = function broadenPeaks(peakList) {
	  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  const {
	    factor = 2,
	    overlap = false
	  } = options;

	  for (let peak of peakList) {
	    peak.from = peak.x - peak.width / 2 * factor;
	    peak.to = peak.x + peak.width / 2 * factor;
	  }

	  if (!overlap) {
	    for (let i = 0; i < peakList.length - 1; i++) {
	      let peak = peakList[i];
	      let nextPeak = peakList[i + 1];

	      if (peak.to > nextPeak.from) {
	        peak.to = nextPeak.from = (peak.to + nextPeak.from) / 2;
	      }
	    }
	  }

	  for (let peak of peakList) {
	    peak.width = peak.to - peak.from;
	  }

	  return peakList;
	};

	var gsd$1 = gsd_1;
	var post = {
	  optimizePeaks: optimizePeaks,
	  joinBroadPeaks: joinBroadPeaks,
	  broadenPeaks: broadenPeaks
	};
	var src$6 = {
	  gsd: gsd$1,
	  post: post
	};

	function getConverter() {
	  // the following RegExp can only be used for XYdata, some peakTables have values with a "E-5" ...
	  const ntuplesSeparator = /[, \t]+/;
	  const GC_MS_FIELDS = ['TIC', '.RIC', 'SCANNUMBER'];

	  function convertToFloatArray(stringArray) {
	    var floatArray = [];

	    for (let i = 0; i < stringArray.length; i++) {
	      floatArray.push(parseFloat(stringArray[i]));
	    }

	    return floatArray;
	  }

	  class Spectrum {}

	  const defaultOptions = {
	    keepRecordsRegExp: /^$/,
	    xy: false,
	    withoutXY: false,
	    chromatogram: false,
	    keepSpectra: false,
	    noContour: false,
	    nbContourLevels: 7,
	    noiseMultiplier: 5,
	    profiling: false
	  };

	  function convert(jcamp, options) {
	    options = Object.assign({}, defaultOptions, options);
	    var wantXY = !options.withoutXY;
	    var start = Date.now();
	    var ntuples = {};
	    var ldr, dataLabel, dataValue, ldrs;
	    var position, endLine, infos;
	    var result = {};
	    result.profiling = options.profiling ? [] : false;
	    result.logs = [];
	    var spectra = [];
	    result.spectra = spectra;
	    result.info = {};
	    var spectrum = new Spectrum();

	    if (!(typeof jcamp === 'string')) {
	      throw new TypeError('the JCAMP should be a string');
	    }

	    if (result.profiling) {
	      result.profiling.push({
	        action: 'Before split to LDRS',
	        time: Date.now() - start
	      });
	    }

	    ldrs = jcamp.split(/[\r\n]+##/);

	    if (result.profiling) {
	      result.profiling.push({
	        action: 'Split to LDRS',
	        time: Date.now() - start
	      });
	    }

	    if (ldrs[0]) ldrs[0] = ldrs[0].replace(/^[\r\n ]*##/, '');

	    for (let i = 0; i < ldrs.length; i++) {
	      ldr = ldrs[i]; // This is a new LDR

	      position = ldr.indexOf('=');

	      if (position > 0) {
	        dataLabel = ldr.substring(0, position);
	        dataValue = ldr.substring(position + 1).trim();
	      } else {
	        dataLabel = ldr;
	        dataValue = '';
	      }

	      dataLabel = dataLabel.replace(/[_ -]/g, '').toUpperCase();

	      if (dataLabel === 'DATATABLE') {
	        endLine = dataValue.indexOf('\n');
	        if (endLine === -1) endLine = dataValue.indexOf('\r');

	        if (endLine > 0) {
	          var xIndex = -1;
	          var yIndex = -1; // ##DATA TABLE= (X++(I..I)), XYDATA
	          // We need to find the variables

	          infos = dataValue.substring(0, endLine).split(/[ ,;\t]+/);

	          if (infos[0].indexOf('++') > 0) {
	            var firstVariable = infos[0].replace(/.*\(([a-zA-Z0-9]+)\+\+.*/, '$1');
	            var secondVariable = infos[0].replace(/.*\.\.([a-zA-Z0-9]+).*/, '$1');
	            xIndex = ntuples.symbol.indexOf(firstVariable);
	            yIndex = ntuples.symbol.indexOf(secondVariable);
	          }

	          if (xIndex === -1) xIndex = 0;
	          if (yIndex === -1) yIndex = 0;

	          if (ntuples.first) {
	            if (ntuples.first.length > xIndex) {
	              spectrum.firstX = ntuples.first[xIndex];
	            }

	            if (ntuples.first.length > yIndex) {
	              spectrum.firstY = ntuples.first[yIndex];
	            }
	          }

	          if (ntuples.last) {
	            if (ntuples.last.length > xIndex) {
	              spectrum.lastX = ntuples.last[xIndex];
	            }

	            if (ntuples.last.length > yIndex) {
	              spectrum.lastY = ntuples.last[yIndex];
	            }
	          }

	          if (ntuples.vardim && ntuples.vardim.length > xIndex) {
	            spectrum.nbPoints = ntuples.vardim[xIndex];
	          }

	          if (ntuples.factor) {
	            if (ntuples.factor.length > xIndex) {
	              spectrum.xFactor = ntuples.factor[xIndex];
	            }

	            if (ntuples.factor.length > yIndex) {
	              spectrum.yFactor = ntuples.factor[yIndex];
	            }
	          }

	          if (ntuples.units) {
	            if (ntuples.units.length > xIndex) {
	              spectrum.xUnit = ntuples.units[xIndex];
	            }

	            if (ntuples.units.length > yIndex) {
	              spectrum.yUnit = ntuples.units[yIndex];
	            }
	          }

	          spectrum.datatable = infos[0];

	          if (infos[1] && infos[1].indexOf('PEAKS') > -1) {
	            dataLabel = 'PEAKTABLE';
	          } else if (infos[1] && (infos[1].indexOf('XYDATA') || infos[0].indexOf('++') > 0)) {
	            dataLabel = 'XYDATA';
	            spectrum.deltaX = (spectrum.lastX - spectrum.firstX) / (spectrum.nbPoints - 1);
	          }
	        }
	      }

	      if (dataLabel === 'XYDATA') {
	        if (wantXY) {
	          prepareSpectrum(result, spectrum); // well apparently we should still consider it is a PEAK TABLE if there are no '++' after

	          if (dataValue.match(/.*\+\+.*/)) {
	            // ex: (X++(Y..Y))
	            if (!spectrum.deltaX) {
	              spectrum.deltaX = (spectrum.lastX - spectrum.firstX) / (spectrum.nbPoints - 1);
	            }

	            fastParseXYData(spectrum, dataValue);
	          } else {
	            parsePeakTable(spectrum, dataValue, result);
	          }

	          spectra.push(spectrum);
	          spectrum = new Spectrum();
	        }

	        continue;
	      } else if (dataLabel === 'PEAKTABLE') {
	        if (wantXY) {
	          prepareSpectrum(result, spectrum);
	          parsePeakTable(spectrum, dataValue, result);
	          spectra.push(spectrum);
	          spectrum = new Spectrum();
	        }

	        continue;
	      }

	      if (dataLabel === 'PEAKASSIGNMENTS') {
	        if (wantXY) {
	          if (dataValue.match(/.*(XYA).*/)) {
	            // ex: (XYA)
	            parseXYA(spectrum, dataValue);
	          }

	          spectra.push(spectrum);
	          spectrum = new Spectrum();
	        }

	        continue;
	      }

	      if (dataLabel === 'TITLE') {
	        spectrum.title = dataValue;
	      } else if (dataLabel === 'DATATYPE') {
	        spectrum.dataType = dataValue;

	        if (dataValue.indexOf('nD') > -1) {
	          result.twoD = true;
	        }
	      } else if (dataLabel === 'NTUPLES') {
	        if (dataValue.indexOf('nD') > -1) {
	          result.twoD = true;
	        }
	      } else if (dataLabel === 'XUNITS') {
	        spectrum.xUnit = dataValue;
	      } else if (dataLabel === 'YUNITS') {
	        spectrum.yUnit = dataValue;
	      } else if (dataLabel === 'FIRSTX') {
	        spectrum.firstX = parseFloat(dataValue);
	      } else if (dataLabel === 'LASTX') {
	        spectrum.lastX = parseFloat(dataValue);
	      } else if (dataLabel === 'FIRSTY') {
	        spectrum.firstY = parseFloat(dataValue);
	      } else if (dataLabel === 'LASTY') {
	        spectrum.lastY = parseFloat(dataValue);
	      } else if (dataLabel === 'NPOINTS') {
	        spectrum.nbPoints = parseFloat(dataValue);
	      } else if (dataLabel === 'XFACTOR') {
	        spectrum.xFactor = parseFloat(dataValue);
	      } else if (dataLabel === 'YFACTOR') {
	        spectrum.yFactor = parseFloat(dataValue);
	      } else if (dataLabel === 'MAXX') {
	        spectrum.maxX = parseFloat(dataValue);
	      } else if (dataLabel === 'MINX') {
	        spectrum.minX = parseFloat(dataValue);
	      } else if (dataLabel === 'MAXY') {
	        spectrum.maxY = parseFloat(dataValue);
	      } else if (dataLabel === 'MINY') {
	        spectrum.minY = parseFloat(dataValue);
	      } else if (dataLabel === 'DELTAX') {
	        spectrum.deltaX = parseFloat(dataValue);
	      } else if (dataLabel === '.OBSERVEFREQUENCY' || dataLabel === '$SFO1') {
	        if (!spectrum.observeFrequency) {
	          spectrum.observeFrequency = parseFloat(dataValue);
	        }
	      } else if (dataLabel === '.OBSERVENUCLEUS') {
	        if (!spectrum.xType) {
	          result.xType = dataValue.replace(/[^a-zA-Z0-9]/g, '');
	        }
	      } else if (dataLabel === '$SFO2') {
	        if (!result.indirectFrequency) {
	          result.indirectFrequency = parseFloat(dataValue);
	        }
	      } else if (dataLabel === '$OFFSET') {
	        // OFFSET for Bruker spectra
	        result.shiftOffsetNum = 0;

	        if (!spectrum.shiftOffsetVal) {
	          spectrum.shiftOffsetVal = parseFloat(dataValue);
	        }
	      } else if (dataLabel === '$REFERENCEPOINT') ; else if (dataLabel === 'VARNAME') {
	        ntuples.varname = dataValue.split(ntuplesSeparator);
	      } else if (dataLabel === 'SYMBOL') {
	        ntuples.symbol = dataValue.split(ntuplesSeparator);
	      } else if (dataLabel === 'VARTYPE') {
	        ntuples.vartype = dataValue.split(ntuplesSeparator);
	      } else if (dataLabel === 'VARFORM') {
	        ntuples.varform = dataValue.split(ntuplesSeparator);
	      } else if (dataLabel === 'VARDIM') {
	        ntuples.vardim = convertToFloatArray(dataValue.split(ntuplesSeparator));
	      } else if (dataLabel === 'UNITS') {
	        ntuples.units = dataValue.split(ntuplesSeparator);
	      } else if (dataLabel === 'FACTOR') {
	        ntuples.factor = convertToFloatArray(dataValue.split(ntuplesSeparator));
	      } else if (dataLabel === 'FIRST') {
	        ntuples.first = convertToFloatArray(dataValue.split(ntuplesSeparator));
	      } else if (dataLabel === 'LAST') {
	        ntuples.last = convertToFloatArray(dataValue.split(ntuplesSeparator));
	      } else if (dataLabel === 'MIN') {
	        ntuples.min = convertToFloatArray(dataValue.split(ntuplesSeparator));
	      } else if (dataLabel === 'MAX') {
	        ntuples.max = convertToFloatArray(dataValue.split(ntuplesSeparator));
	      } else if (dataLabel === '.NUCLEUS') {
	        if (result.twoD) {
	          result.yType = dataValue.split(ntuplesSeparator)[0];
	        }
	      } else if (dataLabel === 'PAGE') {
	        spectrum.page = dataValue.trim();
	        spectrum.pageValue = parseFloat(dataValue.replace(/^.*=/, ''));
	        spectrum.pageSymbol = spectrum.page.replace(/[=].*/, '');
	        var pageSymbolIndex = ntuples.symbol.indexOf(spectrum.pageSymbol);
	        var unit = '';

	        if (ntuples.units && ntuples.units[pageSymbolIndex]) {
	          unit = ntuples.units[pageSymbolIndex];
	        }

	        if (result.indirectFrequency && unit !== 'PPM') {
	          spectrum.pageValue /= result.indirectFrequency;
	        }
	      } else if (dataLabel === 'RETENTIONTIME') {
	        spectrum.pageValue = parseFloat(dataValue);
	      } else if (isMSField(dataLabel)) {
	        spectrum[convertMSFieldToLabel(dataLabel)] = dataValue;
	      } else if (dataLabel === 'SAMPLEDESCRIPTION') {
	        spectrum.sampleDescription = dataValue;
	      }

	      if (dataLabel.match(options.keepRecordsRegExp)) {
	        if (result.info[dataLabel]) {
	          if (!Array.isArray(result.info[dataLabel])) {
	            result.info[dataLabel] = [result.info[dataLabel]];
	          }

	          result.info[dataLabel].push(dataValue.trim());
	        } else {
	          result.info[dataLabel] = dataValue.trim();
	        }
	      }
	    }

	    if (result.profiling) {
	      result.profiling.push({
	        action: 'Finished parsing',
	        time: Date.now() - start
	      });
	    }

	    if (Object.keys(ntuples).length > 0) {
	      var newNtuples = [];
	      var keys = Object.keys(ntuples);

	      for (let i = 0; i < keys.length; i++) {
	        var key = keys[i];
	        var values = ntuples[key];

	        for (let j = 0; j < values.length; j++) {
	          if (!newNtuples[j]) newNtuples[j] = {};
	          newNtuples[j][key] = values[j];
	        }
	      }

	      result.ntuples = newNtuples;
	    }

	    if (result.twoD && wantXY) {
	      add2D(result, options);

	      if (result.profiling) {
	        result.profiling.push({
	          action: 'Finished countour plot calculation',
	          time: Date.now() - start
	        });
	      }

	      if (!options.keepSpectra) {
	        delete result.spectra;
	      }
	    }

	    if (options.chromatogram) {
	      options.xy = true;
	    }

	    if (options.xy && wantXY) {
	      // the spectraData should not be a oneD array but an object with x and y
	      if (spectra.length > 0) {
	        for (let i = 0; i < spectra.length; i++) {
	          spectrum = spectra[i];

	          if (spectrum.data.length > 0) {
	            for (let j = 0; j < spectrum.data.length; j++) {
	              var data = spectrum.data[j];
	              var newData = {
	                x: new Array(data.length / 2),
	                y: new Array(data.length / 2)
	              };

	              for (var k = 0; k < data.length; k = k + 2) {
	                newData.x[k / 2] = data[k];
	                newData.y[k / 2] = data[k + 1];
	              }

	              spectrum.data[j] = newData;
	            }
	          }
	        }
	      }
	    } // maybe it is a GC (HPLC) / MS. In this case we add a new format


	    if (options.chromatogram) {
	      if (result.spectra.length > 1) {
	        complexChromatogram(result);
	      } else {
	        simpleChromatogram(result);
	      }

	      if (result.profiling) {
	        result.profiling.push({
	          action: 'Finished chromatogram calculation',
	          time: Date.now() - start
	        });
	      }
	    }

	    if (result.profiling) {
	      result.profiling.push({
	        action: 'Total time',
	        time: Date.now() - start
	      });
	    }

	    return result;
	  }

	  function convertMSFieldToLabel(value) {
	    return value.toLowerCase().replace(/[^a-z0-9]/g, '');
	  }

	  function isMSField(dataLabel) {
	    return GC_MS_FIELDS.indexOf(dataLabel) !== -1;
	  }

	  function complexChromatogram(result) {
	    var spectra = result.spectra;
	    var length = spectra.length;
	    var chromatogram = {
	      times: new Array(length),
	      series: {
	        ms: {
	          dimension: 2,
	          data: new Array(length)
	        }
	      }
	    };
	    var existingGCMSFields = [];

	    for (let i = 0; i < GC_MS_FIELDS.length; i++) {
	      var label = convertMSFieldToLabel(GC_MS_FIELDS[i]);

	      if (spectra[0][label]) {
	        existingGCMSFields.push(label);
	        chromatogram.series[label] = {
	          dimension: 1,
	          data: new Array(length)
	        };
	      }
	    }

	    for (let i = 0; i < length; i++) {
	      var spectrum = spectra[i];
	      chromatogram.times[i] = spectrum.pageValue;

	      for (let j = 0; j < existingGCMSFields.length; j++) {
	        chromatogram.series[existingGCMSFields[j]].data[i] = parseFloat(spectrum[existingGCMSFields[j]]);
	      }

	      if (spectrum.data) {
	        chromatogram.series.ms.data[i] = [spectrum.data[0].x, spectrum.data[0].y];
	      }
	    }

	    result.chromatogram = chromatogram;
	  }

	  function simpleChromatogram(result) {
	    var data = result.spectra[0].data[0];
	    result.chromatogram = {
	      times: data.x.slice(),
	      series: {
	        intensity: {
	          dimension: 1,
	          data: data.y.slice()
	        }
	      }
	    };
	  }

	  function prepareSpectrum(result, spectrum) {
	    if (!spectrum.xFactor) spectrum.xFactor = 1;
	    if (!spectrum.yFactor) spectrum.yFactor = 1;

	    if (spectrum.observeFrequency) {
	      if (spectrum.xUnit && spectrum.xUnit.toUpperCase() === 'HZ') {
	        spectrum.xUnit = 'PPM';
	        spectrum.xFactor = spectrum.xFactor / spectrum.observeFrequency;
	        spectrum.firstX = spectrum.firstX / spectrum.observeFrequency;
	        spectrum.lastX = spectrum.lastX / spectrum.observeFrequency;
	        spectrum.deltaX = spectrum.deltaX / spectrum.observeFrequency;
	      }
	    }

	    if (spectrum.shiftOffsetVal) {
	      var shift = spectrum.firstX - spectrum.shiftOffsetVal;
	      spectrum.firstX = spectrum.firstX - shift;
	      spectrum.lastX = spectrum.lastX - shift;
	    }
	  }

	  function getMedian(data) {
	    data = data.sort(compareNumbers);
	    var l = data.length;
	    return data[Math.floor(l / 2)];
	  }

	  function compareNumbers(a, b) {
	    return a - b;
	  }

	  function convertTo3DZ(spectra) {
	    var minZ = spectra[0].data[0][0];
	    var maxZ = minZ;
	    var ySize = spectra.length;
	    var xSize = spectra[0].data[0].length / 2;
	    var z = new Array(ySize);

	    for (let i = 0; i < ySize; i++) {
	      z[i] = new Array(xSize);
	      var xVector = spectra[i].data[0];

	      for (let j = 0; j < xSize; j++) {
	        var value = xVector[j * 2 + 1];
	        z[i][j] = value;
	        if (value < minZ) minZ = value;
	        if (value > maxZ) maxZ = value;
	      }
	    }

	    const firstX = spectra[0].data[0][0];
	    const lastX = spectra[0].data[0][spectra[0].data[0].length - 2]; // has to be -2 because it is a 1D array [x,y,x,y,...]

	    const firstY = spectra[0].pageValue;
	    const lastY = spectra[ySize - 1].pageValue; // Because the min / max value are the only information about the matrix if we invert
	    // min and max we need to invert the array

	    if (firstX > lastX) {
	      for (let spectrum of z) {
	        spectrum.reverse();
	      }
	    }

	    if (firstY > lastY) {
	      z.reverse();
	    }

	    return {
	      z: z,
	      minX: Math.min(firstX, lastX),
	      maxX: Math.max(firstX, lastX),
	      minY: Math.min(firstY, lastY),
	      maxY: Math.max(firstY, lastY),
	      minZ: minZ,
	      maxZ: maxZ,
	      noise: getMedian(z[0].map(Math.abs))
	    };
	  }

	  function add2D(result, options) {
	    var zData = convertTo3DZ(result.spectra);

	    if (!options.noContour) {
	      result.contourLines = generateContourLines(zData, options);
	      delete zData.z;
	    }

	    result.minMax = zData;
	  }

	  function generateContourLines(zData, options) {
	    var noise = zData.noise;
	    var z = zData.z;
	    var povarHeight0, povarHeight1, povarHeight2, povarHeight3;
	    var isOver0, isOver1, isOver2, isOver3;
	    var nbSubSpectra = z.length;
	    var nbPovars = z[0].length;
	    var pAx, pAy, pBx, pBy;
	    var x0 = zData.minX;
	    var xN = zData.maxX;
	    var dx = (xN - x0) / (nbPovars - 1);
	    var y0 = zData.minY;
	    var yN = zData.maxY;
	    var dy = (yN - y0) / (nbSubSpectra - 1);
	    var minZ = zData.minZ;
	    var maxZ = zData.maxZ; // System.out.prvarln('y0 '+y0+' yN '+yN);
	    // -------------------------
	    // Povars attribution
	    //
	    // 0----1
	    // |  / |
	    // | /  |
	    // 2----3
	    //
	    // ---------------------d------

	    var iter = options.nbContourLevels * 2;
	    var contourLevels = new Array(iter);
	    var lineZValue;

	    for (var level = 0; level < iter; level++) {
	      // multiply by 2 for positif and negatif
	      var contourLevel = {};
	      contourLevels[level] = contourLevel;
	      var side = level % 2;
	      var factor = (maxZ - options.noiseMultiplier * noise) * Math.exp((level >> 1) - options.nbContourLevels);

	      if (side === 0) {
	        lineZValue = factor + options.noiseMultiplier * noise;
	      } else {
	        lineZValue = 0 - factor - options.noiseMultiplier * noise;
	      }

	      var lines = [];
	      contourLevel.zValue = lineZValue;
	      contourLevel.lines = lines;
	      if (lineZValue <= minZ || lineZValue >= maxZ) continue;

	      for (var iSubSpectra = 0; iSubSpectra < nbSubSpectra - 1; iSubSpectra++) {
	        var subSpectra = z[iSubSpectra];
	        var subSpectraAfter = z[iSubSpectra + 1];

	        for (var povar = 0; povar < nbPovars - 1; povar++) {
	          povarHeight0 = subSpectra[povar];
	          povarHeight1 = subSpectra[povar + 1];
	          povarHeight2 = subSpectraAfter[povar];
	          povarHeight3 = subSpectraAfter[povar + 1];
	          isOver0 = povarHeight0 > lineZValue;
	          isOver1 = povarHeight1 > lineZValue;
	          isOver2 = povarHeight2 > lineZValue;
	          isOver3 = povarHeight3 > lineZValue; // Example povar0 is over the plane and povar1 and
	          // povar2 are below, we find the varersections and add
	          // the segment

	          if (isOver0 !== isOver1 && isOver0 !== isOver2) {
	            pAx = povar + (lineZValue - povarHeight0) / (povarHeight1 - povarHeight0);
	            pAy = iSubSpectra;
	            pBx = povar;
	            pBy = iSubSpectra + (lineZValue - povarHeight0) / (povarHeight2 - povarHeight0);
	            lines.push(pAx * dx + x0);
	            lines.push(pAy * dy + y0);
	            lines.push(pBx * dx + x0);
	            lines.push(pBy * dy + y0);
	          } // remove push does not help !!!!


	          if (isOver3 !== isOver1 && isOver3 !== isOver2) {
	            pAx = povar + 1;
	            pAy = iSubSpectra + 1 - (lineZValue - povarHeight3) / (povarHeight1 - povarHeight3);
	            pBx = povar + 1 - (lineZValue - povarHeight3) / (povarHeight2 - povarHeight3);
	            pBy = iSubSpectra + 1;
	            lines.push(pAx * dx + x0);
	            lines.push(pAy * dy + y0);
	            lines.push(pBx * dx + x0);
	            lines.push(pBy * dy + y0);
	          } // test around the diagonal


	          if (isOver1 !== isOver2) {
	            pAx = (povar + 1 - (lineZValue - povarHeight1) / (povarHeight2 - povarHeight1)) * dx + x0;
	            pAy = (iSubSpectra + (lineZValue - povarHeight1) / (povarHeight2 - povarHeight1)) * dy + y0;

	            if (isOver1 !== isOver0) {
	              pBx = povar + 1 - (lineZValue - povarHeight1) / (povarHeight0 - povarHeight1);
	              pBy = iSubSpectra;
	              lines.push(pAx);
	              lines.push(pAy);
	              lines.push(pBx * dx + x0);
	              lines.push(pBy * dy + y0);
	            }

	            if (isOver2 !== isOver0) {
	              pBx = povar;
	              pBy = iSubSpectra + 1 - (lineZValue - povarHeight2) / (povarHeight0 - povarHeight2);
	              lines.push(pAx);
	              lines.push(pAy);
	              lines.push(pBx * dx + x0);
	              lines.push(pBy * dy + y0);
	            }

	            if (isOver1 !== isOver3) {
	              pBx = povar + 1;
	              pBy = iSubSpectra + (lineZValue - povarHeight1) / (povarHeight3 - povarHeight1);
	              lines.push(pAx);
	              lines.push(pAy);
	              lines.push(pBx * dx + x0);
	              lines.push(pBy * dy + y0);
	            }

	            if (isOver2 !== isOver3) {
	              pBx = povar + (lineZValue - povarHeight2) / (povarHeight3 - povarHeight2);
	              pBy = iSubSpectra + 1;
	              lines.push(pAx);
	              lines.push(pAy);
	              lines.push(pBx * dx + x0);
	              lines.push(pBy * dy + y0);
	            }
	          }
	        }
	      }
	    }

	    return {
	      minX: zData.minX,
	      maxX: zData.maxX,
	      minY: zData.minY,
	      maxY: zData.maxY,
	      segments: contourLevels
	    };
	  }

	  function fastParseXYData(spectrum, value) {
	    // TODO need to deal with result
	    //  console.log(value);
	    // we check if deltaX is defined otherwise we calculate it
	    var yFactor = spectrum.yFactor;
	    var deltaX = spectrum.deltaX;
	    spectrum.isXYdata = true; // TODO to be improved using 2 array {x:[], y:[]}

	    var currentData = [];
	    spectrum.data = [currentData];
	    var currentX = spectrum.firstX;
	    var currentY = spectrum.firstY; // we skip the first line
	    //

	    var endLine = false;
	    var ascii;
	    let i = 0;

	    for (; i < value.length; i++) {
	      ascii = value.charCodeAt(i);

	      if (ascii === 13 || ascii === 10) {
	        endLine = true;
	      } else {
	        if (endLine) break;
	      }
	    } // we proceed taking the i after the first line


	    var newLine = true;
	    var isDifference = false;
	    var isLastDifference = false;
	    var lastDifference = 0;
	    var isDuplicate = false;
	    var inComment = false;
	    var currentValue = 0; // can be a difference or a duplicate

	    var lastValue = 0; // must be the real last value

	    var isNegative = false;
	    var inValue = false;
	    var skipFirstValue = false;
	    var decimalPosition = 0;

	    for (; i <= value.length; i++) {
	      if (i === value.length) ascii = 13;else ascii = value.charCodeAt(i);

	      if (inComment) {
	        // we should ignore the text if we are after $$
	        if (ascii === 13 || ascii === 10) {
	          newLine = true;
	          inComment = false;
	        }
	      } else {
	        // when is it a new value ?
	        // when it is not a digit, . or comma
	        // it is a number that is either new or we continue
	        if (ascii <= 57 && ascii >= 48) {
	          // a number
	          inValue = true;

	          if (decimalPosition > 0) {
	            currentValue += (ascii - 48) / Math.pow(10, decimalPosition++);
	          } else {
	            currentValue *= 10;
	            currentValue += ascii - 48;
	          }
	        } else if (ascii === 44 || ascii === 46) {
	          // a "," or "."
	          inValue = true;
	          decimalPosition++;
	        } else {
	          if (inValue) {
	            // need to process the previous value
	            if (newLine) {
	              newLine = false; // we don't check the X value
	              // console.log("NEW LINE",isDifference, lastDifference);
	              // if new line and lastDifference, the first value is just a check !
	              // that we don't check ...

	              if (isLastDifference) skipFirstValue = true;
	            } else {
	              // need to deal with duplicate and differences
	              if (skipFirstValue) {
	                skipFirstValue = false;
	              } else {
	                if (isDifference) {
	                  lastDifference = isNegative ? 0 - currentValue : currentValue;
	                  isLastDifference = true;
	                  isDifference = false;
	                } else if (!isDuplicate) {
	                  lastValue = isNegative ? 0 - currentValue : currentValue;
	                }

	                var duplicate = isDuplicate ? currentValue - 1 : 1;

	                for (var j = 0; j < duplicate; j++) {
	                  if (isLastDifference) {
	                    currentY += lastDifference;
	                  } else {
	                    currentY = lastValue;
	                  }

	                  currentData.push(currentX);
	                  currentData.push(currentY * yFactor);
	                  currentX += deltaX;
	                }
	              }
	            }

	            isNegative = false;
	            currentValue = 0;
	            decimalPosition = 0;
	            inValue = false;
	            isDuplicate = false;
	          } // positive SQZ digits @ A B C D E F G H I (ascii 64-73)


	          if (ascii < 74 && ascii > 63) {
	            inValue = true;
	            isLastDifference = false;
	            currentValue = ascii - 64;
	          } else if (ascii > 96 && ascii < 106) {
	            // negative SQZ digits a b c d e f g h i (ascii 97-105)
	            inValue = true;
	            isLastDifference = false;
	            currentValue = ascii - 96;
	            isNegative = true;
	          } else if (ascii === 115) {
	            // DUP digits S T U V W X Y Z s (ascii 83-90, 115)
	            inValue = true;
	            isDuplicate = true;
	            currentValue = 9;
	          } else if (ascii > 82 && ascii < 91) {
	            inValue = true;
	            isDuplicate = true;
	            currentValue = ascii - 82;
	          } else if (ascii > 73 && ascii < 83) {
	            // positive DIF digits % J K L M N O P Q R (ascii 37, 74-82)
	            inValue = true;
	            isDifference = true;
	            currentValue = ascii - 73;
	          } else if (ascii > 105 && ascii < 115) {
	            // negative DIF digits j k l m n o p q r (ascii 106-114)
	            inValue = true;
	            isDifference = true;
	            currentValue = ascii - 105;
	            isNegative = true;
	          } else if (ascii === 36 && value.charCodeAt(i + 1) === 36) {
	            // $ sign, we need to check the next one
	            inValue = true;
	            inComment = true;
	          } else if (ascii === 37) {
	            // positive DIF digits % J K L M N O P Q R (ascii 37, 74-82)
	            inValue = true;
	            isDifference = true;
	            currentValue = 0;
	            isNegative = false;
	          } else if (ascii === 45) {
	            // a "-"
	            // check if after there is a number, decimal or comma
	            var ascii2 = value.charCodeAt(i + 1);

	            if (ascii2 >= 48 && ascii2 <= 57 || ascii2 === 44 || ascii2 === 46) {
	              inValue = true;
	              if (!newLine) isLastDifference = false;
	              isNegative = true;
	            }
	          } else if (ascii === 13 || ascii === 10) {
	            newLine = true;
	            inComment = false;
	          } // and now analyse the details ... space or tabulation
	          // if "+" we just don't care

	        }
	      }
	    }
	  }

	  function parseXYA(spectrum, value) {
	    var removeSymbolRegExp = /(\(+|\)+|<+|>+|\s+)/g;
	    spectrum.isXYAdata = true;
	    var values;
	    var currentData = [];
	    spectrum.data = [currentData];
	    var lines = value.split(/,? *,?[;\r\n]+ */);

	    for (let i = 1; i < lines.length; i++) {
	      values = lines[i].trim().replace(removeSymbolRegExp, '').split(',');
	      currentData.push(parseFloat(values[0]));
	      currentData.push(parseFloat(values[1]));
	    }
	  }

	  function parsePeakTable(spectrum, value, result) {
	    var removeCommentRegExp = /\$\$.*/;
	    var peakTableSplitRegExp = /[,\t ]+/;
	    spectrum.isPeaktable = true;
	    var values;
	    var currentData = [];
	    spectrum.data = [currentData]; // counts for around 20% of the time

	    var lines = value.split(/,? *,?[;\r\n]+ */);

	    for (let i = 1; i < lines.length; i++) {
	      values = lines[i].trim().replace(removeCommentRegExp, '').split(peakTableSplitRegExp);

	      if (values.length % 2 === 0) {
	        for (let j = 0; j < values.length; j = j + 2) {
	          // takes around 40% of the time to add and parse the 2 values nearly exclusively because of parseFloat
	          currentData.push(parseFloat(values[j]) * spectrum.xFactor);
	          currentData.push(parseFloat(values[j + 1]) * spectrum.yFactor);
	        }
	      } else {
	        result.logs.push("Format error: ".concat(values));
	      }
	    }
	  }

	  return convert;
	}

	var convert = getConverter();

	function JcampConverter(input, options, useWorker) {
	  if (typeof options === 'boolean') {
	    useWorker = options;
	    options = {};
	  }

	  if (useWorker) {
	    return postToWorker(input, options);
	  } else {
	    return convert(input, options);
	  }
	}

	var stamps = {};
	var worker;

	function postToWorker(input, options) {
	  if (!worker) {
	    createWorker();
	  }

	  return new Promise(function (resolve) {
	    var stamp = "".concat(Date.now()).concat(Math.random());
	    stamps[stamp] = resolve;
	    worker.postMessage(JSON.stringify({
	      stamp: stamp,
	      input: input,
	      options: options
	    }));
	  });
	}

	function createWorker() {
	  var workerURL = URL.createObjectURL(new Blob(["var getConverter =".concat(getConverter.toString(), ";var convert = getConverter(); onmessage = function (event) { var data = JSON.parse(event.data); postMessage(JSON.stringify({stamp: data.stamp, output: convert(data.input, data.options)})); };")], {
	    type: 'application/javascript'
	  }));
	  worker = new Worker(workerURL);
	  URL.revokeObjectURL(workerURL);
	  worker.addEventListener('message', function (event) {
	    var data = JSON.parse(event.data);
	    var stamp = data.stamp;

	    if (stamps[stamp]) {
	      stamps[stamp](data.output);
	    }
	  });
	}

	function createTree(jcamp) {
	  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  const {
	    flatten = false
	  } = options;

	  if (typeof jcamp !== 'string') {
	    throw new TypeError('the JCAMP should be a string');
	  }

	  let lines = jcamp.split(/[\r\n]+/);
	  let flat = [];
	  let stack = [];
	  let result = [];
	  let current;
	  let ntupleLevel = 0;
	  let spaces = jcamp.includes('## ');

	  for (var i = 0; i < lines.length; i++) {
	    let line = lines[i];
	    let labelLine = spaces ? line.replace(/ /g, '') : line;

	    if (labelLine.substring(0, 9) === '##NTUPLES') {
	      ntupleLevel++;
	    }

	    if (labelLine.substring(0, 7) === '##TITLE') {
	      let title = [labelLine.substring(8).trim()];

	      for (let j = i + 1; j < lines.length; j++) {
	        if (lines[j].startsWith('##')) {
	          break;
	        } else {
	          title.push(lines[j].trim());
	        }
	      }

	      stack.push({
	        title: title.join('\n'),
	        jcamp: "".concat(line, "\n"),
	        children: []
	      });
	      current = stack[stack.length - 1];
	      flat.push(current);
	    } else if (labelLine.substring(0, 5) === '##END' && ntupleLevel === 0) {
	      current.jcamp += "".concat(line, "\n");
	      var finished = stack.pop();

	      if (stack.length !== 0) {
	        current = stack[stack.length - 1];
	        current.children.push(finished);
	      } else {
	        current = undefined;
	        result.push(finished);
	      }
	    } else if (current && current.jcamp) {
	      current.jcamp += "".concat(line, "\n");
	      var match = labelLine.match(/^##(.*?)=(.+)/);

	      if (match) {
	        var dataLabel = match[1].replace(/[ _-]/g, '').toUpperCase();

	        if (dataLabel === 'DATATYPE') {
	          current.dataType = match[2].trim();
	        }
	      }
	    }

	    if (labelLine.substring(0, 5) === '##END' && ntupleLevel > 0) {
	      ntupleLevel--;
	    }
	  }

	  if (flatten) {
	    flat.forEach(entry => {
	      entry.children = undefined;
	    });
	    return flat;
	  } else {
	    return result;
	  }
	}

	var src$7 = {
	  convert: JcampConverter,
	  createTree: createTree
	};

	function sortX(points) {
	  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  const {
	    x,
	    y
	  } = points;
	  const {
	    reverse = false
	  } = options;
	  var sortFunc;

	  if (!reverse) {
	    sortFunc = (a, b) => a.x - b.x;
	  } else {
	    sortFunc = (a, b) => b.x - a.x;
	  }

	  var grouped = x.map((val, index) => ({
	    x: val,
	    y: y[index]
	  })).sort(sortFunc);
	  var response = {
	    x: x.slice(),
	    y: y.slice()
	  };

	  for (var i = 0; i < x.length; i++) {
	    response.x[i] = grouped[i].x;
	    response.y[i] = grouped[i].y;
	  }

	  return response;
	}

	/**
	 * In place modification of the 2 arrays to make X unique and sum the Y if X has the same value
	 * @param xs
	 * @param ys
	 */

	function uniqueX(xs, ys) {
	  if (xs.length < 2) return;
	  var current = xs[0];
	  var counter = 0;

	  for (var i = 1; i < xs.length; i++) {
	    if (current !== xs[i]) {
	      counter++;
	      current = xs[i];
	      xs[counter] = xs[i];

	      if (i !== counter) {
	        ys[counter] = 0;
	      }
	    }

	    if (i !== counter) {
	      ys[counter] += ys[i];
	    }
	  }

	  xs.length = counter + 1;
	  ys.length = counter + 1;
	}

	var src$8 = uniqueX;

	/**
	 * Parse a text-file and convert it to an array of XY points
	 * @param {string} text - csv or tsv strings
	 * @param {object} [options]
	 * @param {string} [options.arrayType = 'xyxy'] - xxyy or xyxy
	 * * 'xxyy' `[[x1,x2,x3,...],[y1,y2,y2,...]]`
	 * * 'xyxy' `[[x1,y1],[x2,y2],[x3,y3], ...]]`
	 * @param {boolean} [options.normalize = false] - will set the maximum value to 1
	 * @param {boolean} [options.uniqueX = false] - Make the X values unique (works only with 'xxyy' format). If the X value is repeated the sum of Y is done.
	 * @param {number} [options.xColumn = 0] - A number that specifies the x column
	 * @param {number} [options.yColumn = 1] - A number that specifies the y column
	 * @param {number} [options.maxNumberColumns = (Math.max(xColumn, yColumn)+1)] - A number that specifies the maximum number of y columns
	 * @param {number} [options.minNumberColumns = (Math.max(xColumn, yColumn)+1)] - A number that specifies the minimum number of y columns
	 * @param {boolean} [options.keepInfo = false] - shoud we keep the non numeric lines. In this case the system will return an object {data, info}
	 * @return {Array<Array<number>>} - check the 'arrayType' option
	 */

	function parseXY(text) {
	  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  const {
	    normalize = false,
	    uniqueX = false,
	    arrayType = 'xyxy',
	    xColumn = 0,
	    yColumn = 1,
	    keepInfo = false,
	    maxNumberColumns = Math.max(xColumn, yColumn) + 1,
	    minNumberColumns = Math.max(xColumn, yColumn) + 1
	  } = options;
	  var lines = text.split(/[\r\n]+/);

	  if (arrayType !== 'xxyy' && arrayType !== 'xyxy') {
	    throw new Error("unsupported arrayType (".concat(arrayType, ")"));
	  }

	  var maxY = Number.MIN_VALUE;
	  var result = [[], []];
	  var info = [];

	  for (var l = 0; l < lines.length; l++) {
	    var line = lines[l].trim(); // we will consider only lines that contains only numbers

	    if (line.match(/[0-9]+/) && line.match(/^[0-9eE,;. \t+-]+$/)) {
	      var fields = line.split(/,[; \t]+|[; \t]+/);

	      if (fields.length === 1) {
	        fields = line.split(/[,; \t]+/);
	      }

	      if (fields && fields.length >= minNumberColumns && fields.length <= maxNumberColumns) {
	        let x = parseFloat(fields[xColumn].replace(',', '.'));
	        let y = parseFloat(fields[yColumn].replace(',', '.'));
	        if (y > maxY) maxY = y;
	        result[0].push(x);
	        result[1].push(y);
	      }
	    } else if (line) {
	      info.push({
	        position: result[0].length,
	        value: line
	      });
	    }
	  }

	  if (normalize) {
	    for (var i = 0; i < result[0].length; i++) {
	      result[1][i] /= maxY;
	    }
	  }

	  if (uniqueX) {
	    src$8(result[0], result[1]);
	  }

	  if (arrayType === 'xyxy') {
	    var newResult = [];

	    for (let i = 0; i < result[0].length; i++) {
	      newResult.push([result[0][i], result[1][i]]);
	    }

	    result = newResult;
	  }

	  if (!keepInfo) return result;
	  return {
	    info,
	    data: result
	  };
	}

	var src$9 = /*#__PURE__*/Object.freeze({
		parseXY: parseXY
	});

	var lib = createCommonjsModule(function (module, exports) {

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  function _interopDefault(ex) {
	    return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
	  }

	  var min$1 = _interopDefault(min);

	  var max$1 = _interopDefault(max);

	  var sortX$1 = _interopDefault(sortX);

	  function getAnnotations(spectrum) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    const {
	      fillColor = 'green',
	      strokeColor = 'red',
	      creationFct
	    } = options;
	    const peaks = spectrum.peaks;
	    if (!peaks) return [];
	    let annotations = peaks.map(peak => {
	      var annotation = {
	        line: 1,
	        type: 'rect',
	        strokeColor: strokeColor,
	        strokeWidth: 0,
	        fillColor: fillColor
	      };

	      if (creationFct) {
	        creationFct(annotation, peak);
	      }

	      oneAnnotation(annotation, peak);
	      return annotation;
	    });
	    return annotations;
	  }

	  function oneAnnotation(annotation, peak) {
	    annotation.label = [{
	      text: peak.kind,
	      size: '18px',
	      anchor: 'middle',
	      color: 'red',
	      position: {
	        x: peak.wavelength,
	        y: peak.intensity,
	        dy: '-15px'
	      }
	    }];
	    annotation.position = [{
	      x: peak.wavelength,
	      y: peak.intensity,
	      dy: '-10px',
	      dx: '-1px'
	    }, {
	      x: peak.wavelength,
	      y: peak.intensity,
	      dy: '-5px',
	      dx: '1px'
	    }];
	  }
	  /**
	   *
	   * @param {Spectrum} spectrum
	   * @param {object} peak
	   */


	  function addPeak(spectrum) {
	    let peak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (!peak.wavelength) {
	      throw new Error('addPeak: peak mush have wavelength property');
	    }

	    const {
	      wavelength,
	      intensity
	    } = peak;

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
	  /**
	   *
	   * @param {Spectrum} spectrum
	   * @param {number} targetWavelength
	   * @param {object} [options]
	   * @param {number} [options.range=0] Search in a range around the targetWavelength
	   * @param {boolean} [options.optimize=false] Search for the closest peak to the targetWavelength
	   */


	  function peakPicking(spectrum, targetWavelength) {
	    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    const {
	      range = 0,
	      optimize = false
	    } = options; // find the peak that is the closest to the click

	    let bestPeak = getClosest(spectrum, targetWavelength);

	    if (optimize) {
	      findClosest(spectrum, bestPeak);
	    } else if (range) {
	      bestInRange(spectrum, bestPeak, targetWavelength, range);
	    }

	    return addPeak(spectrum, bestPeak);
	  }

	  function getClosest(spectrum, targetWavelength) {
	    let bestPeak = {
	      intensity: spectrum.intensity[0],
	      wavelength: spectrum.wavelength[0],
	      index: 0
	    };
	    let error = Math.abs(targetWavelength - bestPeak.wavelength);

	    for (let i = 1; i < spectrum.wavelength.length; i++) {
	      let newError = Math.abs(targetWavelength - spectrum.wavelength[i]);

	      if (newError < error) {
	        error = newError;
	        setBestPeak(spectrum, bestPeak, i);
	      }
	    }

	    return bestPeak;
	  }

	  function bestInRange(spectrum, bestPeak, targetWavelength, range) {
	    // we search the minimum based on wavelength +/- range
	    for (let i = 0; i < spectrum.wavelength.length; i++) {
	      if (Math.abs(spectrum.wavelength[i] - targetWavelength) <= range) {
	        if (spectrum.intensity[i] > bestPeak.intensity) {
	          setBestPeak(spectrum, bestPeak, i);
	        }
	      }
	    }
	  }

	  function findClosest(spectrum, bestPeak) {
	    let index = bestPeak.index;
	    let previousIndex;

	    while (index !== previousIndex) {
	      previousIndex = index;

	      if (index > 0 && spectrum.intensity[index - 1] > bestPeak.intensity) {
	        index--;
	        setBestPeak(spectrum, bestPeak, index);
	      } else if (index < spectrum.wavelength.length - 1 && spectrum.intensity[index + 1] > bestPeak.intensity) {
	        index++;
	        setBestPeak(spectrum, bestPeak, index);
	      }
	    }
	  }

	  function setBestPeak(spectrum, bestPeak, index) {
	    bestPeak.index = index;
	    bestPeak.wavelength = spectrum.wavelength[index];
	    bestPeak.intensity = spectrum.intensity[index];
	  }
	  /**
	   *
	   * @param {*} spectrum
	   * @param {object} [options={}]
	   * @param {number} [options.fromWavelength=0]
	   * @param {number} [options.toWavelength=5000]
	   * @param {number} [options.noiseLevel=0.01] - Specify the level of the noise
	   * @param {number} [options.minMaxRatio=0.05] - Threshold to determine if a given peak should be considered as a noise
	   * @param {boolean} [options.replaceExisting=true] - Replace existing peaks
	   */


	  function autoPeakPicking(spectrum) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    const {
	      noiseLevel = 0.001,
	      minMaxRatio = 0.05,
	      fromWavelength = 0,
	      toWavelength = 5000,
	      replaceExisting = true
	    } = options;
	    let peaks = src$6.gsd(spectrum.wavelength, spectrum.absorbance, {
	      noiseLevel,
	      minMaxRatio,
	      realTopDetection: true,
	      maxCriteria: true,
	      smoothY: false,
	      sgOptions: {
	        windowSize: 7,
	        polynomial: 3
	      }
	    });
	    peaks = peaks.filter(peak => peak.x >= fromWavelength && peak.x <= toWavelength);

	    if (replaceExisting) {
	      while (spectrum.peaks.length) {
	        spectrum.peaks.pop();
	      }
	    }

	    peakLoop: for (let peak of peaks) {
	      for (let existing of spectrum.peaks) {
	        if (Number(existing.wavelength) === Number(peak.x)) continue peakLoop;
	      }

	      addPeak(spectrum, {
	        wavelength: peak.x,
	        absorbance: peak.y
	      });
	    }
	  }
	  /**
	   * Class allowing manipulate one Raman spectrum
	   * @class spectrum
	   * @param {object} [json={}] - object containing a spectrum
	   * @param {Array} [json.wavelength=[]] - wavelength
	   * @param {Array} [json.intensity=[]] - intensity values
	   */


	  class Spectrum {
	    constructor(json) {
	      this.wavelength = json.wavelength || [];
	      this.intensity = json.intensity || [];
	      this.peaks = [];
	      check(this);
	    }
	    /**
	     *
	     * @param {Array} [peaks=[]] array of peaks. Peaks are composed of transmittance, wavelength, kind
	     */


	    setPeaks() {
	      let peaks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	      this.peaks = peaks;
	    }

	    peakPicking(targetWavelength) {
	      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      peakPicking(this, targetWavelength, options);
	    }

	    getData() {
	      return {
	        x: this.wavelength,
	        y: this.intensity
	      };
	    }

	  }

	  Spectrum.prototype.getAnnotations = function (options) {
	    return getAnnotations(this, options);
	  };

	  Spectrum.prototype.autoPeakPicking = function (options) {
	    return autoPeakPicking(this, options);
	  };

	  function check(spectrum) {
	    if (spectrum.wavelength.length > 0) {
	      spectrum.minWavelength = min$1(spectrum.wavelength);
	    }

	    if (spectrum.wavelength.length > 0) {
	      spectrum.maxWavelength = max$1(spectrum.wavelength);
	    }

	    if (spectrum.intensity.length > 0) {
	      spectrum.minIntensity = min$1(spectrum.intensity);
	    }

	    if (spectrum.intensity.length > 0) {
	      spectrum.maxIntensity = max$1(spectrum.intensity);
	    }
	  }
	  /**
	   * Creates a new Chromatogram element based in a JCAMP string
	   * @param {string} jcamp - String containing the JCAMP data
	   * @return {Spectrum} - New class element with the given data
	   */


	  function fromJcamp(jcamp) {
	    const data = src$7.convert(jcamp, {
	      xy: true
	    });
	    let spectrum = data.spectra[0].data[0];
	    spectrum = sortX$1(spectrum);
	    return new Spectrum({
	      wavelength: spectrum.x,
	      intensity: spectrum.y
	    });
	  }
	  /**
	   * Creates a new Chromatogram element based in a Txt string
	   * @param {string} text - String containing the data as CSV or TSV
	   * @param {object} [options] - Options object for the parser
	   * @param {string} [options.kind] - Absorbance or Transmisstance
	   * @return {Spectrum} - New class element with the given data
	   */


	  function fromText(text) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    options = Object.assign({}, options, {
	      arrayType: 'xxyy'
	    });
	    const data = src$9.parseXY(text, options);
	    let spectrum = sortX$1({
	      x: data[0],
	      y: data[1]
	    });
	    return new Spectrum({
	      wavelength: spectrum.x,
	      intensity: spectrum.y
	    });
	  }

	  exports.Spectrum = Spectrum;
	  exports.fromJcamp = fromJcamp;
	  exports.fromText = fromText;
	});
	var index = unwrapExports(lib);
	var lib_1 = lib.Spectrum;
	var lib_2 = lib.fromJcamp;
	var lib_3 = lib.fromText;

	exports.Spectrum = lib_1;
	exports.default = index;
	exports.fromJcamp = lib_2;
	exports.fromText = lib_3;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=raman-spectrum.js.map
