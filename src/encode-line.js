const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let count = 1;
    while (str[i + 1] === char[0]) {
      count++;
      i++;
    }
    result += count === 1 ? char : count + char;
  }
  return result;
}

module.exports = {
  encodeLine
};
