var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b);

    let sum = 0;

    // Pair the elements at even indices with elements at odd indices
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }

    return sum;
};
