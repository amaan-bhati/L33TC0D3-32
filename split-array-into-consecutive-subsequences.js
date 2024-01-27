var isPossible = function (nums) {
    let list = [[nums[0]]]
    for (let i = 1; i < nums.length; i++) {
        for (let j = list.length - 1; j >= 0; j--) {
            if (list[j][list[j].length - 1] + 1 === nums[i]) {
                list[j].push(nums[i])
                j = -1
            } else if (list[j][list[j].length - 1] + 1 < nums[i] && list[j].length < 3) {
                return false
            } else if (j === 0) {
                list.push([nums[i]])
            }

        }
    }
    for (let j = 0; j < list.length; j++) {
        if (list[j].length < 3) return false
    }
    console.log(list)
    return true
};
