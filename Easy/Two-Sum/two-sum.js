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