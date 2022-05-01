const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, counter = 1) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        counter++;
        return this.calculateDepth(arr.flat(1), counter);
      }
    }
    return counter;
  }
}

module.exports = {
  DepthCalculator
};
