/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = (n) => {

    let output = [];

    for (let i = 1; i <= n; i++) {
        let outputString = '';

        if (i % 3 == 0) { outputString += 'Fizz'; }
        if (i % 5 == 0) { outputString += 'Buzz'; }

        if (!outputString) { outputString = `${i}`; }

        output.push(outputString);
    }

    return output;
};

// @lc code=end