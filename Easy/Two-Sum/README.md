# Two Sum

## Description

Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the _same_ element twice.

*Example*:
```
    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
```
## My Solution

```javascript
/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
    var answ = [];

    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in answ) {
            return [answ[target - nums[i]], i]
        } else {
            answ[nums[i]] = i;
        }
    } 
};
```

## Analysis

* 29/29 cases passed (44 ms)
* Your runtime beats 99.41 % of javascript submissions
* Your memory usage beats 86.36 % of javascript submissions (34.5 MB)

## Explanation

For this solution, I am building a data disctionary in order to iterate through the given array of numbers and retrieve the indexes.

We know that the solution only needs a single answer of two indexes.
We also know that the given array must contain two values which add up to the target.

This means that:
    `target` minus _some value of `nums`_ **must** exist in the given `nums` array. 

Therefore, we can iterate through the `nums` array, apply the above check and get the index based on the iterator value. 
In other words, if the sum of `target` minus _some value_ exists in `nums`, then we need to output the corresponding indexes. 

If the sum isn't in the array, we make a record of the previous index and continue checking until we get our answer. 