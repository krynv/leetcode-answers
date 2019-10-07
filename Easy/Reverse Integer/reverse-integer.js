/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = (x) => {
    let rev = Math.abs(x).toString().split('').reverse().join('');
    if (rev > 2 ** 31) return 0;
    return rev * Math.sign(x);
};
// @lc code=end