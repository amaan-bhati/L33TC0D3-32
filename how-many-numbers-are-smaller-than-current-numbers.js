function countSmallerNumbersThanCurrent(nums) {
  const result = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i] && i !== j) {
        result[i]++;
      }
    }
  }

  return result;
}
