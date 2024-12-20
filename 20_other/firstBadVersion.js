// Clear binary search!

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 0;
    let end = n;

    while (start < end) {
      const mid = Math.floor(start + (end - start) / 2);

      // This makes sense. We set end to mid if mid is bad, because we want to keep mid in the search space.
      // And we are searching for FIRST bad version.
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
};

// ====================================================================================================

const solve = solution((version) => version >= 4);

console.log(solve(12)); // 4
