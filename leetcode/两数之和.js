var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(target - nums[i], i)
        } else {
            return [map.get(nums[i]), i]
        }
    }
    return []
};