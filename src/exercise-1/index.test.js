const missingNumber = require("./index");

/**
 *  Input: nums = [9,6,4,2,3,5,7,0,1]
    Output: 8
    Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 */
test("Should return missing number", () => {
  const arr = [9, 6, 4, 2, 3, 5, 7, 0, 1];
  expect(missingNumber(arr)).toEqual(8);
});
