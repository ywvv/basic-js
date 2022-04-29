const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

console.log(MODERN_ACTIVITY/1)/(0.693/HALF_LIFE_PERIOD);
function dateSample(sampleActivity) {
  const func = Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/(0.693/HALF_LIFE_PERIOD));
  if (typeof(sampleActivity) == 'string' && Number(sampleActivity) > 0 && func > 0 && Number(sampleActivity)) {
    return func;
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};