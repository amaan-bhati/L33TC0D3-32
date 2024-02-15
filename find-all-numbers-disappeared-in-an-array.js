var findDisappearedNumbers = function (nums) {
    let n = nums.length;
    let ans = new Set(nums);
    let array = [];
    for (let i = 1; i <= n; i++) {
        if (!ans.has(i)) {
            array.push(i);
        }
    }
    return array;
}
    
