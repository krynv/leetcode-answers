# Reverse Integer

## Description

Given a 32-bit signed integer, reverse digits of an integer.

**Example 1**:

    Input: 123
    Output: 321

**Example 2**:

    Input: -123
    Output: -321

**Example 3**:

    Input: 120
    Output: 21

**Note**:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

## My Solution

```javascript
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

```

## Analysis

* 1032/1032 cases passed (68 ms)
* Your runtime beats 90.37 % of javascript submissions
* Your memory usage beats 55.21 % of javascript submissions (35.9 MB)

## Explanation

I know that JavaScript contains a built in function for reversing strings. 

A given string can be reversed like so:

```javascript
//our given string
let string = 'hello';

//split it in order to get the individual letters in an array
let splitString = string.split(""); 
// ["h", "e", "l", "l", "o"]

//reverse that array
let reversedString = splitString.reverse(); 
// ["o", "l", "l", "e", "h"]

//join it back together to form a string
let joinedString = reversedString.join("");
// "olleh"
```

So, for this solution, we firstly need to convert the numbers into a string, then process them to reverse the output.
But we also need to make sure that the numbers passed in are real numbers, hence the use of `Math.abs()`. 

One of the rules for this test is that we have to check for 32-bit interger overflows. 
We can create a check for this using the `Math.pow()` function. 
This will allow us to check if our value is within the 32-bit integer range.

Using the `**` operator allows us to check if our reversed value is within the 32-bit range (as it has the same functionality as `Math.pow()`).

And finally, just before we return a value, we need to check if it's a positive or negative integer. 
This is determined by the `Math.sign()` value of `x` and can be used to convert our returning, reversed string into a positive or a negative value.
