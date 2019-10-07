# FizzBuzz

## Description

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

**Example:**
```
n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
```

## My Solution

```javascript
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
```

## Analysis

* 8/8 cases passed (56 ms)
* Your runtime beats 93.3 % of javascript submissions
* Your memory usage beats 25 % of javascript submissions (37.5 MB)

## Explanation

Loop at `n`, using the modulo operator to determine whether the value is even or odd.
For multiples of 3, output `Fizz`. 
For multiples of 5, output `Buzz`.
For multiples of both, output `FizzBuzz`.
If not a multiple of any, just output the value as a string. 

Return the iterated array.