const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = [];
  let dnsStats = {};
  domains = domains.map(el => el.split('.').reverse());
  domains = domains.forEach(el => {
    let dns = '';
    for (let word of el) {
      dns += `.${word}`;
      res.push(dns);
    }
  });

  for (let dns of res) {
    if (dnsStats.hasOwnProperty(dns)) {
      dnsStats[dns]++;
    } else {
      dnsStats[dns] = 1;
    }
  }
  return dnsStats;
}

module.exports = {
  getDNSStats
};
